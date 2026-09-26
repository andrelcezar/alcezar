// Sincroniza os vídeos mais recentes do canal do YouTube com o site.
// Lê o feed público do canal (sem chave de API) e grava assets/js/videos-canal.js.
// Roda sozinho todo dia pelo GitHub Actions (.github/workflows/sync-youtube.yml),
// mas também pode ser rodado à mão: node scripts/sync-youtube.mjs
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const CANAL = process.env.YOUTUBE_CHANNEL_ID || "UCF9e-XE_qMm13VJZvnv0OeQ";
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CANAL}`;
const SAIDA = new URL("../assets/js/videos-canal.js", import.meta.url);
const HTML = new URL("../index.html", import.meta.url);

const entidades = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
const decodificar = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&(amp|lt|gt|quot|apos);/g, (_, e) => entidades[e]);
const tag = (xml, nome) => { const m = xml.match(new RegExp(`<${nome}[^>]*>([\\s\\S]*?)</${nome}>`)); return m ? decodificar(m[1]).trim() : ""; };

// Primeiro parágrafo da descrição, sem a marcação **negrito**, hashtags e emojis soltos
const resumo = (texto) => {
  const par = texto.replace(/\*\*/g, "").split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim())
    .find((p) => p && !p.startsWith("#")) || "";
  return par.length > 220 ? par.slice(0, 217).replace(/\s+\S*$/, "") + "…" : par;
};

async function baixar() {
  let erro;
  for (let tentativa = 1; tentativa <= 4; tentativa++) {
    try {
      const r = await fetch(FEED, { headers: { "user-agent": "Mozilla/5.0 (site andre-luiz; sync-youtube)" } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const xml = await r.text();
      if (!xml.includes("<feed")) throw new Error("resposta não é um feed");
      return xml;
    } catch (e) {
      erro = e;
      console.warn(`Tentativa ${tentativa} falhou: ${e.message}`);
      await new Promise((ok) => setTimeout(ok, 2000 * 2 ** tentativa));
    }
  }
  throw erro;
}

const xml = await baixar();
const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => ({
  id: tag(e, "yt:videoId"),
  titulo: tag(e, "title"),
  descricao: resumo(tag(e, "media:description")),
  publicado: tag(e, "published").slice(0, 10)
})).filter((v) => /^[\w-]{11}$/.test(v.id));

if (!videos.length) { console.error("Feed sem vídeos; nada foi alterado."); process.exit(1); }

const conteudo = `/* Gerado por scripts/sync-youtube.mjs a partir do canal do YouTube. Não edite à mão:
   para esconder um vídeo do site, coloque o id dele em "canal.ocultar" (assets/js/data.js). */
window.VIDEOS_CANAL = ${JSON.stringify({ canal: CANAL, videos }, null, 2)};
`;

let anterior = "";
try { anterior = await readFile(SAIDA, "utf8"); } catch { /* primeira vez */ }
if (anterior === conteudo) { console.log(`Sem novidades (${videos.length} vídeos no feed).`); process.exit(0); }

await writeFile(SAIDA, conteudo);
// muda o ?v= do arquivo na página inicial para o navegador não usar a versão antiga
const versao = createHash("sha1").update(conteudo).digest("hex").slice(0, 8);
const html = await readFile(HTML, "utf8");
await writeFile(HTML, html.replace(/videos-canal\.js\?v=[\w-]*/, `videos-canal.js?v=${versao}`));
console.log(`Atualizado: ${videos.length} vídeos (versão ${versao}).`);

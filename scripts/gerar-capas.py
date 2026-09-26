"""Gera as capas dos vídeos do canal no mesmo estilo das capas feitas à mão.

Lê a lista do canal (assets/js/videos-canal.js) e o bloco "canal" de assets/js/data.js,
e grava assets/images/capas/<id>.webp. Só refaz uma capa quando o texto dela muda.
Roda no GitHub Actions logo depois de scripts/sync-youtube.mjs; à mão:
    pip install pillow && python3 scripts/gerar-capas.py

Os textos saem do título do vídeo no YouTube. Para ajustar uma capa, use
canal.capas em data.js, por exemplo:
    capas: { "MXHjqOleR0Q": { titulo: "Chronovisor", linha1: "High Moonlight", linha2: "Solo de baixo", selo: "Baixo" } }
Use capa: false para não gerar a capa de um vídeo.
"""
import hashlib, json, re, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
PASTA = RAIZ / "assets/images/capas"
MANIFESTO = PASTA / "capas.json"
BASE = RAIZ / "scripts/capas/base.webp"
FONTES = RAIZ / "scripts/capas/fontes"
VERSAO = "1"  # mude para refazer todas as capas depois de alterar o desenho

BRANCO = (237, 232, 224)
VERMELHO = (227, 20, 27)
SALMAO = (240, 112, 112)
X0, LARG = 65, 620             # área do texto: de x=65 até ~685
TOPO, FUNDO = 175, 680         # faixa vertical onde o bloco é centralizado


def dados():
    js = ("global.window={};require('./assets/js/data.js');require('./assets/js/videos-canal.js');"
          "const D=window.SITE_DATA;console.log(JSON.stringify({canal:D.canal||{},"
          "curados:(D.videos||[]).map(v=>({id:v.id,thumb:v.thumb||''})),"
          "videos:(window.VIDEOS_CANAL||{}).videos||[]}))")
    return json.loads(subprocess.check_output(["node", "-e", js], cwd=RAIZ, text=True))


def sugerir(titulo):
    """Divide um título do YouTube em título grande, duas linhas e selo."""
    partes = [p.strip() for p in titulo.split("|")]
    principal, extras = partes[0], [p for p in partes[1:] if p]
    parenteses = re.findall(r"[\(\[]([^\)\]]+)[\)\]]", principal)
    principal = re.sub(r"\s*[\(\[][^\)\]]+[\)\]]", "", principal).strip()
    texto = titulo.lower()
    ao_vivo = bool(re.search(r"\bao vivo\b|\blive\b", texto))
    cover = "cover" in texto
    clipe = bool(re.search(r"official (4k )?video|clipe|videoclipe", texto))

    artista, musica = "", principal
    pedacos = re.split(r"\s+[–—-]\s+", principal, maxsplit=1)
    if len(pedacos) == 2:
        artista, musica = pedacos
    musica = re.sub(r"\s+por\s+Andr[ée].*$", "", musica, flags=re.I).strip()

    linha1, linha2 = [artista] if artista else [], []
    for p in parenteses:
        m = re.match(r"(.*?)\s*\bcover\b", p, re.I)
        if m:
            if m.group(1) and not artista: linha1.insert(0, m.group(1))
            continue
        m = re.match(r"ao vivo( n[oa]| em)?\s*(.*)", p, re.I)
        if m:
            if m.group(2): linha2.append(m.group(2))
            continue
        if re.search(r"tribute|tributo", p, re.I):
            linha1.append(re.sub(r"(.*)\s+tribute", r"Tributo a \1", p, flags=re.I))
        else:
            linha2.append(p)
    if cover: linha1.append("Cover")
    linha2 += extras
    selo = "Ao vivo" if ao_vivo else "Cover" if cover else "Clipe" if clipe else "Novo"
    return {"titulo": musica or principal, "linha1": " · ".join(linha1), "linha2": " · ".join(linha2), "selo": selo}


def fonte(nome, tam, peso=None):
    f = ImageFont.truetype(str(FONTES / nome), tam)
    if peso: f.set_variation_by_axes([peso])
    return f


def quebrar(texto, f, largura):
    linhas, atual = [], ""
    for palavra in texto.split(" "):  # só espaço comum: o espaço fixo (\u00a0) não quebra
        teste = f"{atual} {palavra}".strip()
        if f.getlength(teste) <= largura or not atual: atual = teste
        else: linhas.append(atual); atual = palavra
    return linhas + [atual] if atual else linhas


def caber(texto, f_nome, largura, max_linhas, max_tam, min_tam, peso=None, max_altura=None):
    for tam in range(max_tam, min_tam - 1, -4):
        f = fonte(f_nome, tam, peso)
        linhas = quebrar(texto, f, largura)
        if max_altura and round(tam * 0.9) * len(linhas) > max_altura: continue
        if len(linhas) <= max_linhas and all(f.getlength(l) <= largura for l in linhas):
            return f, linhas, tam
    f = fonte(f_nome, min_tam, peso)
    return f, quebrar(texto, f, largura)[:max_linhas], min_tam


def risco(d, x, y, largura):
    """Traço vermelho com borda irregular, como nas capas feitas à mão."""
    import random
    r = random.Random(largura)
    cima = [(x + i, y + r.uniform(-2, 2)) for i in range(0, largura + 1, 12)]
    baixo = [(x + i, y + 9 + r.uniform(-2.5, 2.5)) for i in range(largura, -1, -12)]
    d.polygon(cima + baixo, fill=VERMELHO)


def desenhar(txt, destino):
    im = Image.open(BASE).convert("RGB")
    d = ImageDraw.Draw(im)
    # a barra fica grudada na palavra anterior, para nunca sobrar sozinha numa linha
    titulo = re.sub(r"\s+([/&+·-])\s+", "\u00a0\\1 ", txt["titulo"].upper())
    ft, linhas, tam = caber(titulo, "BebasNeue-Regular.ttf", LARG, 3, 200, 70, max_altura=320)
    passo = round(tam * 0.9)
    l1, l2 = txt.get("linha1", "").upper(), txt.get("linha2", "").upper()
    l1 = caber(l1, "Manrope[wght].ttf", LARG, 1, 32, 22, 800)[1][:1] if l1 else []
    l2 = caber(l2, "Manrope[wght].ttf", LARG, 1, 32, 22, 800)[1][:1] if l2 else []
    # centraliza o bloco (do topo das letras do título até a última linha) na faixa TOPO..FUNDO
    topo_h, base_h = ft.getbbox("H")[1], ft.getbbox("H")[3]
    n_linhas = len(l1) + len(l2)
    altura = passo * (len(linhas) - 1) + (base_h - topo_h) + 26 + 9 + (38 + 46 * (n_linhas - 1) if n_linhas else 0)
    y = TOPO + max(0, (FUNDO - TOPO - altura) // 2) - topo_h
    for i, linha in enumerate(linhas):
        d.text((X0 - 2, y + i * passo), linha, font=ft, fill=BRANCO)
    y_fim = y + passo * (len(linhas) - 1) + base_h
    largura_risco = min(LARG, max(int(max(ft.getlength(l) for l in linhas)), 360))
    risco(d, X0, y_fim + 26, largura_risco)
    y2 = y_fim + 26 + 9 + 38
    for linha, cor in ((l1, BRANCO), (l2, SALMAO)):
        if not linha: continue
        f = caber(linha[0], "Manrope[wght].ttf", LARG, 1, 32, 22, 800)[0]
        d.text((X0, y2), linha[0], font=f, fill=cor, anchor="ls")
        y2 += 46
    # selo no canto superior direito (cobre o selo da imagem base)
    selo = txt.get("selo", "").upper()
    fs = fonte("BebasNeue-Regular.ttf", 50)
    larg_selo = max(166, int(fs.getlength(selo)) + 40) if selo else 166
    d.rectangle((1215 - larg_selo, 54, 1215, 118), fill=VERMELHO)
    if selo: d.text((1215 - larg_selo / 2, 88), selo, font=fs, fill=(255, 255, 255), anchor="mm")
    im.save(destino, quality=80, method=6)


def main():
    D = dados()
    canal = D["canal"]
    ajustes = canal.get("capas") or {}
    # vídeos da lista "videos" com capa feita à mão (imagem local fora de assets/images/capas) ficam de fora
    com_capa_propria = {v["id"] for v in D["curados"]
                        if v["thumb"] and not v["thumb"].startswith(("http", "assets/images/capas/"))}
    manifesto = json.loads(MANIFESTO.read_text()) if MANIFESTO.exists() else {}
    novo, feitas = {}, 0
    for v in D["videos"]:
        vid, ajuste = v["id"], ajustes.get(v["id"], {})
        if vid in com_capa_propria or ajuste.get("capa") is False: continue
        txt = {**sugerir(v["titulo"]), **{k: ajuste[k] for k in ("titulo", "linha1", "linha2", "selo") if k in ajuste}}
        chave = hashlib.sha1(json.dumps([VERSAO, txt], ensure_ascii=False, sort_keys=True).encode()).hexdigest()[:10]
        destino = PASTA / f"{vid}.webp"
        novo[vid] = chave
        if manifesto.get(vid) == chave and destino.exists(): continue
        desenhar(txt, destino)
        feitas += 1
        print(f"capa: {vid} -> {txt}")
    # mantém capas antigas (o vídeo pode ter saído do feed, mas continuar no site)
    for vid, chave in manifesto.items(): novo.setdefault(vid, chave)
    PASTA.mkdir(parents=True, exist_ok=True)
    MANIFESTO.write_text(json.dumps(dict(sorted(novo.items())), indent=2) + "\n")
    print(f"{feitas} capa(s) gerada(s).")


if __name__ == "__main__":
    sys.exit(main())

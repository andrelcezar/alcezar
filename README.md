# André Luiz — Baixista | site oficial

Site em HTML5, CSS3 e JavaScript puro. Sem frameworks, sem etapa de build e sem dependências para instalar.

## Estrutura

```text
/
├── index.html              página inicial (todas as seções)
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── css/style.css       todo o visual (cores e fontes no topo, em :root)
│   ├── js/data.js          TODO o conteúdo editável (serviços, fotos, vídeos, posts, redes, contato)
│   ├── js/script.js        interações (menu, galeria, vídeos, blog, formulário, animações)
│   ├── images/             imagens do site
│   │   └── galeria/        fotos da galeria (versão grande + "-thumb")
│   ├── videos/             arquivos .mp4 próprios (opcional)
│   └── icons/              favicon e ícone para celular
└── pages/
    ├── galeria.html        galeria completa com filtros
    ├── blog.html           lista de posts e leitura de cada post (?post=slug)
    ├── contato.html        formulário e canais de contato
    ├── privacidade.html    modelo de política de privacidade
    └── termos.html         modelo de termos de uso
```

## Como executar localmente

O site usa caminhos relativos e funciona abrindo o `index.html`, mas o ideal é servir a pasta:

```bash
cd pasta-do-site
python3 -m http.server 8000
# abra http://localhost:8000
```

Para publicar, envie a pasta inteira para qualquer hospedagem estática (Hostinger, Netlify, Vercel, GitHub Pages, cPanel etc.).

## Editando o conteúdo

Quase tudo fica em `assets/js/data.js`. Abra, edite o texto entre aspas e salve.

**Contato e WhatsApp:** bloco `contato`. O número vai só com dígitos, com DDI e DDD (`5511980469450`).

**Redes sociais:** bloco `redes`. Os ícones disponíveis são `instagram`, `youtube` e `whatsapp`.

**Serviços:** bloco `servicos`. Ícones disponíveis: `palco`, `estudio`, `camera`, `arranjo`. O `link` pode ser uma âncora (`#contato`) ou uma URL.

**Fotos:** coloque a imagem em `assets/images/galeria/` (de preferência uma versão grande de até 1600 px e uma miniatura de ~560 px, em `.webp` ou `.jpg`) e adicione um item no bloco `galeria`:

```js
{ src: "assets/images/galeria/show-sp.webp", thumb: "assets/images/galeria/show-sp-thumb.webp",
  titulo: "Show em SP", legenda: "Com a High Moonlight", categoria: "palco", tamanho: "normal" }
```

`categoria` gera os filtros automaticamente (`palco`, `retrato`, `arte` já têm nome bonito; outras aparecem como escritas). `tamanho` pode ser `normal`, `alta` (ocupa duas linhas) ou `larga` (ocupa duas colunas).

**Vídeos:** bloco `videos`. Tipos aceitos:

- YouTube: `tipo: "youtube"`, `id: "09d6qC0DHO8"` (o código depois de `youtu.be/`)
- Vimeo: `tipo: "vimeo"`, `id: "123456789"`
- MP4 próprio: coloque o arquivo em `assets/videos/` e use `tipo: "mp4"`, `id: "assets/videos/nome.mp4"`

O vídeo com `destaque: true` aparece grande; os outros viram cards abaixo. Nada toca sozinho: o vídeo só carrega quando o visitante clica.

**Posts do blog:** bloco `posts`. Cada post tem `slug` (vira o endereço `pages/blog.html?post=slug`), `titulo`, `categoria`, `data` (formato `AAAA-MM-DD`), `capa`, `resumo` e `conteudo` (lista de parágrafos). O post com `destaque: true` aparece em tamanho grande. A página inicial mostra os 3 mais recentes.

> Os 3 posts atuais são **demonstrativos**, escritos a partir da sua trajetória. Revise antes de publicar.

Para transformar o blog em dinâmico depois, basta preencher `SITE_DATA.posts` a partir de uma API ou de um arquivo JSON antes do `script.js` rodar.

**Textos fixos** (títulos, "Sobre", bandas, CTA): estão direto em `index.html`, em HTML simples.

## Alterando cores e fontes

No topo de `assets/css/style.css`:

```css
--vermelho: #e3141b;   /* cor de destaque */
--osso: #ede8e0;       /* texto principal */
--preto: #000000;      /* fundo */
--fonte-display: "Big Shoulders Display", ...;  /* títulos */
--fonte-texto: "Archivo", ...;                  /* textos */
```

As fontes vêm do Google Fonts (link no `<head>` de cada página). Se trocar a fonte, troque também esse link.

## Formulário de contato

Hoje o formulário **valida os campos, mas não envia e-mail**, porque não há backend. Ao enviar, ele avisa isso claramente e oferece mandar a mesma mensagem pelo WhatsApp, já preenchida.

Para ativar o envio real, crie um endpoint (Formspree, Getform, Basin, ou um backend próprio) e cole a URL em `data.js`:

```js
formulario: { endpoint: "https://formspree.io/f/SEU_ID", metodo: "POST" }
```

O script envia os campos `nome`, `email`, `telefone`, `assunto`, `mensagem` e `aceite` em JSON e mostra sucesso ou erro conforme a resposta.

## Antes de publicar

1. Troque `https://www.seudominio.com.br` pelo domínio real em todas as páginas (`canonical`, `og:url`, `og:image`), no `sitemap.xml`, no `robots.txt` e no bloco Schema.org do `index.html`. Um "localizar e substituir" na pasta resolve.
2. Revise os textos de `privacidade.html` e `termos.html` (são modelos).
3. Troque ou complemente a galeria com fotos reais de shows.

## Recursos incluídos

Menu fixo com efeito ao rolar e indicação da seção atual; menu mobile acessível (Esc fecha, foco volta ao botão); hero com entrada animada e parallax; revelação de conteúdo ao rolar; galeria com filtros, lightbox, setas, teclado (← → Esc) e arrastar no celular; vídeos em modal (YouTube em modo privacidade aprimorada, Vimeo ou MP4); blog com post em destaque e página de leitura; formulário com validação, máscara de telefone e mensagens de erro acessíveis; botão voltar ao topo; SEO (title, description, Open Graph, canonical, Schema.org Person, sitemap, robots); `prefers-reduced-motion` respeitado; lazy loading nas imagens.

## Dependências

Nenhuma biblioteca JavaScript ou CSS. Únicos recursos externos: Google Fonts (tipografia) e, só quando o visitante clica, o player do YouTube/Vimeo e a miniatura do vídeo (com imagem local de reserva).

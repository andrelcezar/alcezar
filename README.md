# André Luiz — Baixista | site oficial

Site em HTML5, CSS3 e JavaScript com **Bootstrap 5.3** e **Bootstrap Icons**. Sem etapa de build e sem nada para instalar: o Bootstrap já vem dentro do projeto, em `assets/vendor/`.

## Estrutura

```text
/
├── index.html              página inicial (todas as seções)
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── css/style.css       tema visual sobre o Bootstrap (cores e fontes no topo, em :root)
│   ├── vendor/             Bootstrap 5.3.3 e Bootstrap Icons 1.11.3 (arquivos locais, com licenças)
│   ├── js/data.js          TODO o conteúdo editável (serviços, fotos, vídeos, posts, redes, contato)
│   ├── js/i18n.js          idiomas PT/EN: seletor e dicionário de tradução
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

**Redes sociais:** bloco `redes`. O `icone` é um nome do Bootstrap Icons (`instagram`, `youtube`, `whatsapp`, `spotify`, `facebook`, `tiktok`…).

**Serviços:** bloco `servicos`. O `icone` é qualquer nome do Bootstrap Icons, sem o prefixo `bi-` (catálogo em https://icons.getbootstrap.com), por exemplo `mic-fill`, `speaker-fill`, `music-note-beamed`. O `link` pode ser uma âncora (`#contato`) ou uma URL.

**Discografia:** bloco `lancamentos`. Cada item tem `titulo`, `artista`, `tipo` (Álbum, Single, EP, Demo), `ano`, `detalhe`, `link` e `acao` (texto do botão). Use `video: 0` para o botão abrir o vídeo nº 0 do bloco `videos` no modal. `cor` define a cor da capa ilustrada.

**Carreira (linha do tempo):** bloco `trajetoria`, em ordem. `quando` aceita ano ou texto curto ("3 anos", "Hoje").

**Depoimentos:** bloco `depoimentos`. A seção (entre o Blog e o "Vamos tocar?") mostra um card por item; enquanto o `texto` estiver vazio, o card aparece como "Depoimento em breve". Campos: `nome`, `papel` (banda ou projeto), `local`, `texto` (o depoimento como a pessoa escreveu), `traducao` (opcional, aparece abaixo em itálico) e `foto` (opcional, imagem quadrada; sem foto, aparece a inicial do nome). Com um depoimento, o card fica largo; com dois ou mais, em duas colunas.

**Fotos:** coloque a imagem em `assets/images/galeria/` (de preferência uma versão grande de até 1600 px e uma miniatura de ~560 px, em `.webp` ou `.jpg`) e adicione um item no bloco `galeria`:

```js
{ src: "assets/images/galeria/show-sp.webp", thumb: "assets/images/galeria/show-sp-thumb.webp",
  titulo: "Show em SP", legenda: "Com a High Moonlight", categoria: "palco", tamanho: "normal" }
```

`categoria` gera os filtros automaticamente (`palco`, `retrato`, `arte` já têm nome bonito; outras aparecem como escritas). `tamanho` pode ser `normal`, `alta` (ocupa duas linhas) ou `larga` (ocupa duas colunas).

**Vídeos:** bloco `videos`. Tipos aceitos:

- YouTube: `tipo: "youtube"`, `id: "QfadM3NaDBE"` (o código depois de `youtu.be/`)
- Vimeo: `tipo: "vimeo"`, `id: "123456789"`
- MP4 próprio: coloque o arquivo em `assets/videos/` e use `tipo: "mp4"`, `id: "assets/videos/nome.mp4"`

O vídeo com `destaque: true` aparece grande; os outros viram cards abaixo. Nada toca sozinho: o vídeo só carrega quando o visitante clica.

**Posts do blog:** bloco `posts`. Cada post tem `slug` (vira o endereço `pages/blog.html?post=slug`), `titulo`, `categoria`, `data` (formato `AAAA-MM-DD`), `capa`, `resumo` e `conteudo` (lista de parágrafos). O post com `destaque: true` aparece em tamanho grande. A página inicial mostra os 3 mais recentes.

> Os 3 posts atuais são **demonstrativos**, escritos a partir da sua trajetória. Revise antes de publicar.

Para transformar o blog em dinâmico depois, basta preencher `SITE_DATA.posts` a partir de uma API ou de um arquivo JSON antes do `script.js` rodar.

**Textos fixos** (títulos, "Sobre", números de destaque, CTA): estão direto em `index.html`, em HTML simples com classes do Bootstrap.

**Atualização no navegador:** os arquivos CSS e JS são carregados com `?v=AAAAMMDD` no fim do endereço, em todas as páginas. Depois de editar `data.js`, `script.js` ou `style.css`, troque esse número (localizar e substituir na pasta) para os visitantes receberem a versão nova em vez da guardada em cache.

## Idiomas (português / inglês)

O site é bilíngue. O seletor **PT | EN** fica na barra do topo, visível também no celular.

- **Idioma inicial:** navegador em português abre em PT e qualquer outro idioma abre em EN. A escolha do visitante fica guardada no navegador.
- **Link direto:** `?lang=en` ou `?lang=pt` no fim do endereço força o idioma, por exemplo `https://seusite/?lang=en` para mandar a alguém de fora do Brasil.
- **Textos fixos das páginas (HTML):** estão em `assets/js/i18n.js`, no dicionário `EN`. A chave é o texto exato em português e o valor é a tradução. **Se mudar um texto em português no HTML, mude também a chave no dicionário**, senão ele aparece em português na versão em inglês.
- **Conteúdo de `data.js`:** cada item tem um bloco `en: { ... }` com os campos traduzidos. O que não estiver no `en` aparece igual nos dois idiomas.
- **Depoimentos:** `texto` é o original, como a pessoa escreveu. `traducao` aparece só na versão em português; no bloco `en`, deixe `traducao: ""` quando o original já estiver em inglês.
- **Formulário:** a validação e os avisos aparecem no idioma do visitante. O e-mail que chega continua em português, com um campo `idioma` dizendo em qual versão a pessoa escreveu. Na versão em inglês o telefone aceita números de outros países e não usa a máscara brasileira.
- **Google:** a tradução acontece no navegador, então os buscadores indexam principalmente a versão em português.

## Alterando cores e fontes

No topo de `assets/css/style.css`:

```css
--vermelho: #e3141b;   /* cor de destaque */
--osso: #ede8e0;       /* texto principal */
--preto: #000000;      /* fundo */
--fonte-display: "Big Shoulders Display", ...;  /* títulos */
--fonte-texto: "Archivo", ...;                  /* textos */
```

O tema mapeia essas cores para as variáveis do Bootstrap (`--bs-primary`, `--bs-body-bg` etc.), então botões, formulários e alertas seguem a paleta automaticamente. As fontes vêm do Google Fonts (link no `<head>` de cada página). Se trocar a fonte, troque também esse link.

## Bootstrap

O site usa Bootstrap 5.3.3 em modo escuro (`data-bs-theme="dark"`): grid e utilitários, navbar com menu lateral (offcanvas) no celular, modais para fotos e vídeos, carrossel no lightbox, breadcrumbs, badges, alertas e estilos de validação de formulário. Os arquivos ficam em `assets/vendor/bootstrap/` e `assets/vendor/bootstrap-icons/`, então o site funciona offline e não depende de CDN. Para atualizar, substitua esses arquivos por uma versão nova.

## Formulário de contato

O formulário **envia e-mail para aluiz.cez@gmail.com** pelo [FormSubmit](https://formsubmit.co), serviço gratuito que não exige backend nem cadastro. A configuração fica em `data.js`:

```js
formulario: { endpoint: "https://formsubmit.co/ajax/aluiz.cez@gmail.com", metodo: "POST" }
```

**Ativação (uma vez só):** depois de publicar o site, envie uma mensagem de teste pelo formulário. O FormSubmit manda um e-mail de confirmação para aluiz.cez@gmail.com; clique em **Activate Form**. A partir daí, cada envio chega como e-mail com o assunto "Contato pelo site: …", e o botão "Responder" já vai para o e-mail do visitante. Se o e-mail de ativação não aparecer, procure no spam.

Detalhes:

- O envio só funciona com o site publicado (ou servido por `python3 -m http.server`), não abrindo o arquivo direto do computador.
- Há um campo-armadilha invisível (`_honey`) contra robôs de spam.
- Se o envio falhar, o visitante vê um aviso e um link para mandar a mesma mensagem, já preenchida, pelo WhatsApp.
- Para esconder o endereço de e-mail do código, o FormSubmit oferece, após a ativação, um endereço aleatório (ex.: `https://formsubmit.co/ajax/abc123…`); basta trocar o `endpoint`.
- Para usar outro serviço (Formspree, Getform, backend próprio), troque o `endpoint`. O script envia JSON com `nome`, `email`, `telefone`, `assunto`, `mensagem`, `aceite` e `pagina`.

## Antes de publicar

1. Troque `https://www.seudominio.com.br` pelo domínio real em todas as páginas (`canonical`, `og:url`, `og:image`), no `sitemap.xml`, no `robots.txt` e no bloco Schema.org do `index.html`. Um "localizar e substituir" na pasta resolve.
2. Revise os textos de `privacidade.html` e `termos.html` (são modelos).
3. Troque ou complemente a galeria com fotos reais de shows.

## Recursos incluídos

Menu fixo com efeito ao rolar e indicação da seção atual; menu lateral no celular (offcanvas do Bootstrap); destaque do lançamento atual no topo; números da carreira; linha do tempo; discografia com capas ilustradas; hero com entrada animada e parallax; revelação de conteúdo ao rolar; galeria com filtros e lightbox em carrossel (setas, teclado ← → Esc e arrastar no celular); vídeos em modal (YouTube em modo privacidade aprimorada, Vimeo ou MP4); blog com post em destaque e página de leitura; formulário com validação, máscara de telefone e mensagens de erro acessíveis; botão voltar ao topo; SEO (title, description, Open Graph, canonical, Schema.org Person, sitemap, robots); `prefers-reduced-motion` respeitado; lazy loading nas imagens.

## Dependências

Bootstrap 5.3.3 e Bootstrap Icons 1.11.3 (licença MIT, incluídos no projeto). Recursos externos: Google Fonts (tipografia) e, só quando o visitante clica, o player do YouTube/Vimeo e a miniatura do vídeo (com imagem local de reserva).

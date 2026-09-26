/* =========================================================
   Idiomas (PT / EN)
   O site é escrito em português. Com o inglês ativo, este script
   troca cada texto que tiver tradução no dicionário EN abaixo
   (a chave é o texto exato em português, ignorando espaços extras).
   Textos de data.js usam o bloco "en" de cada item.

   Ao mudar um texto em português no HTML, atualize a chave aqui,
   senão ele continua em português na versão em inglês.
   ========================================================= */
(function () {
  "use strict";

  const EN = {
    /* ---- títulos e descrições das páginas ---- */
    "André Luiz — Baixista freelancer de metal | São Paulo": "André Luiz — Freelance metal bassist | São Paulo, Brazil",
    "André Luiz, baixista freelancer de metal desde 2007. Baixo no álbum Lycans (High Moonlight), cover autorizado pelo Therion com a Opus Eclipse. Shows, estúdio e videoclipes.": "André Luiz, freelance metal bassist since 2007. Bass on High Moonlight's album Lycans and in Opus Eclipse, the Therion tribute authorized by the band. Live shows, studio and music videos.",
    "Galeria de fotos | André Luiz — Baixista": "Photo gallery | André Luiz — Bassist",
    "Fotos de palco, retratos e artes de André Luiz, baixista de metal.": "Stage photos, portraits and artwork of André Luiz, metal bassist.",
    "Blog | André Luiz — Baixista": "Blog | André Luiz — Bassist",
    "Histórias, bastidores e técnica de contrabaixo no metal, por André Luiz.": "Stories, behind the scenes and bass technique in metal, by André Luiz.",
    "Contato | André Luiz — Baixista": "Contact | André Luiz — Bassist",
    "Contrate André Luiz para shows, substituições, gravação de estúdio e videoclipes.": "Hire André Luiz for live shows, fill-ins, studio recording and music videos.",
    "Política de privacidade | André Luiz — Baixista": "Privacy policy | André Luiz — Bassist",
    "Como os dados enviados pelo site de André Luiz são tratados.": "How data sent through André Luiz's website is handled.",
    "Termos de uso | André Luiz — Baixista": "Terms of use | André Luiz — Bassist",
    "Termos de uso do site de André Luiz, baixista.": "Terms of use for the website of André Luiz, bassist.",
    "André Luiz — Baixista": "André Luiz — Bassist",

    /* ---- menu, rodapé e elementos comuns ---- */
    "Pular para o conteúdo": "Skip to content",
    "Principal": "Main",
    "André Luiz, baixista — página inicial": "André Luiz, bassist — home page",
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    "Início": "Home",
    "Sobre": "About",
    "Carreira": "Career",
    "Discografia": "Discography",
    "Vídeos": "Videos",
    "Galeria": "Gallery",
    "Contato": "Contact",
    "Contratar": "Hire me",
    "Baixista freelancer de metal desde 2007. Shows, estúdio e videoclipes.": "Freelance metal bassist since 2007. Live shows, studio and music videos.",
    "Navegue": "Explore",
    "Formulário de contato": "Contact form",
    "São Paulo, SP": "São Paulo, Brazil",
    "Política de privacidade": "Privacy policy",
    "Termos de uso": "Terms of use",
    "André Luiz — Baixista. Todos os direitos reservados.": "André Luiz — Bassist. All rights reserved.",
    "Rock na veia, sempre.": "Rock in my veins, always.",
    "Voltar ao topo": "Back to top",
    "Você está em": "You are here",
    "Foto ampliada": "Enlarged photo",
    "Fechar": "Close",
    "Foto anterior": "Previous photo",
    "Próxima foto": "Next photo",
    "Reprodução de vídeo": "Video player",
    "Fechar vídeo": "Close video",
    "{nome} (abre em nova aba)": "{nome} (opens in a new tab)",

    /* ---- página inicial ---- */
    "Lançamento:": "New release:",
    "BAIXISTA": "BASSIST",
    "Baixista freelancer de metal desde 2007. Do metal sinfônico ao thrash, levo para o palco, o estúdio e o videoclipe um grave firme que serve à música.": "Freelance metal bassist since 2007. From symphonic metal to thrash, I bring a solid low end that serves the song — on stage, in the studio and on camera.",
    "Chamar no WhatsApp": "Message me on WhatsApp",
    "Ver o videoclipe": "Watch the music video",
    "Rolar até a seção Sobre": "Scroll to the About section",
    "Destaques da carreira": "Career highlights",
    "primeiro palco": "first time on stage",
    "bandas e projetos": "bands and projects",
    "cover autorizado pelo Therion": "tribute authorized by Therion",
    "álbum “Lycans” no baixo": "on bass for the album “Lycans”",
    "André Luiz tocando baixo de cinco cordas sob luz vermelha e verde": "André Luiz playing a five-string bass under red and green light",
    "Quase duas décadas de grave pesado": "Almost two decades of heavy low end",
    "Em fevereiro de 2007 entrei na primeira formação da Opus Eclipse e fiquei até 2012. Foram cinco anos com um repertório que não perdoa: arranjos longos, orquestrações e coros líricos que exigem um baixo preciso e sem sobra. Depois vieram três anos com a Noctra, tributo a Epica e After Forever.": "In February 2007 I joined the original lineup of Opus Eclipse and stayed until 2012. Five years with an unforgiving setlist: long arrangements, orchestrations and operatic choirs that demand a precise, no-frills bass. Then came three years with Noctra, a tribute to Epica and After Forever.",
    "No autoral, encontrei o peso do thrash com a Sophie's Threat e o heavy metal clássico com a High Moonlight, veterana da cena paulistana, com quem gravei o álbum “Lycans” (2025) e o videoclipe de “Heavy Play”. Hoje toco como freelancer e desenvolvo o RootingDoom, meu projeto de som próprio.": "In original music, I found the weight of thrash with Sophie's Threat and classic heavy metal with High Moonlight, a veteran of the São Paulo scene, with whom I recorded the album “Lycans” (2025) and the music video for “Heavy Play”. Today I play as a freelancer and develop RootingDoom, my own music project.",
    "Cover autorizado pelo Therion": "Tribute authorized by Therion",
    "Em 27/09/2007, a Opus Eclipse foi reconhecida e autorizada por Christofer Johnsson, fundador do Therion, como cover brasileiro da banda.": "On September 27, 2007, Opus Eclipse was recognized and authorized by Christofer Johnsson, founder of Therion, as the band's official Brazilian tribute.",
    "Do tributo sinfônico ao heavy metal autoral, em ordem.": "From symphonic tributes to original heavy metal, in order.",
    "Estilos que toco": "Styles I play",
    "Thrash, heavy e black metal. A música é o meu combustível.": "Thrash, heavy and black metal. Music is my fuel.",
    "Gravações em que assino o baixo.": "Recordings where I play bass.",
    "Como posso somar à sua banda": "How I can add to your band",
    "Trabalho como freelancer em São Paulo e região. Mande a data e o repertório que eu digo se consigo.": "I work as a freelancer in São Paulo, Brazil, and the surrounding area. Send me the date and the setlist and I'll tell you if I can make it.",
    "Canal no YouTube": "YouTube channel",
    "Clipes, ensaios e bastidores em @andrelcezaroficial": "Music videos, rehearsals and behind the scenes at @andrelcezaroficial",
    "Inscrever-se no canal": "Subscribe to the channel",
    "Filtrar fotos": "Filter photos",
    "Abrir a galeria completa": "Open the full gallery",
    "Ver todos os posts": "See all posts",
    "Depoimentos": "Testimonials",
    "O que dizem os músicos com quem gravo e toco.": "What the musicians I record and play with say.",
    "Vamos tocar?": "Let's play?",
    "Show, substituição, gravação ou clipe. Me conte a data e o repertório.": "Live show, fill-in, recording or music video. Tell me the date and the setlist.",
    "Escrever uma mensagem": "Write a message",
    "O caminho mais rápido é o WhatsApp. Se preferir, deixe sua mensagem no formulário.": "WhatsApp is the fastest way to reach me. If you prefer, leave a message using the form.",

    /* ---- formulário ---- */
    "Nome": "Name",
    "E-mail": "Email",
    "Telefone": "Phone",
    "(opcional)": "(optional)",
    "Assunto": "Subject",
    "Escolha uma opção": "Choose an option",
    "Show ou substituição": "Live show or fill-in",
    "Gravação de estúdio": "Studio recording",
    "Videoclipe": "Music video",
    "Banda autoral / projeto": "Original band / project",
    "Outro assunto": "Something else",
    "Mensagem": "Message",
    "Data, cidade, repertório e o que mais for importante.": "Date, city, setlist and anything else that matters.",
    "Não preencha este campo": "Do not fill in this field",
    "Autorizo o uso destes dados para receber resposta ao meu contato, conforme a": "I agree to the use of this data to receive a reply to my message, as described in the",
    "política de privacidade": "privacy policy",
    "Enviar mensagem": "Send message",
    "Campos sem “opcional” são obrigatórios.": "Fields not marked “optional” are required.",
    "Informe seu nome.": "Please enter your name.",
    "Informe um e-mail válido, como nome@exemplo.com.": "Please enter a valid email, like name@example.com.",
    "Telefone com DDD, por exemplo (11) 91234-5678.": "Phone with country and area code, for example +1 216 555 0123.",
    "(11) 91234-5678": "+1 216 555 0123",
    "Escolha um assunto.": "Please choose a subject.",
    "Escreva pelo menos 20 caracteres (faltam {n}).": "Please write at least 20 characters ({n} to go).",
    "Marque para autorizar o contato.": "Please check this box to allow a reply.",
    "Confira os campos destacados antes de enviar.": "Please check the highlighted fields before sending.",
    "Enviando…": "Sending…",
    "Mensagem enviada. Respondo assim que possível.": "Message sent. I'll get back to you as soon as possible.",
    "O envio por e-mail ainda não está ativo neste site, então sua mensagem <strong>não foi enviada</strong>. <a href=\"{link}\" target=\"_blank\" rel=\"noopener\">Enviar esta mensagem pelo WhatsApp</a>.": "Email sending is not active on this site yet, so your message <strong>was not sent</strong>. <a href=\"{link}\" target=\"_blank\" rel=\"noopener\">Send this message via WhatsApp</a>.",
    "Não foi possível enviar agora. Tente de novo ou <a href=\"{link}\" target=\"_blank\" rel=\"noopener\">envie a mesma mensagem pelo WhatsApp</a>.": "Your message couldn't be sent right now. Try again or <a href=\"{link}\" target=\"_blank\" rel=\"noopener\">send the same message via WhatsApp</a>.",
    "Olá, André! Sou {nome}.\nAssunto: {assunto}\n\n{mensagem}\n\nE-mail: {email}": "Hi André! I'm {nome}.\nSubject: {assunto}\n\n{mensagem}\n\nEmail: {email}",
    "\nTelefone: {telefone}": "\nPhone: {telefone}",

    /* ---- conteúdo gerado (galeria, vídeos, blog, depoimentos) ---- */
    "Todas": "All",
    "Palco": "Stage",
    "Retratos": "Portraits",
    "Artes": "Artwork",
    "Ampliar foto: {titulo}": "Enlarge photo: {titulo}",
    "Assistir: {titulo}": "Watch: {titulo}",
    "Assistir agora": "Watch now",
    "Leia mais": "Read more",
    "Post": "Post",
    "Voltar para o blog": "Back to the blog",
    "Post não encontrado": "Post not found",
    "O endereço pode ter mudado.": "The address may have changed.",
    "Tradução: ": "Translation: ",
    "Depoimento em breve.": "Testimonial coming soon.",
    "Capa do álbum {titulo}": "{titulo} album cover",
    "Fonte:": "Source:",
    "Fontes:": "Sources:",

    /* ---- galeria, blog e contato (páginas) ---- */
    "Palco, retratos e a identidade visual AL. Clique em uma foto para ampliar e use as setas para navegar.": "Stage shots, portraits and the AL visual identity. Click a photo to enlarge it and use the arrows to browse.",
    "Trajetória, bastidores de gravação e técnica de baixo no metal.": "Career stories, recording sessions and bass technique in metal.",
    "Show, substituição, gravação ou clipe. Me conte a data, a cidade e o repertório.": "Live show, fill-in, recording or music video. Tell me the date, the city and the setlist.",
    "Fale direto": "Talk to me directly",
    "O WhatsApp é o caminho mais rápido.": "WhatsApp is the fastest way.",

    /* ---- privacidade ---- */
    "Como tratamos os dados que você envia por este site.": "How we handle the data you send through this website.",
    "Modelo inicial. Revise com um profissional antes de publicar.": "Initial template. Review with a professional before publishing.",
    "Quais dados coletamos": "What data we collect",
    "Quando você usa o formulário de contato, recebemos nome, e-mail, telefone (se informado), assunto e mensagem. Não usamos cookies de rastreamento próprios.": "When you use the contact form, we receive your name, email, phone (if provided), subject and message. We don't use our own tracking cookies.",
    "Para que usamos": "How we use it",
    "Apenas para responder ao seu contato e combinar trabalhos. Seus dados não são vendidos nem compartilhados com terceiros para fins de marketing.": "Only to reply to your message and arrange work. Your data is not sold or shared with third parties for marketing purposes.",
    "Serviços de terceiros": "Third-party services",
    "As mensagens do formulário de contato são entregues por e-mail pelo serviço FormSubmit (formsubmit.co), que apenas encaminha os dados informados. Os vídeos são exibidos pelo YouTube em modo de privacidade aprimorada e só carregam quando você clica para assistir. As fontes são carregadas do Google Fonts. Links para WhatsApp, Instagram e YouTube seguem as políticas dessas plataformas.": "Contact form messages are delivered by email through FormSubmit (formsubmit.co), which only forwards the data you provide. Videos are shown by YouTube in privacy-enhanced mode and only load when you click to watch. Fonts are loaded from Google Fonts. Links to WhatsApp, Instagram and YouTube follow those platforms' policies.",
    "Seus direitos (LGPD)": "Your rights (LGPD, Brazil's data protection law)",
    "Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp +55 11 98046-9450 ou pelo": "You can request access to, correction or deletion of your data at any time via WhatsApp +55 11 98046-9450 or through the",
    "formulário de contato": "contact form",

    /* ---- termos ---- */
    "Condições para uso deste site e do seu conteúdo.": "Conditions for using this website and its content.",
    "Uso do conteúdo": "Use of content",
    "Fotos, vídeos, logotipo e textos deste site pertencem a André Luiz ou aos respectivos titulares e não podem ser reproduzidos sem autorização.": "Photos, videos, logo and text on this website belong to André Luiz or their respective owners and may not be reproduced without permission.",
    "Informações": "Information",
    "As informações sobre serviços têm caráter informativo. Datas, valores e condições são combinados diretamente em cada contratação.": "Information about services is for reference only. Dates, fees and conditions are agreed directly for each booking.",
    "Links externos": "External links",
    "Este site aponta para plataformas de terceiros, que têm seus próprios termos.": "This website links to third-party platforms, which have their own terms."
  };

  const CHAVE = "al-lang";
  const html = document.documentElement;
  const detectar = () => {
    let q = null, s = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) { /* sem URLSearchParams */ }
    // um link com ?lang=en vale também para as próximas páginas
    if (q === "pt" || q === "en") { try { localStorage.setItem(CHAVE, q); } catch (e) { /* ok */ } }
    try { s = localStorage.getItem(CHAVE); } catch (e) { /* armazenamento bloqueado */ }
    const l = q || s || ((navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en");
    return l === "en" ? "en" : "pt";
  };
  const LANG = detectar();
  const DIC = LANG === "en" ? EN : {};
  const norm = (t) => t.replace(/\s+/g, " ").trim();

  // t("texto em PT", { var }) → tradução com as variáveis preenchidas
  const t = (pt, vars) => {
    let s = DIC[pt] !== undefined ? DIC[pt] : pt;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    return s;
  };
  // tr(item) → item com os campos do bloco "en" aplicados (só no inglês)
  const tr = (item) => (LANG === "en" && item && item.en ? Object.assign({}, item, item.en) : item);

  const ATRIBUTOS = ["aria-label", "placeholder", "alt", "title"];
  const aplicar = (raiz) => {
    if (LANG === "pt") return;
    const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentNode.closest("script, style, [translate='no']") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    const nos = [];
    while (w.nextNode()) nos.push(w.currentNode);
    nos.forEach((n) => {
      const k = norm(n.nodeValue);
      if (!k || EN[k] === undefined) return;
      const pai = n.parentNode;
      // mantém o valor em português das opções (o e-mail chega em PT)
      if (pai.tagName === "OPTION" && !pai.hasAttribute("value")) pai.value = pai.textContent;
      const antes = n.nodeValue.match(/^\s*/)[0], depois = n.nodeValue.match(/\s*$/)[0];
      n.nodeValue = antes + EN[k] + depois;
    });
    raiz.querySelectorAll("[aria-label], [placeholder], [alt], [title]").forEach((el) => {
      ATRIBUTOS.forEach((a) => {
        const v = el.getAttribute(a);
        if (v && EN[norm(v)] !== undefined) el.setAttribute(a, EN[norm(v)]);
      });
    });
    raiz.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((m) => {
      const v = m.getAttribute("content");
      if (v && EN[norm(v)] !== undefined) m.setAttribute("content", EN[norm(v)]);
    });
  };

  html.lang = LANG === "en" ? "en" : "pt-BR";
  aplicar(document.documentElement);

  /* Seletor de idioma: guarda a escolha e recarrega a página */
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === LANG));
    b.addEventListener("click", () => {
      const l = b.dataset.lang;
      if (l === LANG) return;
      const url = new URL(location.href);
      url.searchParams.delete("lang");
      // sem o #âncora: com ela (ex.: #contato, após usar o menu) o navegador
      // só rolaria até a seção em vez de recarregar a página no outro idioma
      url.hash = "";
      try { localStorage.setItem(CHAVE, l); } catch (e) { url.searchParams.set("lang", l); }
      try { sessionStorage.setItem("al-lang-y", String(Math.round(window.scrollY))); } catch (e) { /* ok */ }
      if (url.href === location.href) location.reload();
      else location.replace(url.href);
    });
  });

  // depois de trocar o idioma, volta para o mesmo ponto da página
  let voltarY = null;
  try { voltarY = sessionStorage.getItem("al-lang-y"); sessionStorage.removeItem("al-lang-y"); } catch (e) { /* ok */ }
  if (voltarY !== null) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.addEventListener("load", () => window.scrollTo({ top: +voltarY, behavior: "instant" }));
  }

  const liberar = () => html.classList.remove("i18n-pendente");
  document.addEventListener("DOMContentLoaded", liberar);

  window.I18N = { lang: LANG, t, tr, aplicar };
})();

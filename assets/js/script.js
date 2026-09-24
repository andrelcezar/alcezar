/* =========================================================
   André Luiz — Baixista | script principal
   Lê o conteúdo de window.SITE_DATA (data.js) e cuida das
   interações. Cada módulo só roda se o elemento existir.
   ========================================================= */
(function () {
  "use strict";

  const D = window.SITE_DATA || {};
  const BASE = document.body.dataset.base || "";           // "" na raiz, "../" em /pages
  const EH_HOME = document.body.dataset.pagina === "inicio";
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  document.documentElement.classList.remove("no-js");

  /* ---------- Utilidades ---------- */
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const caminho = (p) => (/^(https?:|mailto:|tel:|data:)/.test(p) ? p : BASE + p);
  const linkInterno = (href) => (href.startsWith("#") && !EH_HOME ? BASE + "index.html" + href : href);
  const dataBR = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const ICONES = {
    palco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><circle cx="12" cy="14" r="4"/><path d="M4 22l2-4M20 22l-2-4M8 22h8"/></svg>',
    estudio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/></svg>',
    arranjo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.5c.4 2 2.2 4 4.5 4.8l1.2-1.2 2 1-.4 1.6c-3.7.2-8-3.9-8-7.6L10 7.7l1 2z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17l15-8.5z"/></svg>'
  };

  /* ---------- Header dinâmico ---------- */
  const header = $(".header");
  const botaoTopo = $(".topo");
  const aoRolar = () => {
    const y = window.scrollY;
    header && header.classList.toggle("rolado", y > 40);
    botaoTopo && botaoTopo.classList.toggle("visivel", y > 700);
  };
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();
  botaoTopo && botaoTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduzMovimento ? "auto" : "smooth" }));

  /* ---------- Menu mobile ---------- */
  const menuBtn = $(".menu-btn");
  const nav = $(".nav");
  const veu = $(".veu");
  const fecharMenu = (devolverFoco) => {
    if (!nav || !nav.classList.contains("aberto")) return;
    nav.classList.remove("aberto");
    veu && veu.classList.remove("ativo");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("travado");
    if (devolverFoco) menuBtn.focus();
  };
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const abrir = !nav.classList.contains("aberto");
      if (!abrir) return fecharMenu(false);
      nav.classList.add("aberto");
      veu && veu.classList.add("ativo");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "Fechar menu");
      document.body.classList.add("travado");
      const primeiro = $("a", nav);
      primeiro && primeiro.focus();
    });
    veu && veu.addEventListener("click", () => fecharMenu(true));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => fecharMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(true); });
    window.addEventListener("resize", () => { if (window.innerWidth > 960) fecharMenu(false); });
  }

  /* ---------- Seção ativa no menu ---------- */
  if (EH_HOME && "IntersectionObserver" in window) {
    const links = $$(".nav__link[href*='#']");
    const mapa = new Map(links.map((l) => [l.getAttribute("href").split("#")[1], l]));
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => { l.classList.remove("ativo"); l.removeAttribute("aria-current"); });
        const l = mapa.get(en.target.id);
        if (l) { l.classList.add("ativo"); l.setAttribute("aria-current", "true"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    mapa.forEach((_, id) => { const s = document.getElementById(id); s && obs.observe(s); });
  }

  /* ---------- Redes sociais e contato ---------- */
  $$("[data-redes]").forEach((el) => {
    el.innerHTML = (D.redes || []).map((r) =>
      `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.nome)} (abre em nova aba)">${ICONES[r.icone] || ""}</a>`).join("");
  });
  $$("[data-lista-contato]").forEach((el) => {
    el.innerHTML = (D.redes || []).map((r) =>
      `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${ICONES[r.icone] || ""}<span><span class="sr-only">${esc(r.nome)}: </span>${esc(r.usuario)}</span></a></li>`).join("") +
      (D.contato && D.contato.email ? `<li><a href="mailto:${esc(D.contato.email)}">${esc(D.contato.email)}</a></li>` : "");
  });
  $$("[data-whatsapp]").forEach((a) => { a.href = "https://wa.me/" + ((D.contato && D.contato.whatsapp) || ""); });
  $$("[data-ano]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Serviços ---------- */
  const servicosEl = $("[data-servicos]");
  if (servicosEl) {
    servicosEl.innerHTML = (D.servicos || []).map((s, i) => `
      <article class="servico revelar" data-atraso="${i % 4}">
        <span class="servico__icone" aria-hidden="true">${ICONES[s.icone] || ""}</span>
        <h3>${esc(s.titulo)}</h3>
        <p>${esc(s.texto)}</p>
        <a class="link-seta" href="${esc(linkInterno(s.link))}">${esc(s.acao)}<span class="sr-only">: ${esc(s.titulo)}</span></a>
      </article>`).join("");
  }

  /* ---------- Galeria + filtros + lightbox ---------- */
  const galeriaEl = $("[data-galeria]");
  const fotos = D.galeria || [];
  if (galeriaEl) {
    const limite = parseInt(galeriaEl.dataset.limite, 10) || fotos.length;
    galeriaEl.innerHTML = fotos.slice(0, limite).map((f, i) => `
      <button type="button" class="foto foto--${esc(f.tamanho || "normal")} revelar" data-atraso="${i % 4}" data-indice="${i}" data-categoria="${esc(f.categoria)}" aria-label="Ampliar foto: ${esc(f.titulo)}">
        <img src="${esc(caminho(f.thumb || f.src))}" alt="${esc(f.titulo)} — ${esc(f.legenda)}" loading="lazy" decoding="async">
        <span class="foto__info"><strong>${esc(f.titulo)}</strong><span>${esc(f.legenda)}</span></span>
      </button>`).join("");

    const filtrosEl = $("[data-filtros]");
    if (filtrosEl) {
      const cats = ["todas", ...new Set(fotos.map((f) => f.categoria))];
      const nomes = { todas: "Todas", palco: "Palco", retrato: "Retratos", arte: "Artes" };
      filtrosEl.innerHTML = cats.map((c, i) => `<button type="button" class="filtro" data-filtro="${esc(c)}" aria-pressed="${i === 0}">${esc(nomes[c] || c)}</button>`).join("");
      filtrosEl.addEventListener("click", (e) => {
        const b = e.target.closest(".filtro"); if (!b) return;
        $$(".filtro", filtrosEl).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const f = b.dataset.filtro;
        $$(".foto", galeriaEl).forEach((el) => el.classList.toggle("oculta", f !== "todas" && el.dataset.categoria !== f));
      });
    }
  }

  const lightbox = $("#lightbox");
  if (galeriaEl && lightbox) {
    const img = $("img", lightbox), tit = $("strong", lightbox), leg = $("figcaption span", lightbox);
    let atual = 0, gatilho = null;
    const visiveis = () => $$(".foto:not(.oculta)", galeriaEl).map((el) => +el.dataset.indice);
    const mostrar = (i) => {
      atual = i; const f = fotos[i];
      img.src = caminho(f.src); img.alt = `${f.titulo} — ${f.legenda}`;
      tit.textContent = f.titulo; leg.textContent = f.legenda;
    };
    const passo = (d) => { const v = visiveis(); const p = v.indexOf(atual); mostrar(v[(p + d + v.length) % v.length]); };
    galeriaEl.addEventListener("click", (e) => {
      const b = e.target.closest(".foto"); if (!b) return;
      gatilho = b; mostrar(+b.dataset.indice); abrirModal(lightbox);
    });
    $(".modal__nav--ant", lightbox).addEventListener("click", () => passo(-1));
    $(".modal__nav--prox", lightbox).addEventListener("click", () => passo(1));
    $(".modal__fechar", lightbox).addEventListener("click", () => fecharModal(lightbox, gatilho));
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) fecharModal(lightbox, gatilho); });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("aberto")) return;
      if (e.key === "ArrowLeft") passo(-1);
      if (e.key === "ArrowRight") passo(1);
      if (e.key === "Escape") fecharModal(lightbox, gatilho);
    });
    // gesto de arrastar no celular
    let x0 = null;
    lightbox.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) passo(dx > 0 ? -1 : 1); x0 = null; });
  }

  /* ---------- Modais: abrir/fechar com foco preso ---------- */
  function abrirModal(m) {
    m.classList.add("aberto"); m.setAttribute("aria-hidden", "false");
    document.body.classList.add("travado");
    const f = $(".modal__fechar", m); f && f.focus();
    m._prender = (e) => {
      if (e.key !== "Tab") return;
      const foc = $$("button, a[href], iframe, video", m);
      const pri = foc[0], ult = foc[foc.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    };
    document.addEventListener("keydown", m._prender);
  }
  function fecharModal(m, devolver) {
    m.classList.remove("aberto"); m.setAttribute("aria-hidden", "true");
    document.body.classList.remove("travado");
    m._prender && document.removeEventListener("keydown", m._prender);
    devolver && devolver.focus();
  }

  /* ---------- Vídeos ---------- */
  const videos = D.videos || [];
  const embed = (v) => {
    if (v.tipo === "youtube") return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?autoplay=1&rel=0" title="${esc(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    if (v.tipo === "vimeo") return `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.id)}?autoplay=1" title="${esc(v.titulo)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    return `<video src="${esc(caminho(v.id))}" controls autoplay playsinline></video>`;
  };
  const capa = (v, i, grande) => `
    <button type="button" class="video-capa" data-video="${i}" aria-label="Assistir: ${esc(v.titulo)}">
      <img src="${esc(caminho(v.thumb || v.thumbReserva))}" ${v.thumbReserva ? `data-reserva="${esc(caminho(v.thumbReserva))}"` : ""} alt="" loading="${grande ? "eager" : "lazy"}" decoding="async">
      <span class="play" aria-hidden="true">${ICONES.play}</span>
    </button>`;

  const destaqueEl = $("[data-video-destaque]");
  const listaEl = $("[data-videos-lista]");
  if (destaqueEl && videos.length) {
    const iD = Math.max(0, videos.findIndex((v) => v.destaque));
    const v = videos[iD];
    destaqueEl.innerHTML = `
      <div class="revelar">${capa(v, iD, true)}</div>
      <div class="video-info revelar" data-atraso="1">
        <span class="traco" aria-hidden="true"></span>
        <h3>${esc(v.titulo)}</h3>
        <p>${esc(v.descricao)}</p>
        <div><button type="button" class="btn btn--primario" data-video="${iD}">${ICONES.play.replace('aria-hidden="true"', 'aria-hidden="true" fill="currentColor"')}Assistir agora</button></div>
      </div>`;
    if (listaEl) {
      const outros = videos.map((x, i) => [x, i]).filter(([, i]) => i !== iD);
      listaEl.innerHTML = outros.map(([x, i]) => `
        <article class="video-card revelar">${capa(x, i, false)}<h4>${esc(x.titulo)}</h4><p>${esc(x.descricao)}</p></article>`).join("");
      if (!outros.length) listaEl.remove();
    }
  }
  // thumbnail remota com reserva local
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t.tagName === "IMG" && t.dataset.reserva && t.src !== t.dataset.reserva) t.src = t.dataset.reserva;
  }, true);

  const videoModal = $("#video-modal");
  if (videoModal) {
    const caixa = $(".video-modal__caixa", videoModal);
    let gatilho = null;
    const fechar = () => { caixa.innerHTML = ""; fecharModal(videoModal, gatilho); };
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-video]"); if (!b) return;
      const v = videos[+b.dataset.video]; if (!v) return;
      gatilho = b; caixa.innerHTML = embed(v); abrirModal(videoModal);
    });
    $(".modal__fechar", videoModal).addEventListener("click", fechar);
    videoModal.addEventListener("click", (e) => { if (e.target === videoModal) fechar(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && videoModal.classList.contains("aberto")) fechar(); });
  }

  /* ---------- Blog ---------- */
  const posts = (D.posts || []).slice().sort((a, b) => b.data.localeCompare(a.data));
  const urlPost = (p) => `${BASE}pages/blog.html?post=${encodeURIComponent(p.slug)}`;
  const cardPost = (p, destaque, i) => `
    <article class="post ${destaque ? "post--destaque" : ""} revelar" data-atraso="${i % 3}">
      <a class="post__capa" href="${urlPost(p)}" tabindex="-1" aria-hidden="true"><img src="${esc(caminho(p.capa))}" alt="" loading="lazy" decoding="async"></a>
      <div class="post__corpo">
        <div class="post__meta"><span class="post__cat">${esc(p.categoria)}</span><time datetime="${esc(p.data)}">${dataBR(p.data)}</time></div>
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.resumo)}</p>
        <a class="link-seta" href="${urlPost(p)}">Leia mais<span class="sr-only">: ${esc(p.titulo)}</span></a>
      </div>
    </article>`;
  const postsEl = $("[data-posts]");
  const slug = new URLSearchParams(location.search).get("post");
  const artigoEl = $("[data-artigo]");
  if (artigoEl && slug) {
    const p = posts.find((x) => x.slug === slug);
    const topo = $(".pagina-topo");
    if (p) {
      topo && topo.remove();
      postsEl && postsEl.closest("section").remove();
      document.title = `${p.titulo} | André Luiz — Baixista`;
      artigoEl.innerHTML = `
        <article class="artigo">
          <p class="migalha"><a href="${BASE}index.html">Início</a> / <a href="${BASE}pages/blog.html">Blog</a></p>
          <div class="post__meta"><span class="post__cat">${esc(p.categoria)}</span><time datetime="${esc(p.data)}">${dataBR(p.data)}</time></div>
          <h1>${esc(p.titulo)}</h1>
          <img class="artigo__capa" src="${esc(caminho(p.capa))}" alt="">
          <div class="artigo__texto">${(p.conteudo || [p.resumo]).map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          <p style="margin-top:40px"><a class="link-seta" href="${BASE}pages/blog.html">Voltar para o blog</a></p>
        </article>`;
      artigoEl.hidden = false;
    } else {
      artigoEl.innerHTML = `<div class="artigo"><h1>Post não encontrado</h1><p style="margin-top:16px">O endereço pode ter mudado. <a class="link-seta" href="${BASE}pages/blog.html">Ver todos os posts</a></p></div>`;
      artigoEl.hidden = false;
    }
  }
  if (postsEl && postsEl.isConnected) {
    const limite = parseInt(postsEl.dataset.limite, 10) || posts.length;
    const iDest = Math.max(0, posts.findIndex((p) => p.destaque));
    const ordem = [posts[iDest], ...posts.filter((_, i) => i !== iDest)].slice(0, limite);
    postsEl.innerHTML = ordem.map((p, i) => cardPost(p, i === 0, i)).join("");
  }

  /* ---------- Formulário ---------- */
  $$("form[data-form-contato]").forEach((form) => {
    const status = $(".form__status", form);
    const regras = {
      nome: (v) => (v.trim().length >= 2 ? "" : "Informe seu nome."),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Informe um e-mail válido, como nome@exemplo.com."),
      telefone: (v) => { const n = v.replace(/\D/g, ""); return !n || (n.length >= 10 && n.length <= 13) ? "" : "Telefone com DDD, por exemplo (11) 91234-5678."; },
      assunto: (v) => (v ? "" : "Escolha um assunto."),
      mensagem: (v) => (v.trim().length >= 20 ? "" : `Escreva pelo menos 20 caracteres (faltam ${20 - v.trim().length}).`),
      aceite: (_, el) => (el.checked ? "" : "Marque para autorizar o contato.")
    };
    const validar = (el) => {
      const r = regras[el.name]; if (!r) return true;
      const msg = r(el.value, el);
      const campo = el.closest(".campo, .aceite");
      const erro = $(`#erro-${el.id}`, form);
      campo && campo.classList.toggle("erro", !!msg);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      if (erro) erro.textContent = msg;
      return !msg;
    };
    // máscara simples de telefone BR
    const tel = form.elements.telefone;
    tel && tel.addEventListener("input", () => {
      let n = tel.value.replace(/\D/g, "").slice(0, 11);
      if (n.length > 10) tel.value = n.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      else if (n.length > 6) tel.value = n.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else if (n.length > 2) tel.value = n.replace(/(\d{2})(\d+)/, "($1) $2");
    });
    $$("input, select, textarea", form).forEach((el) => {
      el.addEventListener("blur", () => validar(el));
      el.addEventListener("input", () => { if (el.getAttribute("aria-invalid") === "true") validar(el); });
    });
    const mostrarStatus = (tipo, html) => {
      status.className = `form__status form__status--${tipo} visivel`;
      status.innerHTML = html;
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const campos = $$("input, select, textarea", form).filter((el) => regras[el.name]);
      const ok = campos.map(validar).every(Boolean);
      if (!ok) {
        mostrarStatus("erro", "Confira os campos destacados antes de enviar.");
        const primeiro = campos.find((el) => el.getAttribute("aria-invalid") === "true");
        primeiro && primeiro.focus();
        return;
      }
      const dados = Object.fromEntries(new FormData(form));
      const cfg = D.formulario || {};
      if (!cfg.endpoint) {
        // Sem backend configurado: não finge envio. Oferece o WhatsApp.
        const texto = `Olá, André! Sou ${dados.nome}.\nAssunto: ${dados.assunto}\n\n${dados.mensagem}\n\nE-mail: ${dados.email}${dados.telefone ? "\nTelefone: " + dados.telefone : ""}`;
        const wa = `https://wa.me/${(D.contato && D.contato.whatsapp) || ""}?text=${encodeURIComponent(texto)}`;
        mostrarStatus("info", `O envio por e-mail ainda não está ativo neste site, então sua mensagem <strong>não foi enviada</strong>. <a href="${wa}" target="_blank" rel="noopener">Enviar esta mensagem pelo WhatsApp</a>.`);
        return;
      }
      const btn = $("button[type=submit]", form);
      btn.disabled = true; const rotulo = btn.textContent; btn.textContent = "Enviando…";
      try {
        const resp = await fetch(cfg.endpoint, { method: cfg.metodo || "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(dados) });
        if (!resp.ok) throw new Error(resp.status);
        form.reset();
        mostrarStatus("ok", "Mensagem enviada. Respondo assim que possível.");
      } catch (err) {
        mostrarStatus("erro", `Não foi possível enviar agora. Tente de novo ou <a href="https://wa.me/${(D.contato && D.contato.whatsapp) || ""}" target="_blank" rel="noopener">fale pelo WhatsApp</a>.`);
      } finally { btn.disabled = false; btn.textContent = rotulo; }
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revelaveis = $$(".revelar");
  if (reduzMovimento || !("IntersectionObserver" in window)) {
    revelaveis.forEach((el) => el.classList.add("visivel"));
  } else {
    const obs = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revelaveis.forEach((el) => obs.observe(el));
  }

  /* ---------- Parallax (hero e faixa de estilos) ---------- */
  const fundo = $(".hero__fundo");
  const faixas = $$(".generos__linha");
  if (!reduzMovimento && (fundo || faixas.length)) {
    let pendente = false;
    const atualizar = () => {
      const y = window.scrollY;
      if (fundo && y < window.innerHeight * 1.2) fundo.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      faixas.forEach((f, i) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = (window.innerHeight - r.top) * 0.12 * (i % 2 ? 1 : -1);
        f.style.transform = `translate3d(${p}px, 0, 0)`;
      });
      pendente = false;
    };
    window.addEventListener("scroll", () => { if (!pendente) { pendente = true; requestAnimationFrame(atualizar); } }, { passive: true });
    atualizar();
  }
})();

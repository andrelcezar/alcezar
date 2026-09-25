/* =========================================================
   André Luiz — Baixista | script principal (Bootstrap 5)
   Conteúdo vem de window.SITE_DATA (data.js). Componentes
   visuais (menu, modais, carrossel, scrollspy) são do Bootstrap.
   ========================================================= */
(function () {
  "use strict";

  const D = window.SITE_DATA || {};
  const BS = window.bootstrap;
  const BASE = document.body.dataset.base || "";
  const EH_HOME = document.body.dataset.pagina === "inicio";
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  document.documentElement.classList.remove("no-js");

  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const caminho = (p) => (/^(https?:|mailto:|tel:|data:)/.test(p) ? p : BASE + p);
  const linkInterno = (href) => (href.startsWith("#") && !EH_HOME ? BASE + "index.html" + href : href);
  const dataBR = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  const icone = (n) => `<i class="bi bi-${esc(n)}" aria-hidden="true"></i>`;
  const wa = () => "https://wa.me/" + ((D.contato && D.contato.whatsapp) || "");

  /* ---------- Navbar e botão topo ---------- */
  const nav = $(".navbar-al");
  const topo = $(".topo");
  const aoRolar = () => {
    const y = window.scrollY;
    nav && nav.classList.toggle("rolado", y > 40);
    topo && topo.classList.toggle("visivel", y > 700);
  };
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();
  topo && topo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduzMovimento ? "auto" : "smooth" }));

  // fecha o menu lateral (celular) ao escolher um link
  const menu = $("#menu");
  if (menu && BS) {
    $$(".nav-link, .btn", menu).forEach((a) => a.addEventListener("click", () => {
      const oc = BS.Offcanvas.getInstance(menu);
      oc && oc.hide();
    }));
  }

  /* ---------- Redes e contato ---------- */
  $$("[data-redes]").forEach((el) => {
    el.innerHTML = (D.redes || []).map((r) =>
      `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.nome)} (abre em nova aba)">${icone(r.icone)}</a>`).join("");
  });
  $$("[data-lista-contato]").forEach((el) => {
    el.innerHTML = (D.redes || []).map((r) =>
      `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${icone(r.icone)}<span><span class="visually-hidden">${esc(r.nome)}: </span>${esc(r.usuario)}</span></a></li>`).join("") +
      (D.contato && D.contato.email ? `<li><a href="mailto:${esc(D.contato.email)}">${icone("envelope-fill")}${esc(D.contato.email)}</a></li>` : "");
  });
  $$("[data-whatsapp]").forEach((a) => { a.href = wa(); });
  $$("[data-ano]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Linha do tempo ---------- */
  const tl = $("[data-trajetoria]");
  if (tl) {
    tl.innerHTML = (D.trajetoria || []).map((t) => `
      <li class="revelar">
        <span class="timeline__quando">${esc(t.quando)}</span>
        <h3>${esc(t.titulo)}</h3>
        <p>${esc(t.texto)}</p>
      </li>`).join("");
  }

  /* ---------- Discografia ---------- */
  const discoEl = $("[data-lancamentos]");
  if (discoEl) {
    discoEl.innerHTML = (D.lancamentos || []).map((l) => {
      const acao = l.video !== undefined
        ? `<button type="button" class="btn btn-primary btn-sm" data-video="${+l.video}">${icone("play-fill")}${esc(l.acao)}</button>`
        : l.link ? `<a class="btn btn-primary btn-sm" href="${esc(l.link)}" target="_blank" rel="noopener">${icone("headphones")}${esc(l.acao)}</a>` : "";
      return `
      <div class="col">
        <article class="lancamento revelar">
          <div class="capa" style="--cor:${esc(l.cor || "#333")}" aria-hidden="true">
            <div class="capa__disco"></div>
            <div class="capa__frente">${icone(l.icone || "vinyl-fill")}<div><strong>${esc(l.titulo)}</strong><small class="d-block mt-2">${esc(l.artista)}</small></div></div>
          </div>
          <div class="lancamento__corpo">
            <div class="lancamento__meta"><span class="badge-al">${esc(l.tipo)}</span><span class="badge-ano">${esc(l.ano)}</span></div>
            <h3>${esc(l.titulo)}</h3>
            <p class="small text-secondary mb-1">${esc(l.artista)}</p>
            <p>${esc(l.detalhe)}</p>
            ${acao}
          </div>
        </article>
      </div>`;
    }).join("");
  }

  /* ---------- Serviços ---------- */
  const servicosEl = $("[data-servicos]");
  if (servicosEl) {
    servicosEl.innerHTML = (D.servicos || []).map((s) => `
      <div class="col">
        <article class="servico revelar">
          <span class="servico__icone" aria-hidden="true">${icone(s.icone)}</span>
          <h3>${esc(s.titulo)}</h3>
          <p>${esc(s.texto)}</p>
          <a class="link-seta align-self-start" href="${esc(linkInterno(s.link))}">${esc(s.acao)}<span class="visually-hidden">: ${esc(s.titulo)}</span>${icone("arrow-right")}</a>
        </article>
      </div>`).join("");
  }

  /* ---------- Depoimentos (a seção fica oculta enquanto não houver texto) ---------- */
  const depoEl = $("[data-depoimentos]");
  const depos = (D.depoimentos || []).filter((d) => d.texto && d.texto.trim());
  if (depoEl && depos.length) {
    depoEl.innerHTML = depos.map((d) => `
      <div class="col">
        <figure class="depoimento revelar">
          <span class="depoimento__aspas" aria-hidden="true">${icone("quote")}</span>
          <blockquote class="mb-0"><p>${esc(d.texto)}</p></blockquote>
          ${d.traducao ? `<p class="depoimento__traducao"><span class="visually-hidden">Tradução: </span>${esc(d.traducao)}</p>` : ""}
          <figcaption class="depoimento__autor">
            ${d.foto ? `<img src="${esc(caminho(d.foto))}" alt="" width="56" height="56" loading="lazy" decoding="async">` : `<span class="depoimento__inicial" aria-hidden="true">${esc(d.nome.trim().charAt(0))}</span>`}
            <span><strong class="d-block">${esc(d.nome)}</strong><span class="text-secondary small">${esc([d.papel, d.local].filter(Boolean).join(" · "))}</span></span>
          </figcaption>
        </figure>
      </div>`).join("");
    // com um só depoimento, o card fica mais largo; com dois ou mais, em duas colunas
    depoEl.classList.add(depos.length > 1 ? "row-cols-lg-2" : "depoimentos--unico");
    depoEl.closest("section").hidden = false;
  }

  /* ---------- Galeria, filtros e lightbox (modal + carrossel) ---------- */
  const fotos = D.galeria || [];
  const galeriaEl = $("[data-galeria]");
  if (galeriaEl) {
    galeriaEl.innerHTML = fotos.map((f, i) => `
      <button type="button" class="foto foto--${esc(f.tamanho || "normal")} revelar" data-indice="${i}" data-categoria="${esc(f.categoria)}" aria-label="Ampliar foto: ${esc(f.titulo)}">
        <img src="${esc(caminho(f.thumb || f.src))}" alt="${esc(f.titulo)} — ${esc(f.legenda)}" loading="lazy" decoding="async">
        <span class="foto__info"><strong>${esc(f.titulo)}</strong><span>${esc(f.legenda)}</span></span>
      </button>`).join("");

    const filtrosEl = $("[data-filtros]");
    if (filtrosEl) {
      const cats = ["todas", ...new Set(fotos.map((f) => f.categoria))];
      const nomes = { todas: "Todas", palco: "Palco", retrato: "Retratos", arte: "Artes" };
      filtrosEl.innerHTML = cats.map((c, i) => `<button type="button" class="btn btn-outline-light" data-filtro="${esc(c)}" aria-pressed="${i === 0}">${esc(nomes[c] || c)}</button>`).join("");
      filtrosEl.addEventListener("click", (e) => {
        const b = e.target.closest("[data-filtro]"); if (!b) return;
        $$("[data-filtro]", filtrosEl).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const f = b.dataset.filtro;
        $$(".foto", galeriaEl).forEach((el) => el.classList.toggle("d-none", f !== "todas" && el.dataset.categoria !== f));
      });
    }

    const lb = $("#lightbox");
    const inner = lb && $("[data-carrossel]", lb);
    if (lb && inner && BS) {
      const modal = new BS.Modal(lb);
      const carEl = $("#lightbox-carrossel", lb);
      let gatilho = null;
      galeriaEl.addEventListener("click", (e) => {
        const b = e.target.closest(".foto"); if (!b) return;
        gatilho = b;
        const vis = $$(".foto:not(.d-none)", galeriaEl).map((el) => +el.dataset.indice);
        const atual = +b.dataset.indice;
        inner.innerHTML = vis.map((i) => {
          const f = fotos[i];
          return `<div class="carousel-item${i === atual ? " active" : ""}">
            <img src="${esc(caminho(f.src))}" alt="${esc(f.titulo)} — ${esc(f.legenda)}">
            <div class="carousel-caption"><strong>${esc(f.titulo)}</strong><span>${esc(f.legenda)}</span></div>
          </div>`;
        }).join("");
        BS.Carousel.getOrCreateInstance(carEl, { interval: false, touch: true, keyboard: true });
        modal.show();
      });
      document.addEventListener("keydown", (e) => {
        if (!lb.classList.contains("show")) return;
        const c = BS.Carousel.getInstance(carEl); if (!c) return;
        if (e.key === "ArrowLeft") c.prev();
        if (e.key === "ArrowRight") c.next();
      });
      lb.addEventListener("hidden.bs.modal", () => { gatilho && gatilho.focus(); });
    }
  }

  /* ---------- Vídeos ---------- */
  const videos = D.videos || [];
  const embed = (v) => {
    // O YouTube exige saber de qual site vem o vídeo (referrer). Sem isso, mostra o "Erro 153".
    const origem = encodeURIComponent(location.origin);
    if (v.tipo === "youtube") return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?autoplay=1&rel=0&playsinline=1&origin=${origem}" title="${esc(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    if (v.tipo === "vimeo") return `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.id)}?autoplay=1" title="${esc(v.titulo)}" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    return `<video src="${esc(caminho(v.id))}" controls autoplay playsinline></video>`;
  };
  const capa = (v, i, grande) => `
    <button type="button" class="video-capa" data-video="${i}" aria-label="Assistir: ${esc(v.titulo)}">
      <img src="${esc(caminho(v.thumb || v.thumbReserva))}" ${v.thumbReserva ? `data-reserva="${esc(caminho(v.thumbReserva))}"` : ""} alt="" loading="${grande ? "eager" : "lazy"}" decoding="async">
      <span class="play" aria-hidden="true">${icone("play-fill")}</span>
    </button>`;
  const destaqueEl = $("[data-video-destaque]");
  const listaEl = $("[data-videos-lista]");
  if (destaqueEl && videos.length) {
    const iD = Math.max(0, videos.findIndex((v) => v.destaque));
    const v = videos[iD];
    destaqueEl.innerHTML = `
      <div class="col-lg-7 revelar">${capa(v, iD, true)}</div>
      <div class="col-lg-5 revelar">
        <span class="traco" aria-hidden="true"></span>
        <h3 class="mb-3" style="font-size:clamp(2.2rem,4vw,3rem)">${esc(v.titulo)}</h3>
        <p class="text-secondary">${esc(v.descricao)}</p>
        <button type="button" class="btn btn-primary mt-2" data-video="${iD}">${icone("play-fill")}Assistir agora</button>
      </div>`;
    if (listaEl) {
      const outros = videos.map((x, i) => [x, i]).filter(([, i]) => i !== iD);
      listaEl.innerHTML = outros.map(([x, i]) => `
        <div class="col"><article class="revelar">${capa(x, i, false)}<h4 class="mt-3" style="font-size:1.6rem">${esc(x.titulo)}</h4><p class="text-secondary small">${esc(x.descricao)}</p></article></div>`).join("");
      if (!outros.length) listaEl.remove();
    }
  }
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t.tagName === "IMG" && t.dataset.reserva && t.src !== t.dataset.reserva) t.src = t.dataset.reserva;
  }, true);

  const vm = $("#video-modal");
  if (vm && BS) {
    const caixa = $("[data-video-caixa]", vm);
    const modal = new BS.Modal(vm);
    let gatilho = null;
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-video]"); if (!b) return;
      const v = videos[+b.dataset.video]; if (!v) return;
      // Aberto direto do computador (file://) não há referrer: o YouTube recusa o player.
      // Nesse caso, abre o vídeo no próprio YouTube em nova aba.
      if (location.protocol === "file:" && v.tipo !== "mp4") {
        const url = v.tipo === "vimeo" ? `https://vimeo.com/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`;
        window.open(url, "_blank", "noopener");
        return;
      }
      gatilho = b; caixa.innerHTML = embed(v); modal.show();
    });
    vm.addEventListener("hidden.bs.modal", () => { caixa.innerHTML = ""; gatilho && gatilho.focus(); });
  }

  /* ---------- Blog ---------- */
  const posts = (D.posts || []).slice().sort((a, b) => b.data.localeCompare(a.data));
  const urlPost = (p) => `${BASE}pages/blog.html?post=${encodeURIComponent(p.slug)}`;
  const cardPost = (p, destaque) => `
    <div class="${destaque ? "col-12" : "col-md-6"}">
      <article class="post ${destaque ? "post--destaque" : ""} revelar">
        <a class="post__capa" href="${urlPost(p)}" tabindex="-1" aria-hidden="true"><img src="${esc(caminho(p.capa))}" alt="" loading="lazy" decoding="async"></a>
        <div class="post__corpo">
          <div class="post__meta"><span class="post__cat">${esc(p.categoria)}</span><time datetime="${esc(p.data)}">${dataBR(p.data)}</time></div>
          <h3>${esc(p.titulo)}</h3>
          <p>${esc(p.resumo)}</p>
          <a class="link-seta align-self-start" href="${urlPost(p)}">Leia mais<span class="visually-hidden">: ${esc(p.titulo)}</span>${icone("arrow-right")}</a>
        </div>
      </article>
    </div>`;
  const postsEl = $("[data-posts]");
  const slug = new URLSearchParams(location.search).get("post");
  const artigoEl = $("[data-artigo]");
  if (artigoEl && slug) {
    const p = posts.find((x) => x.slug === slug);
    const alvo = $(".container", artigoEl);
    $(".pagina-topo") && $(".pagina-topo").remove();
    postsEl && postsEl.closest("section").remove();
    if (p) {
      document.title = `${p.titulo} | André Luiz — Baixista`;
      const meta = (sel, v) => { const m = $(sel); m && m.setAttribute("content", v); };
      meta('meta[name="description"]', p.resumo);
      meta('meta[property="og:title"]', document.title);
      meta('meta[property="og:description"]', p.resumo);
      alvo.innerHTML = `
        <article class="artigo" style="padding-top:calc(var(--al-header-h) + 2rem)">
          <nav aria-label="Você está em"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="${BASE}index.html">Início</a></li><li class="breadcrumb-item"><a href="${BASE}pages/blog.html">Blog</a></li><li class="breadcrumb-item active" aria-current="page">Post</li></ol></nav>
          <div class="post__meta"><span class="post__cat">${esc(p.categoria)}</span><time datetime="${esc(p.data)}">${dataBR(p.data)}</time></div>
          <h1>${esc(p.titulo)}</h1>
          <img class="artigo__capa" src="${esc(caminho(p.capa))}" alt="">
          <div class="artigo__texto">${(p.conteudo || [p.resumo]).map((t) => `<p class="mb-0">${esc(t)}</p>`).join("")}</div>
          <p class="mt-5"><a class="link-seta" href="${BASE}pages/blog.html">Voltar para o blog${icone("arrow-right")}</a></p>
        </article>`;
    } else {
      alvo.innerHTML = `<div class="artigo" style="padding-top:calc(var(--al-header-h) + 2rem)"><h1>Post não encontrado</h1><p class="mt-3">O endereço pode ter mudado. <a class="link-seta" href="${BASE}pages/blog.html">Ver todos os posts</a></p></div>`;
    }
    artigoEl.hidden = false;
  } else if (postsEl) {
    const limite = parseInt(postsEl.dataset.limite, 10) || posts.length;
    const iDest = Math.max(0, posts.findIndex((p) => p.destaque));
    const ordem = [posts[iDest], ...posts.filter((_, i) => i !== iDest)].slice(0, limite);
    postsEl.innerHTML = ordem.map((p, i) => cardPost(p, i === 0)).join("");
  }

  /* ---------- Formulário (validação com classes do Bootstrap) ---------- */
  $$("form[data-form-contato]").forEach((form) => {
    const status = $("[data-form-status]", form);
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
      el.classList.toggle("is-invalid", !!msg);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      const erro = $(`#erro-${el.id}`, form);
      if (erro) erro.textContent = msg;
      return !msg;
    };
    const tel = form.elements.telefone;
    tel && tel.addEventListener("input", () => {
      const n = tel.value.replace(/\D/g, "").slice(0, 11);
      if (n.length > 10) tel.value = n.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      else if (n.length > 6) tel.value = n.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else if (n.length > 2) tel.value = n.replace(/(\d{2})(\d+)/, "($1) $2");
    });
    $$("input, select, textarea", form).forEach((el) => {
      el.addEventListener("blur", () => validar(el));
      el.addEventListener("input", () => { if (el.classList.contains("is-invalid")) validar(el); });
      el.addEventListener("change", () => { if (el.classList.contains("is-invalid")) validar(el); });
    });
    const mostrar = (tipo, html) => { status.className = `alert alert-${tipo} mb-0`; status.innerHTML = html; };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const campos = $$("input, select, textarea", form).filter((el) => regras[el.name]);
      const ok = campos.map(validar).every(Boolean);
      if (!ok) {
        mostrar("danger", "Confira os campos destacados antes de enviar.");
        const primeiro = campos.find((el) => el.classList.contains("is-invalid"));
        primeiro && primeiro.focus();
        return;
      }
      const dados = Object.fromEntries(new FormData(form));
      const linkWhats = () => {
        const texto = `Olá, André! Sou ${dados.nome}.\nAssunto: ${dados.assunto}\n\n${dados.mensagem}\n\nE-mail: ${dados.email}${dados.telefone ? "\nTelefone: " + dados.telefone : ""}`;
        return `${wa()}?text=${encodeURIComponent(texto)}`;
      };
      const cfg = D.formulario || {};
      if (!cfg.endpoint) {
        mostrar("info", `O envio por e-mail ainda não está ativo neste site, então sua mensagem <strong>não foi enviada</strong>. <a href="${linkWhats()}" target="_blank" rel="noopener">Enviar esta mensagem pelo WhatsApp</a>.`);
        return;
      }
      // Campo-armadilha: só robôs preenchem. Finge sucesso e não envia nada.
      if (dados._honey) { form.reset(); mostrar("success", "Mensagem enviada. Respondo assim que possível."); return; }
      const envio = {
        nome: dados.nome.trim(),
        email: dados.email.trim(),
        telefone: dados.telefone || "Não informado",
        assunto: dados.assunto,
        mensagem: dados.mensagem.trim(),
        aceite: dados.aceite ? "Sim" : "Não",
        pagina: location.href,
        _subject: `Contato pelo site: ${dados.assunto} (${dados.nome.trim()})`,
        _replyto: dados.email.trim(),
        _template: "table",
        _captcha: "false"
      };
      const btn = $("button[type=submit]", form);
      btn.disabled = true; const rotulo = btn.innerHTML; btn.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>Enviando…`;
      try {
        const resp = await fetch(cfg.endpoint, { method: cfg.metodo || "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(envio) });
        const json = await resp.json().catch(() => ({}));
        // O FormSubmit responde 200 com success "false" quando algo dá errado (ex.: formulário ainda não ativado).
        if (!resp.ok || String(json.success) === "false") throw new Error(json.message || resp.status);
        form.reset();
        campos.forEach((el) => { el.classList.remove("is-invalid"); el.removeAttribute("aria-invalid"); });
        mostrar("success", "Mensagem enviada. Respondo assim que possível.");
      } catch (err) {
        console.warn("Falha no envio do formulário:", err && err.message);
        mostrar("danger", `Não foi possível enviar agora. Tente de novo ou <a href="${linkWhats()}" target="_blank" rel="noopener">envie a mesma mensagem pelo WhatsApp</a>.`);
      } finally { btn.disabled = false; btn.innerHTML = rotulo; }
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

  /* ---------- Seção ativa no menu ---------- */
  if (EH_HOME && "IntersectionObserver" in window) {
    const links = $$("#menu .nav-link[href^='#']");
    const mapa = new Map(links.map((l) => [l.getAttribute("href").slice(1), l]));
    const obs = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => { l.classList.remove("active"); l.removeAttribute("aria-current"); });
      const l = mapa.get(en.target.id);
      if (l) { l.classList.add("active"); l.setAttribute("aria-current", "true"); }
    }), { rootMargin: "-45% 0px -50% 0px" });
    mapa.forEach((_, id) => { const s = document.getElementById(id); s && obs.observe(s); });
  }

  /* ---------- Parallax ---------- */
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
        f.style.transform = `translate3d(${(window.innerHeight - r.top) * 0.12 * (i % 2 ? 1 : -1)}px, 0, 0)`;
      });
      pendente = false;
    };
    window.addEventListener("scroll", () => { if (!pendente) { pendente = true; requestAnimationFrame(atualizar); } }, { passive: true });
    atualizar();
  }
})();

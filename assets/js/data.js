/* =========================================================
   CONTEÚDO DO SITE
   Edite apenas este arquivo para trocar textos, fotos,
   vídeos, posts, links sociais e dados de contato.
   Caminhos de imagem são relativos à raiz do site.
   ========================================================= */
window.SITE_DATA = {
  contato: {
    nome: "André Luiz",
    whatsapp: "5511980469450",            // só números, com DDI e DDD
    whatsappExibicao: "+55 11 98046-9450",
    email: "",                            // opcional: preencha para exibir
    cidade: "São Paulo, SP"
  },

  /* Formulário: as mensagens são enviadas por e-mail pelo FormSubmit
     (formsubmit.co) para aluiz.cez@gmail.com. No primeiro envio, o
     FormSubmit manda um e-mail de ativação para esse endereço: clique
     em "Activate Form" e, a partir daí, as mensagens chegam normalmente.
     Se deixar vazio, o formulário oferece enviar pelo WhatsApp. */
  formulario: {
    endpoint: "https://formsubmit.co/ajax/aluiz.cez@gmail.com",
    metodo: "POST"
  },

  redes: [
    { nome: "Instagram", url: "https://www.instagram.com/alcezarofficial", usuario: "@alcezarofficial", icone: "instagram" },
    { nome: "YouTube", url: "https://www.youtube.com/@andrelcezaroficial", usuario: "@andrelcezaroficial", icone: "youtube" },
    { nome: "WhatsApp", url: "https://wa.me/5511980469450", usuario: "+55 11 98046-9450", icone: "whatsapp" }
  ],

  /* Lançamentos (discografia). tipo: Álbum | Single | EP | Demo.
     link: onde ouvir/assistir (deixe "" se não houver). video: índice do vídeo em "videos" para abrir no modal (opcional). */
  lancamentos: [
    { titulo: "Lycans", artista: "High Moonlight", tipo: "Álbum", ano: "2025",
      detalhe: "Álbum de estreia da banda, com 10 faixas. Produzido por Tiago de la Vega no Shokran Studios (Caxias do Sul/RS). Baixo: André Luiz.",
      link: "https://onerpm.link/235132452580", acao: "Ouvir o álbum", icone: "vinyl-fill", cor: "#6b0d10" },
    { titulo: "Heavy Play", artista: "High Moonlight", tipo: "Single e videoclipe", ano: "2025",
      detalhe: "Primeiro single de “Lycans”, com clipe em 4K gravado no Cardeal Pub, em São Paulo.",
      link: "https://youtu.be/09d6qC0DHO8", acao: "Assistir ao clipe", video: 0, icone: "camera-reels-fill", cor: "#0d4a44" },
    { titulo: "The Lost Horizon", artista: "Opus Eclipse", tipo: "Demo", ano: "2009",
      detalhe: "Primeira demo autoral da banda, depois do festival Pimp My Band, onde tocamos “Convict” e “The Lost Horizon”.",
      link: "", acao: "", icone: "disc-fill", cor: "#2a2a2a" }
  ],

  /* Linha do tempo da carreira, em ordem. "quando" aceita ano ou texto curto. */
  trajetoria: [
    { quando: "2007", titulo: "Opus Eclipse — formação original",
      texto: "Entro no baixo da banda, formada em fevereiro como cover de gothic metal e que logo passa a tocar só Therion." },
    { quando: "27 set 2007", titulo: "Aval do Therion",
      texto: "A Opus Eclipse é reconhecida e autorizada por Christofer Johnsson, fundador do Therion, como cover brasileiro da banda." },
    { quando: "2008–2009", titulo: "Nova formação e músicas próprias",
      texto: "Volto com a formação renovada. Tocamos “Convict” e “The Lost Horizon” no festival Pimp My Band e preparamos a demo “The Lost Horizon”." },
    { quando: "2012", titulo: "Fim de um ciclo",
      texto: "Deixo a banda depois de cinco anos, quando ela passa a se chamar Remagine." },
    { quando: "3 anos", titulo: "Noctra",
      texto: "Tributo a Epica e After Forever. Mais três anos no metal sinfônico, com vocal lírico." },
    { quando: "Autoral", titulo: "Sophie's Threat",
      texto: "Som autoral pesado, com forte influência do thrash metal." },
    { quando: "2025", titulo: "High Moonlight — “Lycans”",
      texto: "Gravo o baixo do álbum de estreia da veterana do heavy metal paulistano e o videoclipe de “Heavy Play”." },
    { quando: "Hoje", titulo: "Freelancer e RootingDoom",
      texto: "Shows, substituições, estúdio e clipes como freelancer, e o RootingDoom, meu projeto autoral." }
  ],

  servicos: [
    { icone: "speaker-fill", titulo: "Shows e substituições",
      texto: "Aprendo o repertório, chego ensaiado e seguro o grave no palco, seja num tributo ou numa banda autoral.",
      link: "#contato", acao: "Consultar data" },
    { icone: "mic-fill", titulo: "Gravação de estúdio",
      texto: "Linhas de baixo para single, EP ou álbum, criadas junto com a banda ou a partir da sua demo.",
      link: "#contato", acao: "Pedir orçamento" },
    { icone: "camera-reels-fill", titulo: "Videoclipes",
      texto: "Presença de palco em frente à câmera, com a experiência do clipe de “Heavy Play”, gravado com a High Moonlight.",
      link: "#videos", acao: "Ver o clipe" },
    { icone: "music-note-beamed", titulo: "Criação de linhas de baixo",
      texto: "Do riff de thrash ao arranjo sinfônico: construo a linha que serve à música, não ao ego. Hoje gravo as linhas de baixo do Armistice Front, projeto de Joe Howard (Cleveland/Detroit, EUA).",
      link: "#contato", acao: "Conversar" }
  ],

  /* Depoimentos. Enquanto "texto" estiver vazio, o card aparece como
     "Depoimento em breve". Cole o texto exatamente como a pessoa escreveu.
     traducao: opcional, aparece abaixo do original (ex.: depoimento em inglês).
     foto: opcional, caminho de uma imagem quadrada (ex.: assets/images/joe.webp). */
  depoimentos: [
    { nome: "Joe Howard", papel: "Armistice Front", local: "Cleveland/Detroit, EUA",
      texto: "",       // cole aqui o depoimento do Joe
      traducao: "",    // opcional: tradução para o português
      foto: "" }
  ],

  /* categoria: usada nos filtros da galeria.
     tamanho: "normal" | "alta" | "larga" (define o bloco no grid) */
  galeria: [
    { src: "assets/images/galeria/rosto.webp", thumb: "assets/images/galeria/rosto-thumb.webp", titulo: "Concentração", legenda: "Sob as luzes do palco", categoria: "palco", tamanho: "alta" },
    { src: "assets/images/galeria/banner.webp", thumb: "assets/images/galeria/banner-thumb.webp", titulo: "Identidade AL", legenda: "Banner oficial do canal", categoria: "arte", tamanho: "larga" },
    { src: "assets/images/galeria/maos.webp", thumb: "assets/images/galeria/maos-thumb.webp", titulo: "Cinco cordas", legenda: "Braço do baixo em ação", categoria: "palco", tamanho: "alta" },
    { src: "assets/images/galeria/palco.webp", thumb: "assets/images/galeria/palco-thumb.webp", titulo: "André Luiz", legenda: "Retrato oficial", categoria: "retrato", tamanho: "normal" },
    { src: "assets/images/galeria/corpo.webp", thumb: "assets/images/galeria/corpo-thumb.webp", titulo: "Pegada", legenda: "Mão direita, grave firme", categoria: "palco", tamanho: "normal" },
    { src: "assets/images/galeria/flyer.webp", thumb: "assets/images/galeria/flyer-thumb.webp", titulo: "Rock na veia", legenda: "Flyer de divulgação", categoria: "arte", tamanho: "normal" },
    { src: "assets/images/galeria/logo.webp", thumb: "assets/images/galeria/logo-thumb.webp", titulo: "Logo AL", legenda: "Marca pessoal", categoria: "arte", tamanho: "normal" }
  ],

  /* tipo: "youtube" | "vimeo" | "mp4"
     id: ID do YouTube/Vimeo, ou caminho do arquivo .mp4 em assets/videos/ */
  videos: [
    { tipo: "youtube", id: "09d6qC0DHO8", destaque: true,
      titulo: "High Moonlight — Heavy Play (Official 4K Video)",
      descricao: "Primeiro single do álbum “Lycans” (2025), com estreia no Roadie Crew Online Fest. Direção de Ricky Franco e Suellen Figueira, com a atriz Aline Carvalho, gravado no Cardeal Pub, em São Paulo. No baixo: André Luiz.",
      thumb: "https://i.ytimg.com/vi/09d6qC0DHO8/hqdefault.jpg",
      thumbReserva: "assets/images/galeria/rosto.webp" }
    /* Para adicionar outro vídeo, copie o bloco acima, troque o id
       e deixe destaque: false. Exemplo MP4:
    ,{ tipo: "mp4", id: "assets/videos/ao-vivo.mp4", destaque: false,
       titulo: "Ao vivo", descricao: "...", thumb: "assets/images/galeria/palco.webp" } */
  ],

  /* Posts demonstrativos: a estrutura está pronta para virar
     um blog dinâmico (basta carregar este array de uma API/JSON). */
  posts: [
    { slug: "opus-eclipse-2007-2012", destaque: true,
      titulo: "Cover autorizado pelo Therion: minha história na Opus Eclipse",
      categoria: "Trajetória", data: "2026-09-20",
      capa: "assets/images/galeria/maos.webp",
      resumo: "Da primeira formação, em 2007, até 2012. Uma banda reconhecida pelo próprio Christofer Johnsson como cover brasileiro do Therion.",
      conteudo: [
        "A Opus Eclipse nasceu em fevereiro de 2007 como banda cover de gothic metal, formada por Bruno Buran e Daniel Iastremski. Logo vieram a soprano Karina Flores no vocal lírico, Tatiana Silva na bateria e eu no baixo. O nome vem de “Opus Eclipse”, faixa instrumental do álbum “Theli” (1996) do Therion.",
        "Com o tempo, a banda passou a tocar apenas Therion, com um repertório de peso: “To Mega Therion”, “Abraxas”, “Asgard”, “Invocation of Naamah” e “Cults of the Shadow”. Tocar Therion é um exercício de disciplina: músicas longas, mudanças de andamento, orquestrações e coros que o baixo precisa sustentar sem atropelar ninguém.",
        "Em 27 de setembro de 2007, depois de um contato direto com a banda, a Opus Eclipse foi reconhecida e autorizada por Christofer Johnsson, vocalista, guitarrista e fundador do Therion, como cover brasileiro.",
        "A banda fez uma pausa de outubro de 2007 a junho de 2008 e voltou com formação renovada, da qual continuei fazendo parte. Além dos shows como tributo, começamos a compor: participamos do festival de bandas Pimp My Band com “Convict” e “The Lost Horizon” e preparamos a primeira demo, “The Lost Horizon”.",
        "Fiquei na banda até 2012, quando ela passou a se chamar Remagine. Depois vieram três anos com a Noctra, tributo a Epica e After Forever, mantendo o pé no metal sinfônico antes de seguir para o autoral."
      ] },
    { slug: "high-moonlight-videoclipe", destaque: false,
      titulo: "“Heavy Play”: o videoclipe com a High Moonlight",
      categoria: "Vídeo", data: "2026-09-10",
      capa: "assets/images/galeria/rosto.webp",
      resumo: "O primeiro single de “Lycans”, álbum de estreia da banda, ganhou clipe em 4K gravado no Cardeal Pub, em São Paulo.",
      conteudo: [
        "A High Moonlight é uma veterana do heavy metal paulistano, formada no final dos anos 1990, com um som calcado na velha guarda do estilo, de Dio, Judas Priest e Black Sabbath.",
        "Depois do EP “Arcturians” (2019), a banda mudou de formação e eu assumi o baixo ao lado de Ricky Franco (vocal), Robert Guima (guitarra) e Kleber Mendonça (bateria). Com essa formação saiu o álbum de estreia, “Lycans”, lançado em 17 de fevereiro de 2025, produzido por Tiago de la Vega e gravado no Shokran Studios, em Caxias do Sul (RS).",
        "“Heavy Play” foi o primeiro single e ganhou videoclipe em 4K, lançado no Roadie Crew Online Fest. A direção foi de Ricky Franco e Suellen Figueira, com participação da atriz Aline Carvalho, e a gravação aconteceu no Cardeal Pub, em São Paulo. A letra fala da emoção de ir a um show e ver a banda tocar pesado.",
        "Gravar clipe é diferente de tocar ao vivo: cada take precisa estar certo, e a presença diante da câmera conta tanto quanto as notas. Assista na seção de vídeos e ouça “Lycans” nas plataformas digitais."
      ] },
    { slug: "thrash-heavy-black", destaque: false,
      titulo: "Thrash, heavy e black: por que o baixo importa no metal",
      categoria: "Técnica", data: "2026-08-28",
      capa: "assets/images/galeria/corpo.webp",
      resumo: "Palhetada rápida, groove e densidade. O papel do baixista em cada vertente, da Sophie's Threat ao RootingDoom.",
      conteudo: [
        "Thrash, heavy e black metal são as vertentes onde me sinto em casa. Em cada uma o baixo cumpre um papel diferente.",
        "No thrash, como na Sophie's Threat, o baixo acompanha a palhetada rápida da guitarra e dá corpo aos riffs. No heavy clássico, como na High Moonlight, o groove e as linhas melódicas ganham espaço. No black metal, o baixo preenche a densidade e segura a base harmônica.",
        "O RootingDoom, meu projeto autoral, é onde junto essas influências."
      ] }
  ]
};

/* =========================================================
   CONTEÚDO DO SITE
   Edite apenas este arquivo para trocar textos, fotos,
   vídeos, posts, links sociais e dados de contato.
   Caminhos de imagem são relativos à raiz do site.

   INGLÊS: cada item pode ter um bloco "en: { ... }" com a versão
   em inglês dos campos de texto. Campos que não estiverem no "en"
   aparecem iguais nos dois idiomas (nomes, links, anos etc.).
   Ao editar um texto em português, atualize também o "en".
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
      link: "https://onerpm.link/235132452580", acao: "Ouvir o álbum", icone: "vinyl-fill", cor: "#6b0d10",
      en: { tipo: "Album", detalhe: "The band's debut album, with 10 tracks. Produced by Tiago de la Vega at Shokran Studios (Caxias do Sul, Brazil). Bass: André Luiz.", acao: "Listen to the album" } },
    { titulo: "Heavy Play", artista: "High Moonlight", tipo: "Single e videoclipe", ano: "2025",
      detalhe: "Primeiro single de “Lycans”, com clipe em 4K gravado no Cardeal Pub, em São Paulo.",
      link: "https://youtu.be/QfadM3NaDBE", acao: "Assistir ao clipe", video: 0, icone: "camera-reels-fill", cor: "#0d4a44",
      en: { tipo: "Single and music video", detalhe: "First single from “Lycans”, with a 4K music video shot at Cardeal Pub in São Paulo.", acao: "Watch the video" } },
    { titulo: "The Lost Horizon", artista: "Opus Eclipse", tipo: "Demo", ano: "2009",
      detalhe: "Primeira demo autoral da banda, depois do festival Pimp My Band, onde tocamos “Convict” e “The Lost Horizon”.",
      link: "", acao: "", icone: "disc-fill", cor: "#2a2a2a",
      en: { detalhe: "The band's first original demo, recorded after the Pimp My Band festival, where we played “Convict” and “The Lost Horizon”." } }
  ],

  /* Linha do tempo da carreira, em ordem. "quando" aceita ano ou texto curto. */
  trajetoria: [
    { quando: "2007", titulo: "Opus Eclipse — formação original",
      texto: "Entro no baixo da banda, formada em fevereiro como cover de gothic metal e que logo passa a tocar só Therion.",
      en: { titulo: "Opus Eclipse — original lineup", texto: "I join on bass. Formed in February as a gothic metal cover band, it soon starts playing Therion exclusively." } },
    { quando: "27 set 2007", titulo: "Aval do Therion",
      texto: "A Opus Eclipse é reconhecida e autorizada por Christofer Johnsson, fundador do Therion, como cover brasileiro da banda.",
      en: { quando: "Sep 27, 2007", titulo: "Therion's seal of approval", texto: "Opus Eclipse is recognized and authorized by Christofer Johnsson, founder of Therion, as the band's official Brazilian tribute." } },
    { quando: "2008–2009", titulo: "Nova formação e músicas próprias",
      texto: "Volto com a formação renovada. Tocamos “Convict” e “The Lost Horizon” no festival Pimp My Band e preparamos a demo “The Lost Horizon”.",
      en: { titulo: "New lineup and original songs", texto: "I return with the new lineup. We play “Convict” and “The Lost Horizon” at the Pimp My Band festival and prepare the demo “The Lost Horizon”." } },
    { quando: "2012", titulo: "Fim de um ciclo",
      texto: "Deixo a banda depois de cinco anos, quando ela passa a se chamar Remagine.",
      en: { titulo: "End of an era", texto: "I leave the band after five years, as it changes its name to Remagine." } },
    { quando: "3 anos", titulo: "Noctra",
      texto: "Tributo a Epica e After Forever. Mais três anos no metal sinfônico, com vocal lírico.",
      en: { quando: "3 years", texto: "A tribute to Epica and After Forever. Three more years of symphonic metal with operatic vocals." } },
    { quando: "Autoral", titulo: "Sophie's Threat",
      texto: "Som autoral pesado, com forte influência do thrash metal.",
      en: { quando: "Original", texto: "Heavy original material with a strong thrash metal influence." } },
    { quando: "2025", titulo: "High Moonlight — “Lycans”",
      texto: "Gravo o baixo do álbum de estreia da veterana do heavy metal paulistano e o videoclipe de “Heavy Play”.",
      en: { texto: "I record bass on the debut album by this veteran of the São Paulo heavy metal scene, plus the music video for “Heavy Play”." } },
    { quando: "Ao vivo", titulo: "Trapezia — banda de apoio da Thais",
      texto: "Faço parte da banda de suporte da Thais no projeto Trapezia, com apresentação em Santos (SP).",
      en: { quando: "Live", titulo: "Trapezia — Thais's backing band", texto: "I play in Thais's backing band for the Trapezia project, including a live show in Santos, Brazil." } },
    { quando: "Hoje", titulo: "Freelancer e RootingDoom",
      texto: "Shows, substituições, estúdio e clipes como freelancer, e o RootingDoom, meu projeto autoral.",
      en: { quando: "Today", titulo: "Freelancer and RootingDoom", texto: "Live shows, fill-ins, studio sessions and music videos as a freelancer, plus RootingDoom, my own original project." } }
  ],

  servicos: [
    { icone: "speaker-fill", titulo: "Shows e substituições",
      texto: "Aprendo o repertório, chego ensaiado e seguro o grave no palco, seja num tributo ou numa banda autoral.",
      link: "#contato", acao: "Consultar data",
      en: { titulo: "Live shows and fill-ins", texto: "I learn the setlist, show up rehearsed and hold down the low end on stage, whether it's a tribute act or an original band.", acao: "Check a date" } },
    { icone: "mic-fill", titulo: "Gravação de estúdio",
      texto: "Linhas de baixo para single, EP ou álbum, criadas junto com a banda ou a partir da sua demo.",
      link: "#contato", acao: "Pedir orçamento",
      en: { titulo: "Studio recording", texto: "Bass lines for a single, EP or album, written together with the band or built from your demo.", acao: "Request a quote" } },
    { icone: "camera-reels-fill", titulo: "Videoclipes",
      texto: "Presença de palco em frente à câmera, com a experiência do clipe de “Heavy Play”, gravado com a High Moonlight.",
      link: "#videos", acao: "Ver o clipe",
      en: { titulo: "Music videos", texto: "Stage presence in front of the camera, backed by the experience of the “Heavy Play” video recorded with High Moonlight.", acao: "Watch the video" } },
    { icone: "music-note-beamed", titulo: "Criação de linhas de baixo",
      texto: "Do riff de thrash ao arranjo sinfônico: construo a linha que serve à música, não ao ego. Hoje gravo as linhas de baixo do Armistice Front, projeto de Joe Howard (Cleveland/Detroit, EUA).",
      link: "#contato", acao: "Conversar",
      en: { titulo: "Bass line writing", texto: "From thrash riffs to symphonic arrangements: I build the line that serves the song, not the ego. I'm currently recording the bass lines for Armistice Front, Joe Howard's project (Cleveland/Detroit, USA).", acao: "Let's talk" } }
  ],

  /* Depoimentos. Enquanto "texto" estiver vazio, o card aparece como
     "Depoimento em breve". Cole o texto exatamente como a pessoa escreveu.
     traducao: opcional, tradução para o português (aparece só com o site em PT).
     No bloco "en", deixe traducao vazio se o original já estiver em inglês.
     foto: opcional, caminho de uma imagem quadrada (ex.: assets/images/joe.webp). */
  depoimentos: [
    { nome: "Joe Howard", papel: "Armistice Front", local: "Cleveland/Detroit, EUA",
      texto: "Andre’s melodic freestyling is truly exceptional. He has a rare ability to translate emotion into music, creating melodies that feel authentic, powerful, and deeply expressive. Where words fail, Andre lets the music speak.",
      traducao: "O improviso melódico do André é realmente excepcional. Ele tem uma rara capacidade de traduzir emoção em música, criando melodias que soam autênticas, poderosas e profundamente expressivas. Onde as palavras falham, o André deixa a música falar.",
      foto: "",
      en: { local: "Cleveland/Detroit, USA", traducao: "" } }
  ],

  /* categoria: usada nos filtros da galeria.
     tamanho: "normal" | "alta" | "larga" (define o bloco no grid) */
  galeria: [
    /* Show da High Moonlight no evento Grutons Rock 2025 */
    { src: "assets/images/galeria/hml-andre-baixo.webp", thumb: "assets/images/galeria/hml-andre-baixo-thumb.webp", titulo: "Grave em primeiro plano", legenda: "Com a High Moonlight no Grutons Rock", categoria: "palco", tamanho: "alta",
      en: { titulo: "Low end up front", legenda: "With High Moonlight at Grutons Rock" } },
    { src: "assets/images/galeria/hml-banda-palco.webp", thumb: "assets/images/galeria/hml-banda-palco-thumb.webp", titulo: "High Moonlight ao vivo", legenda: "A banda completa em ação no Grutons Rock", categoria: "palco", tamanho: "larga",
      en: { titulo: "High Moonlight live", legenda: "The full band in action at Grutons Rock" } },
    { src: "assets/images/galeria/hml-ao-vivo.webp", thumb: "assets/images/galeria/hml-ao-vivo-thumb.webp", titulo: "Energia de palco", legenda: "Show da High Moonlight no Grutons Rock", categoria: "palco", tamanho: "alta",
      en: { titulo: "Stage energy", legenda: "High Moonlight live at Grutons Rock" } },
    { src: "assets/images/galeria/hml-palco-completo.webp", thumb: "assets/images/galeria/hml-palco-completo-thumb.webp", titulo: "Palco HML", legenda: "A banda sob o logo da HML no Grutons Rock", categoria: "palco", tamanho: "alta",
      en: { titulo: "HML stage", legenda: "The band under the HML logo at Grutons Rock" } },
    { src: "assets/images/galeria/hml-teatro.webp", thumb: "assets/images/galeria/hml-teatro-thumb.webp", titulo: "Do fundo da plateia", legenda: "O palco do Grutons Rock visto da plateia", categoria: "palco", tamanho: "larga",
      en: { titulo: "From the back of the room", legenda: "The Grutons Rock stage from the audience" } },
    { src: "assets/images/galeria/rosto.webp", thumb: "assets/images/galeria/rosto-thumb.webp", titulo: "Concentração", legenda: "Sob as luzes do palco", categoria: "palco", tamanho: "alta",
      en: { titulo: "Focus", legenda: "Under the stage lights" } },
    { src: "assets/images/galeria/banner.webp", thumb: "assets/images/galeria/banner-thumb.webp", titulo: "Identidade AL", legenda: "Banner oficial do canal", categoria: "arte", tamanho: "larga",
      en: { titulo: "AL identity", legenda: "Official channel banner" } },
    { src: "assets/images/galeria/maos.webp", thumb: "assets/images/galeria/maos-thumb.webp", titulo: "Cinco cordas", legenda: "Braço do baixo em ação", categoria: "palco", tamanho: "alta",
      en: { titulo: "Five strings", legenda: "Bass neck in action" } },
    { src: "assets/images/galeria/palco.webp", thumb: "assets/images/galeria/palco-thumb.webp", titulo: "André Luiz", legenda: "Retrato oficial", categoria: "retrato", tamanho: "normal",
      en: { legenda: "Official portrait" } },
    { src: "assets/images/galeria/corpo.webp", thumb: "assets/images/galeria/corpo-thumb.webp", titulo: "Pegada", legenda: "Mão direita, grave firme", categoria: "palco", tamanho: "normal",
      en: { titulo: "Attack", legenda: "Right hand, solid low end" } },
    { src: "assets/images/galeria/flyer.webp", thumb: "assets/images/galeria/flyer-thumb.webp", titulo: "Rock na veia", legenda: "Flyer de divulgação", categoria: "arte", tamanho: "normal",
      en: { titulo: "Rock in my veins", legenda: "Promotional flyer" } },
    { src: "assets/images/galeria/logo.webp", thumb: "assets/images/galeria/logo-thumb.webp", titulo: "Logo AL", legenda: "Marca pessoal", categoria: "arte", tamanho: "normal",
      en: { titulo: "AL logo", legenda: "Personal brand" } }
  ],

  /* tipo: "youtube" | "vimeo" | "mp4"
     id: ID do YouTube/Vimeo, ou caminho do arquivo .mp4 em assets/videos/ */
  videos: [
    { tipo: "youtube", id: "QfadM3NaDBE", destaque: true,
      titulo: "High Moonlight — Heavy Play (Official 4K Video)",
      descricao: "Primeiro single do álbum “Lycans” (2025), com estreia no Roadie Crew Online Fest. Direção de Ricky Franco e Suellen Figueira, com a atriz Aline Carvalho, gravado no Cardeal Pub, em São Paulo. No baixo: André Luiz.",
      thumb: "https://i.ytimg.com/vi/QfadM3NaDBE/hqdefault.jpg",
      thumbReserva: "assets/images/galeria/rosto.webp",
      en: { descricao: "First single from the album “Lycans” (2025), premiered at Roadie Crew Online Fest. Directed by Ricky Franco and Suellen Figueira, featuring actress Aline Carvalho, shot at Cardeal Pub in São Paulo. On bass: André Luiz." } }
    ,{ tipo: "youtube", id: "znph7phOcDk", destaque: false,
      titulo: "High Moonlight — Hercobolus / Chronovisor (ao vivo)",
      descricao: "Ao vivo no Grutons Rock 2025, com a High Moonlight. No baixo: André Luiz.",
      thumb: "https://i.ytimg.com/vi/znph7phOcDk/hqdefault.jpg",
      thumbReserva: "assets/images/galeria/hml-banda-palco-thumb.webp",
      en: { titulo: "High Moonlight — Hercobolus / Chronovisor (live)", descricao: "Live at Grutons Rock 2025 with High Moonlight. On bass: André Luiz." } }
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
      ],
      en: {
        titulo: "Authorized by Therion: my years with Opus Eclipse",
        categoria: "Career",
        resumo: "From the original lineup in 2007 until 2012. A band recognized by Christofer Johnsson himself as Therion's Brazilian tribute.",
        conteudo: [
          "Opus Eclipse was born in February 2007 as a gothic metal cover band, formed by Bruno Buran and Daniel Iastremski. Soon came soprano Karina Flores on operatic vocals, Tatiana Silva on drums and me on bass. The name comes from “Opus Eclipse”, an instrumental track from Therion's 1996 album “Theli”.",
          "Over time, the band came to play Therion exclusively, with a heavyweight setlist: “To Mega Therion”, “Abraxas”, “Asgard”, “Invocation of Naamah” and “Cults of the Shadow”. Playing Therion is an exercise in discipline: long songs, tempo changes, orchestrations and choirs that the bass has to support without stepping on anyone.",
          "On September 27, 2007, after reaching out directly to the band, Opus Eclipse was recognized and authorized by Christofer Johnsson — Therion's singer, guitarist and founder — as the band's Brazilian tribute.",
          "The band took a break from October 2007 to June 2008 and came back with a new lineup, which I remained part of. Besides the tribute shows, we started writing: we played the Pimp My Band festival with “Convict” and “The Lost Horizon” and prepared our first demo, “The Lost Horizon”.",
          "I stayed with the band until 2012, when it changed its name to Remagine. Then came three years with Noctra, a tribute to Epica and After Forever, keeping one foot in symphonic metal before moving on to original music."
        ]
      } },
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
      ],
      en: {
        titulo: "“Heavy Play”: the music video with High Moonlight",
        categoria: "Video",
        resumo: "The first single from “Lycans”, the band's debut album, got a 4K music video shot at Cardeal Pub in São Paulo.",
        conteudo: [
          "High Moonlight is a veteran of the São Paulo heavy metal scene, formed in the late 1990s, with a sound rooted in the old school of the genre: Dio, Judas Priest and Black Sabbath.",
          "After the EP “Arcturians” (2019), the band changed lineup and I took over bass alongside Ricky Franco (vocals), Robert Guima (guitar) and Kleber Mendonça (drums). This lineup released the debut album “Lycans” on February 17, 2025, produced by Tiago de la Vega and recorded at Shokran Studios in Caxias do Sul, Brazil.",
          "“Heavy Play” was the first single and got a 4K music video, premiered at Roadie Crew Online Fest. It was directed by Ricky Franco and Suellen Figueira, featuring actress Aline Carvalho, and shot at Cardeal Pub in São Paulo. The lyrics are about the thrill of going to a show and watching the band play heavy.",
          "Shooting a video is different from playing live: every take has to be right, and your presence in front of the camera counts as much as the notes. Watch it in the videos section and listen to “Lycans” on streaming platforms."
        ]
      } },
    { slug: "thrash-heavy-black", destaque: false,
      titulo: "Thrash, heavy e black: por que o baixo importa no metal",
      categoria: "Técnica", data: "2026-08-28",
      capa: "assets/images/galeria/corpo.webp",
      resumo: "Palhetada rápida, groove e densidade. O papel do baixista em cada vertente, da Sophie's Threat ao RootingDoom.",
      conteudo: [
        "Thrash, heavy e black metal são as vertentes onde me sinto em casa. Em cada uma o baixo cumpre um papel diferente.",
        "No thrash, como na Sophie's Threat, o baixo acompanha a palhetada rápida da guitarra e dá corpo aos riffs. No heavy clássico, como na High Moonlight, o groove e as linhas melódicas ganham espaço. No black metal, o baixo preenche a densidade e segura a base harmônica.",
        "O RootingDoom, meu projeto autoral, é onde junto essas influências."
      ],
      en: {
        titulo: "Thrash, heavy and black: why the bass matters in metal",
        categoria: "Technique",
        resumo: "Fast picking, groove and density. The bassist's role in each style, from Sophie's Threat to RootingDoom.",
        conteudo: [
          "Thrash, heavy and black metal are the styles where I feel at home. In each of them the bass plays a different role.",
          "In thrash, as with Sophie's Threat, the bass follows the guitar's fast picking and gives the riffs their weight. In classic heavy metal, as with High Moonlight, groove and melodic lines get more room. In black metal, the bass fills in the density and holds down the harmonic foundation.",
          "RootingDoom, my own original project, is where I bring these influences together."
        ]
      } }
  ]
};

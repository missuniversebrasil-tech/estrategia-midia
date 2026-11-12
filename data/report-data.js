/* =====================================================================
   MUB | THE EXECUTION GAP · DADOS DA APRESENTAÇÃO
   ---------------------------------------------------------------------
   Este arquivo é a única fonte de números e evidências da apresentação.
   Para atualizar, edite aqui e recarregue o index.html. Não é preciso
   mexer no layout.

   Convenção de status (campo "st"):
     fato  = comprovado em base ou documento com data
     inf   = inferência da auditoria
     pend  = pendente de documento ou validação
     prop  = proposta para decisão

   Base numérica: auditoria-mub-execucao/ (extração de 06/11/2026, 17h54).
   Conferida contra os CSVs 01 e 02 em 10/11/2026: totais, séries
   semanais, editorias, formatos e datas batem 1 a 1.
   ===================================================================== */
window.MUB_DATA = {

  meta: {
    periodo: '19/08 a 06/11/2026',
    extracao: '06/11/2026, 17h54',
    conferido: '11/11/2026',
    reconciliacao: '45 posts próprios no Instagram na extração bruta (23 Reels). 1 Reel de 01/09, 21h24 (ID 17979020393898968), republica o conteúdo do Reel das 21h00 e sai pela regra de republicação: 44 peças e 22 Reels. Nenhum post fora do recorte. As "45 peças próprias únicas" do relatório são outra soma: 44 do Instagram + 1 publicada só no Facebook.',
    versao: 'v8 · 12/11/2026'
  },

  /* ---------- CAPÍTULO 01 · documentos de estratégia ---------------- */
  /* "entregue" = o documento existe e tem data no Drive.
     "aprovado" = só marcar quando houver registro de aprovação.
     Data = criação do arquivo no Drive (última edição entre parênteses). */
  docs: [
    { id:'mz', d:'11/08/2026', d2:'18/08', t:'MUB | Marco Zero',
      tipo:'Deck estratégico · 69 slides',
      p:'Reposicionamento de concurso para marca cultural. 3 pilares, 5 movimentos, Plataforma 365 e arquitetura de submarcas.',
      entregue:'fato', aprovado:'pend',
      url:'https://docs.google.com/presentation/d/1WO3--qXsmxxFGVKStjtv_w56lqC6w1Aiw1m-HgYsAlA/edit' },
    { id:'ems', d:'07/08/2026', d2:'13/08', t:'Raio-X Estratégico EMS × MUB',
      tipo:'Diagnóstico comercial',
      p:'Base para a plataforma de patrocínio: territórios da EMS e interseções legítimas com o MUB.',
      entregue:'fato', aprovado:'pend',
      url:'https://docs.google.com/document/d/1TbLAgBiW41Bu9IE5WKwuZaoIFxztXXiX2zMlItDeQmk/edit' },
    { id:'fest', d:'18/08/2026', d2:'18/08', t:'Festival MUB 2027',
      tipo:'Benchmark + resumo executivo',
      p:'7 referências estudadas (SXSW, HackTown, Rock in Rio, The Town, Lolla, Coachella, SP-Arte) e arquitetura em 7 universos. Aguarda validação de tese, escala e arquitetura.',
      entregue:'fato', aprovado:'pend',
      url:'https://docs.google.com/document/d/1uV-ExpUKzQbIgKjrv3TBy1Fea065ZdvM36PNHV-VbI0/edit' },
    { id:'luz', d:'19/08/2026', d2:'19/08', t:'A Luz do Brasil',
      tipo:'Proposta criativa · Marcella',
      p:'Filme de apresentação da representante: 4 capítulos (Ilha do Mel, Rio, Salvador, Balneário Camboriú). Próximo passo previsto: treatment e roteiro final.',
      entregue:'fato', aprovado:'pend',
      url:'https://docs.google.com/document/d/1TZ_0YjJdmMhv0ccchCHMtd7EBmkWJAmbVoXaXZU6gZI/edit' },
    { id:'tat', d:'Data a confirmar', t:'Planejamento Tático de Redes 2026/2027',
      tipo:'plano de midia.pdf · 32 páginas',
      p:'Três ondas editoriais (Rumo à Final 55%, MUB 365 25%, Marcella Conectada 20%) e frequência de 5 posts de feed, 3 Reels por semana e stories diários.',
      entregue:'fato', aprovado:'pend', url:null },
    { id:'cal', d:'Data a confirmar', t:'Calendário de Conteúdos · Marcella nos EUA',
      tipo:'Calendário + roteiros',
      p:'19 pautas (Reels) para a temporada nos EUA. Classificação gerencial atualizada: 6 realizadas e 13 não realizadas. Fonte: CALENDARIO MUB (2).pdf, p. 1–3.',
      entregue:'fato', aprovado:'pend', url:null }
  ],

  /* Marco Zero, em síntese (fonte: deck MUB | Marco Zero, slides 2, 62 e 58) */
  marcoZero: {
    pilares: [
      ['Nova construção imagética','Novos códigos visuais, direção criativa e percepção de marca.'],
      ['Posicionamento alinhado ao espírito do tempo','Cultura, comportamento, linguagem e leitura contemporânea do feminino.'],
      ['Consideração + lifetime value','Mais motivos para entrar, permanecer e voltar ao universo MUB.']
    ],
    tempos: [
      ['Descoberta','Casting, novos rostos, creators, estados'],
      ['Formação','Academy, talks, preparação como conteúdo'],
      ['Temporada','Editoriais, bastidor, moda, torcida'],
      ['Final','O pico, não o fim do ciclo'],
      ['Legado','Archive, icons, collabs, presença internacional']
    ],
    /* Conceito do Marco Zero → editoria do feed que o materializa (peças próprias no período).
       O mapeamento é leitura da auditoria (inferência), as contagens são fato. */
    ponte: [
      { sub:'MUB Archive · lore',        ed:'MUB Archive',            own:6, col:0 },
      { sub:'Descoberta · estados',      ed:'MUB 365 / Estados',      own:8, col:5 },
      { sub:'MUB Fashion · MUB Beauty',  ed:'MUB Fashion / Beauty',   own:1, col:7 },
      { sub:'Formação · preparação como conteúdo', ed:'Quem Prepara uma Miss?', own:1, col:9 }
    ]
  },

  /* Planejamento Tático 2026/2027 · três ondas editoriais (fonte: documento de 32 páginas, plano de midia.pdf) */
  ondas: [
    { n:'Onda 1', t:'Rumo à Final',       pct:55 },
    { n:'Onda 2', t:'MUB 365',            pct:25 },
    { n:'Onda 3', t:'Marcella Conectada', pct:20 }
  ],
  frequencia: '5 posts de feed por semana · 3 Reels por semana · stories diários',
  fonteTatico: 'plano de midia.pdf (Planejamento Tático 2026/2027, 32 páginas)',

  /* Linha do tempo das entregas (Cap. 01) · st: fato | pend */
  timeline1: [
    { d:'07/08/2026', t:'Raio-X EMS × MUB',             p:'Diagnóstico para a plataforma de patrocínio.', st:'fato', src:'Google Drive' },
    { d:'11/08/2026', t:'Marco Zero',                    p:'Reposicionamento: de concurso a plataforma cultural.', st:'fato', src:'Google Drive' },
    { d:'18/08/2026', t:'Festival MUB 2027',             p:'Benchmark e resumo executivo da Final como festival.', st:'fato', src:'Google Drive' },
    { d:'19/08/2026', t:'A Luz do Brasil',               p:'Proposta criativa do filme da representante.', st:'fato', src:'Google Drive' },
    { d:'Data a confirmar', t:'Planejamento Tático',      p:'32 páginas, três ondas e frequência por canal.', st:'fato', src:'plano de midia.pdf' },
    { d:'Data a confirmar', t:'Calendário EUA',           p:'19 pautas planejadas para a temporada.', st:'fato', src:'CALENDARIO MUB (2).pdf' },
    { d:'10/09/2026', t:'Briefings + calendário de gravações', p:'Duda · documento de briefings e calendário editorial.', st:'fato', src:'ROAD TO MU · 16h53' },
    { d:'26/09/2026', t:'MUB Social Intelligence',       p:'Dashboard em produção com coleta diária da Meta.', st:'fato', src:'Repositório' },
    { d:'02/10/2026', t:'Classificação editorial',       p:'Primeira rodada oficial: 15 peças próprias.', st:'fato', src:'Dashboard' },
    { d:'16/10/2026', t:'13 novas propostas',            p:'Duda · PDF com propostas detalhadas para a Marcella.', st:'fato', src:'MUB•MKT · 9h26' }
  ],

  /* ---------- CAPÍTULO 02 · planejamento x execução ------------------ */
  weeks: ['17/08','24/08','31/08','07/09','14/09','21/09','28/09','05/10','12/10','19/10','26/10','02/11'],
  series: {
    feed: { name:'Feed', meta:[3.57,5,5,5,5,5,5,5,5,5,5,2.86], own:[1,3,2,3,5,3,3,2,5,8,7,2], col:[3,5,7,10,10,7,8,9,8,13,10,3],
            note:'Feed bateu a meta em 14/09, 12/10, 19/10 e 26/10. Três dessas semanas são da reta final, puxadas por countdown, votação, Porto Rico, Pós MUB e Archive, não por conteúdo com a Marcella.' },
    reels:{ name:'Reels', meta:[2.14,3,3,3,3,3,3,3,3,3,3,1.71], own:[1,1,1,2,3,1,2,0,5,3,2,1], col:[1,3,4,8,7,5,5,4,6,7,4,2],
            note:'22 Reels próprios contra 33,9 planejados (65%). Semana de 05/10 sem nenhum Reel próprio.' },
    rtu:  { name:'Road to Universe', meta:[1.43,2,2,2,2,2,2,2,2,2,2,1.14], own:[0,1,0,2,0,2,1,1,3,4,2,1], col:[0,1,1,3,0,2,3,2,4,6,2,1],
            note:'Editoria mais constante (75%), mas abaixo da meta em 7 das 12 semanas.' },
    mc:   { name:'Marcella Connected', meta:[0.71,1,1,1,1,1,1,1,1,1,1,0.57], own:[1,1,1,1,3,0,1,0,0,0,1,0], col:[2,3,1,2,5,3,4,5,0,0,2,0],
            note:'Meta mínima de 1/semana. Desde 04/10, apenas 1 peça própria (26/10). Semanas de 05/10, 12/10, 19/10 e 02/11 zeradas.' }
  },
  /* leitura = frase na tela; det + tip = detalhe quantitativo no "i". Percentuais inalterados. */
  kpis: [
    { k:'Feed',                   pct:78, det:'44 de 56,4 · 3,9/sem (meta 5)',  leitura:'Publicação abaixo da frequência prevista.',
      tip:'44 peças próprias contra 56,4 previstas (meta de 5 por semana, proporcional nas semanas parciais): média de 3,9 por semana. O feed inclui os Reels, sem dupla contagem.' },
    { k:'Reels',                  pct:65, det:'22 de 33,9 · 1,95/sem (meta 3)', leitura:'Produção de vídeos abaixo da meta.',
      tip:'22 Reels próprios contra 33,9 previstos (meta de 3 por semana): média de 1,95 por semana. A semana de 05/10 não teve nenhum Reel próprio.' },
    { k:'Road to Universe',       pct:75, det:'17 de 22,6 · 1,5/sem (meta 2)',  leitura:'Editoria mais consistente do período.',
      tip:'17 peças próprias contra 22,6 previstas (meta de 2 por semana): média de 1,5 por semana. Mesmo sendo a mais constante, ficou abaixo da meta em 7 das 12 semanas.' },
    { k:'Marcella Connected',     pct:80, det:'9 de 11,3 · 40% da meta máxima', leitura:'Execução irregular, com perda de continuidade.',
      tip:'9 peças próprias contra 11,3 na meta mínima (1 por semana): 80%. Na meta máxima (2 por semana), 40%. As peças se concentraram até 03/10; desde 04/10 houve apenas 1 (26/10). Os 80% não indicam regularidade semanal.' },
    { k:'Quem Prepara uma Miss?', pct:9,  det:'1 de 11,3 · 9 em collabs',       leitura:'Presença concentrada em collabs, não no perfil próprio.',
      tip:'1 peça própria contra 11,3 previstas (meta de 1 por semana). O tema saiu 9 vezes em collabs nos perfis da Marcella e de fornecedores; somando, chegaria a 88%. Publicação própria e collab nunca são somadas no indicador.' }
  ],
  editorias: [
    ['Road to Universe',17,8],['Marcella Connected',9,18],['MUB 365 / Estados',8,5],['MUB Archive',6,0],
    ['Parceiros na narrativa',2,2],['Quem Prepara uma Miss?',1,9],['MUB Fashion / Beauty',1,7],['Institucional',1,0],['Chaperonas',0,0]
  ],
  fmtOwn: [['Reel',22],['Carrossel',19],['Imagem',3]],
  fmtCol: [['Reel',34],['Carrossel',14],['Imagem',1]],

  /* ---------- CAPÍTULO 03 · caso Marcella ---------------------------- */
  /* Recorte EXCLUSIVO da temporada nos EUA (informação da coordenação). */
  calendarioEUA: { planejados:19, publicados:6, naoPublicados:13,
    pctExec:'31,58', pctNao:'68,42',
    mensagem:'Segundo o acompanhamento da coordenação, a falta de gravação das pautas previstas comprometeu a execução do calendário.',
    ressalva:'Informação gerencial da coordenação, não conclusão da auditoria. A auditoria não confirmou a causa individual de cada uma das 13 pautas: captação, envio, edição e aprovação não estão documentados pauta a pauta. Recorte exclusivo da temporada nos Estados Unidos.',
    recorte:'Recorte exclusivo da temporada da Marcella nos Estados Unidos. Não representa todo o projeto MUB.',
    nota:'Classificação gerencial da coordenação, que substitui os status do PDF. Os 6 "realizados" não foram conferidos link a link com publicações.',
    pdfStatus:[['Feito',6],['Pendente',8],['Não feito',3],['Realocado',2]],
    pdfFonte:'CALENDARIO MUB (2).pdf, p. 1–3',
    outras:'A equipe de social media ainda está levantando outras solicitações de conteúdo feitas à Marcella. Elas entrarão em versão posterior e não alteram este recorte.',
    planejamentoEntregue:'Briefings e calendário editorial em 10/09. Mais 13 propostas em 16/10 (não somadas aos 19).',
    /* contagem por motivo: null = causa individual ainda não validada. ind = indício documentado (nenhum é atribuição por pauta) */
    motivos: [
      { k:'Captação não avançou',          n:null, ind:'08/09 · restrição de agenda para gravações específicas. 25/09 · takes de patrocinadores ainda pedidos.' },
      { k:'Material não disponibilizado',  n:null, ind:'21/09 · dificuldades reconhecidas para disponibilizar materiais. Fotos: 8 dias entre pedido e entrega.' },
      { k:'Recebido, aguardando o marketing', n:null, ind:'14/09 · pedido de mais agilidade em edição e publicação. 09/10 · 3 vídeos recebidos aguardavam.' },
      { k:'Sem aprovação registrada',      n:null, ind:'Nenhum registro formal de aprovação identificado até aqui.' }
    ] },
  ownProt:  ['22/08','25/08','28/08','01/09','08/09','12/09','13/09','16/09','16/09','16/09','03/10','05/10','12/10','13/10','20/10','23/10','26/10','31/10'],
  mkCollab: ['20/08','21/08','24/08','26/08','01/09','03/09','04/09','07/09','10/09','11/09','12/09','13/09','14/09','14/09','15/09','15/09','17/09','22/09','24/09','26/09','27/09','28/09','02/10','04/10','06/10','06/10','07/10','07/10','08/10','09/10','16/10','16/10','19/10','22/10','23/10','24/10','28/10','29/10','05/11'],

  /* ---------- CAPÍTULO 04 · evidências ------------------------------- */
  /* f: dado | op | mkt · fact:true = comprovado · q = trecho original (curto) */
  /* etapa: brief · ins · op · edit · pub · sc  |  f: dado | op | mkt  |  stage: 0–5 (etapa da matriz)  |  key: prova principal
     q = trechos LITERAIS, copiados programaticamente de ANEXO_CITACOES_WHATSAPP_V5.md (verificados nos _chat.txt dos grupos).
     Não editar a redação de q. Registros sem q são resumos documentados (sem citação literal). */
  stages: ['Estratégia','Planejamento e roteiro','Captação','Envio','Edição e aprovação','Publicação'],
  evidence: [
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "19/08",
    "h": null,
    "grupo": "Google Drive",
    "autor": "Marketing",
    "t": "Proposta criativa \"A Luz do Brasil\"",
    "ctx": "Filme de apresentação da representante para o Miss Universo.",
    "fato": "Documento com conceito, 4 capítulos e o papel da Marcella no filme.",
    "prova": "Orientação criativa entregue para a representante.",
    "nao": "Aprovação, filmagem ou entrega do filme.",
    "src": "A_Luz_do_Brasil_Apresentacao_Marcella (Google Docs)",
    "fact": true,
    "q": []
   },
   {
    "key": true,
    "etapa": "ins",
    "f": "op",
    "stage": 2,
    "d": "08/09",
    "h": "17:18:25",
    "grupo": "ROAD TO MU",
    "autor": "Marcella (~ MK)",
    "t": "Dificuldade para parar e gravar conteúdo específico",
    "ctx": "Conversa sobre o que o marketing precisava de captação durante a agenda nos EUA.",
    "fato": "Marcella diz que não está conseguindo parar para gravar conteúdo, mas que está gravando o que faz na agenda.",
    "prova": "Restrição de disponibilidade para a captação planejada, declarada pela própria representante, e que havia registro da agenda.",
    "nao": "Que ela recusou os pedidos ou que nenhuma das 13 pautas foi gravada.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "ROAD TO MU",
      "data": "08/09/2026",
      "hora": "17:18:25",
      "autor": "~ MK",
      "txt": "Vamos entender o que vcs precisam, eu não to conseguindo para para gravar conteúdo. Mas sim gravando o que estou fazendo de agenda 😅"
     }
    ]
   },
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "10/09",
    "h": "10:11",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Briefing: preparação com Doug",
    "ctx": "Pautas da preparação.",
    "fato": "Briefing específico da preparação com Doug.",
    "prova": "Orientação de conteúdo entregue.",
    "nao": "Gravação ou publicação do roteiro.",
    "src": "Resumo documentado · PACOTE_EVIDENCIAS_V5.md",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "10/09",
    "h": "12:43",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Briefing: dermatologista",
    "ctx": "Pautas da preparação.",
    "fato": "Briefing da pauta com a dermatologista.",
    "prova": "Outra orientação específica entregue.",
    "nao": "Captação final realizada.",
    "src": "Resumo documentado · PACOTE_EVIDENCIAS_V5.md",
    "fact": true,
    "q": []
   },
   {
    "key": true,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "10/09",
    "h": "16:53:58",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Doc 1: briefings, calendário e referências",
    "ctx": "Entrega do planejamento de conteúdo da temporada.",
    "fato": "Duda informa que o Doc 1 reúne os briefings dos conteúdos, o calendário e as referências.",
    "prova": "Planejamento, calendário e briefings entregues pelo marketing em 10/09.",
    "nao": "Aprovação, completude ou execução dos conteúdos.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "ROAD TO MU",
      "data": "10/09/2026",
      "hora": "16:53:58",
      "autor": "Duda Lima",
      "txt": "O **Doc 1** reúne os briefings dos conteúdos + calendário + as referências do que pensamos."
     }
    ]
   },
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "11/09",
    "h": "10:21–10:31",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Pautas práticas: looks, malas, trend no avião",
    "ctx": "Pautas de viagem.",
    "fato": "Orientações para looks, malas, bagagem de mão e trend no avião.",
    "prova": "Pautas práticas encaminhadas.",
    "nao": "Que cada pauta seja um entregável novo, sem sobreposição com o calendário.",
    "src": "Resumo documentado · PACOTE_EVIDENCIAS_V5.md",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "edit",
    "f": "mkt",
    "stage": 4,
    "d": "14/09",
    "h": "15:58:33",
    "grupo": "ROAD TO MU",
    "autor": "Renata Vilani",
    "t": "Pedido de mais agilidade ao marketing",
    "ctx": "Comentário sobre um conteúdo publicado primeiro por páginas de miss.",
    "fato": "Renata registra que a direção pede mais agilidade do marketing, porque páginas de miss publicam antes do MUB.",
    "prova": "Gargalo de agilidade também do lado do marketing.",
    "nao": "Que todos os atrasos decorreram disso.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "ROAD TO MU",
      "data": "14/09/2026",
      "hora": "15:58:33",
      "autor": "Renata Vilani",
      "txt": "Conteúdos como esse a direção pede que vcs do marketing tenham com mais agilidade pq as páginas de miss estão postando antes do que o MUB"
     }
    ]
   },
   {
    "key": true,
    "etapa": "pub",
    "f": "dado",
    "stage": 5,
    "d": "16/09 → 03/10",
    "h": null,
    "grupo": "Dashboard",
    "autor": "Auditoria",
    "t": "17 dias sem peça própria do MUB com a Miss protagonista",
    "ctx": "Período logo após a NYFW.",
    "fato": "Nenhuma peça própria do MUB com a Marcella como protagonista. O perfil dela publicou 7 collabs com o MUB no período.",
    "prova": "Lacuna no perfil oficial.",
    "nao": "Ausência da Marcella nas redes: havia collabs.",
    "src": "01_publicacoes_mub.csv",
    "fact": true,
    "q": []
   },
   {
    "key": true,
    "etapa": "op",
    "f": "op",
    "stage": 3,
    "d": "21/09",
    "h": "21:13:41",
    "grupo": "GANG MKT + OPS",
    "autor": "Renata Vilani",
    "t": "Pedido de desculpas por não entregar o planejado",
    "ctx": "Mensagem após reunião com o marketing, na qual o plano foi recalculado e resumido.",
    "fato": "Renata agradece a reunião, pede desculpas à Duda por não estarem entregando o que ela se empenhou para fazer e propõe montar um esquema melhor.",
    "prova": "Dificuldade na entrega dos materiais planejados, reconhecida pela própria operação, e ajuste do plano.",
    "nao": "Responsabilidade individual por cada pauta.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "GANG MKT + OPS",
      "data": "21/09/2026",
      "hora": "21:13:41",
      "autor": "Renata Vilani",
      "txt": "Meninos...obrigada pela reunião, @⁨Duda Lima⁩ desculpe por não estarmos entregando o que vc se empenhou pra fazer e obrigada por ajudar a gente a dar essa recalculada, resumida, pra que fique mais fácil.  E amanhã na reunião vamos montar um esquema melhor pra todos..."
     }
    ]
   },
   {
    "key": false,
    "etapa": "ins",
    "f": "op",
    "stage": 2,
    "d": "25/09",
    "h": "09:28:50",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Lembrete dos takes para o vídeo dos patrocinadores",
    "ctx": "Vídeo de patrocinadores criado pelo marketing.",
    "fato": "Duda lembra a Marcella dos takes simples para o vídeo dos patrocinadores, necessários o quanto antes.",
    "prova": "Insumo ainda pendente na data.",
    "nao": "Que o material nunca foi fornecido depois.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "ROAD TO MU",
      "data": "25/09/2026",
      "hora": "09:28:50",
      "autor": "Duda Lima",
      "txt": "@⁨~MK⁩, só lembrando sobre aqueles takes do video dos patrocinadores que criamos, que sao aqueles takes simples, mas que precisamos o quanto antes hahaha"
     }
    ]
   },
   {
    "key": false,
    "etapa": "pub",
    "f": "mkt",
    "stage": 5,
    "d": "02/10",
    "h": null,
    "grupo": "Dashboard",
    "autor": "Marketing",
    "t": "Classificação editorial parou após 1 rodada",
    "ctx": "Processo interno de medição.",
    "fato": "Só 15 das 45 peças próprias têm editoria oficial, todas registradas em 02/10.",
    "prova": "Processo de medição interno incompleto.",
    "nao": "Erro de classificação nas demais.",
    "src": "05_dicionario_e_fontes.md",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "pub",
    "f": "dado",
    "stage": 5,
    "d": "04/10 → 05/11",
    "h": null,
    "grupo": "Dashboard",
    "autor": "Auditoria",
    "t": "Marcella Connected quase sai do perfil próprio",
    "ctx": "Editoria da Onda 3.",
    "fato": "Apenas 1 peça própria da editoria no período (26/10).",
    "prova": "Queda da editoria no perfil oficial.",
    "nao": "A causa da queda.",
    "src": "02_comparativo_editorial.csv",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "edit",
    "f": "mkt",
    "stage": 4,
    "d": "09/10",
    "h": "18:44:51",
    "grupo": "ROAD TO MU",
    "autor": "Renata Vilani",
    "t": "3 vídeos recebidos e ainda não publicados",
    "ctx": "Cobrança ao marketing; um dos vídeos foi enviado em 23/09.",
    "fato": "Renata lista 3 vídeos com conteúdo passado pela Marcella que ainda não tinham subido: maquiagem, compras na Sephora e aula de oratória (enviado em 23/09).",
    "prova": "Material recebido aguardava edição ou publicação do marketing. Pendência registrada do marketing.",
    "nao": "Que faltou captação nesses três casos.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "ROAD TO MU",
      "data": "09/10/2026",
      "hora": "18:44:51",
      "autor": "Renata Vilani",
      "txt": "Teve tbm 3 vídeos que a Ma passou conteúdos e não subiram ainda , são eles :\n1) vídeo de maquiagem \n2) compras da Sephora\n3) aula de oratória com Júlia Horta (mandado em 23/09)"
     }
    ]
   },
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "15/10",
    "h": "18:32:46",
    "grupo": "MUB•MKT",
    "autor": "Carla Ferro",
    "t": "Pedido do script para as gravações da Marcella",
    "ctx": "Pedido que antecede a entrega de 16/10.",
    "fato": "Carla diz que aguarda o script para as gravações da Marcella.",
    "prova": "Demanda formal pelo roteiro; a entrega ocorreu na manhã seguinte (16/10, 09:26).",
    "nao": "Atraso anterior a 15/10.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "MUB•MKT",
      "data": "15/10/2026",
      "hora": "18:32:46",
      "autor": "Carla Ferro",
      "txt": "Pessoal estou no aguardo do script p as gravações da Marcella"
     }
    ]
   },
   {
    "key": true,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "16/10",
    "h": "09:26:55",
    "grupo": "MUB•MKT",
    "autor": "Duda Lima",
    "t": "Entrega das 13 propostas para a Marcella gravar",
    "ctx": "Resposta ao pedido de 15/10. A contagem de 13 vem do PDF anexado à mensagem.",
    "fato": "Duda envia os conteúdos para a Marcella gravar: PDF com 13 propostas detalhadas.",
    "prova": "Produção e entrega das propostas pelo marketing.",
    "nao": "Gravação, aprovação e publicação das 13. Não somar aos 19 do calendário EUA.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo · anexo PDF (contagem: PACOTE_EVIDENCIAS_V5.md)",
    "fact": true,
    "q": [
     {
      "grupo": "MUB•MKT",
      "data": "16/10/2026",
      "hora": "09:26:55",
      "autor": "Duda Lima",
      "txt": "Segue os conteúdos para a Marcella gravar"
     }
    ]
   },
   {
    "key": false,
    "etapa": "brief",
    "f": "op",
    "stage": 1,
    "d": "20/10",
    "h": "10:38",
    "grupo": "ROAD TO MU",
    "autor": "Duda Lima",
    "t": "Duas versões de roteiro com o dentista",
    "ctx": "Pauta da preparação.",
    "fato": "Envio de duas versões de roteiro com o dentista.",
    "prova": "Orientação pronta.",
    "nao": "Filmagem concluída.",
    "src": "Resumo documentado · PACOTE_EVIDENCIAS_V5.md",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "op",
    "f": "op",
    "stage": 5,
    "d": "26/10",
    "h": "20:32–20:53",
    "grupo": "ROAD TO MU",
    "autor": "Marcella e Duda",
    "t": "Stories publicados em colaboração",
    "ctx": "Exemplo de fluxo que funcionou.",
    "fato": "Stories encaminhados e publicados em conjunto.",
    "prova": "Realização conjunta no mesmo dia.",
    "nao": "Que a participação foi total no período.",
    "src": "Resumo documentado · PACOTE_EVIDENCIAS_V5.md",
    "fact": true,
    "q": []
   },
   {
    "key": true,
    "etapa": "ins",
    "f": "op",
    "stage": 3,
    "d": "28/10",
    "h": "09:46:59",
    "grupo": "GANG MKT + OPS",
    "autor": "Juju Possas",
    "t": "Fotos oficiais 1/3: pedido para o site",
    "ctx": "Atualização do site com o novo ensaio.",
    "fato": "Juju pede a Renata e Cris fotos do novo ensaio da Marcella para atualizar o site.",
    "prova": "Solicitação documentada do insumo.",
    "nao": "Que não existisse outro lote de fotos.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "GANG MKT + OPS",
      "data": "28/10/2026",
      "hora": "09:46:59",
      "autor": "Juju Possas",
      "txt": "Bom dia, time!@⁨Renata Vilani⁩ @⁨Cris MUB⁩ preciso atualizar o site com as fotos da Marcella. Vcs tem fotos do novo ensaio dela?"
     }
    ]
   },
   {
    "key": true,
    "etapa": "ins",
    "f": "op",
    "stage": 3,
    "d": "04/11",
    "h": "11:18:10",
    "grupo": "GANG MKT + OPS",
    "autor": "Juju Possas",
    "t": "Fotos oficiais 2/3: cobrança urgente",
    "ctx": "7 dias após o pedido.",
    "fato": "Juju volta a cobrar a Cris, com urgência, para atualizar as fotos do site.",
    "prova": "Acompanhamento e dependência do material.",
    "nao": "Que o site seria atualizado logo após o recebimento.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "GANG MKT + OPS",
      "data": "04/11/2026",
      "hora": "11:18:10",
      "autor": "Juju Possas",
      "txt": "Oi, Cris! bom dia. Vcs conseguiram ver essa situação? \nPrecisamos com urgência atualizar as fotos do site 😵‍💫"
     }
    ]
   },
   {
    "key": true,
    "etapa": "ins",
    "f": "op",
    "stage": 3,
    "d": "05/11",
    "h": "23:20:29",
    "grupo": "GANG MKT + OPS",
    "autor": "Cris MUB e Renata Vilani",
    "t": "Fotos oficiais 3/3: Drive disponibilizado",
    "ctx": "8 dias após o pedido; véspera do embarque (06/11).",
    "fato": "Cris envia o Drive com as fotos; um minuto depois, Renata registra que cobraram todos os dias.",
    "prova": "Entrega tardia do lote pedido em 28/10, após cobranças diárias.",
    "nao": "Que todas as fotos do projeto chegaram só nessa data.",
    "src": "ANEXO_CITACOES_WHATSAPP_V5.md · _chat.txt exportado do grupo",
    "fact": true,
    "q": [
     {
      "grupo": "GANG MKT + OPS",
      "data": "05/11/2026",
      "hora": "23:20:29",
      "autor": "Cris MUB",
      "txt": "Segue Drive com fotos 👆🏽"
     },
     {
      "grupo": "GANG MKT + OPS",
      "data": "05/11/2026",
      "hora": "23:21:41",
      "autor": "Renata Vilani",
      "txt": "Gente ! Cobramos todos os dias e veio hj ! Acreditem ou não."
     }
    ]
   },
   {
    "key": false,
    "etapa": "pub",
    "f": "dado",
    "stage": 5,
    "d": "02/11 → 05/11",
    "h": null,
    "grupo": "Dashboard",
    "autor": "Auditoria",
    "t": "Semana do embarque sem peça própria com a Miss protagonista",
    "ctx": "Semana anterior ao embarque.",
    "fato": "Nenhuma peça própria do MUB com a Marcella como protagonista antes do embarque em 06/11.",
    "prova": "Lacuna no perfil oficial na semana do embarque.",
    "nao": "Ausência de conteúdo dela em outros perfis.",
    "src": "02_comparativo_editorial.csv",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "sc",
    "f": "mkt",
    "stage": 5,
    "d": "Contínuo",
    "h": null,
    "grupo": "Dashboard",
    "autor": "Marketing",
    "t": "Stories não medidos",
    "ctx": "Meta de stories diários.",
    "fato": "O pipeline não coleta stories; a meta não pode ser auditada.",
    "prova": "Lacuna de medição do próprio marketing.",
    "nao": "Que a meta de stories foi ou não cumprida.",
    "src": "05_dicionario_e_fontes.md",
    "fact": true,
    "q": []
   },
   {
    "key": false,
    "etapa": "sc",
    "f": "op",
    "stage": null,
    "d": "A validar",
    "h": null,
    "grupo": "—",
    "autor": "—",
    "t": "Causa individual das 13 pautas não realizadas",
    "ctx": "Calendário EUA.",
    "fato": "Não há registro pauta a pauta de captação, envio, edição e aprovação.",
    "prova": "—",
    "nao": "Que as 13 sejam recusas de gravação.",
    "src": "Pendente: cruzar CALENDARIO MUB (2).pdf com os grupos",
    "fact": false,
    "q": []
   },
   {
    "key": false,
    "etapa": "sc",
    "f": "op",
    "stage": 4,
    "d": "A validar",
    "h": null,
    "grupo": "—",
    "autor": "—",
    "t": "Registro formal de aprovação",
    "ctx": "Fluxo de aprovação.",
    "fato": "Nenhum registro de quem aprova e em quanto tempo.",
    "prova": "—",
    "nao": "Que não houve aprovação.",
    "src": "Pendente",
    "fact": false,
    "q": []
   },
   {
    "key": false,
    "etapa": "sc",
    "f": "op",
    "stage": null,
    "d": "Em levantamento",
    "h": null,
    "grupo": "—",
    "autor": "Social media",
    "t": "Outras solicitações de conteúdo à Marcella",
    "ctx": "Fora do calendário EUA.",
    "fato": "A equipe de social media está levantando pedidos de conteúdo feitos fora do calendário dos EUA.",
    "prova": "—",
    "nao": "Qualquer percentual além do recorte EUA.",
    "src": "Pendente",
    "fact": false,
    "q": []
   }
  ],
  etapasEv: { brief:'Briefing e roteiro', ins:'Insumo e captação', op:'Operação', edit:'Edição e publicação do recebido', pub:'O que foi publicado', sc:'Sem comprovação' },

  /* Matriz de gargalos: etapa do fluxo × o que se sabe.
     base = o que o dashboard mostra · doc = evidência documental · st = status */
  /* Matriz v5 · 6 etapas. st: doc | parcial | gargalo | semdados | val */
  situacoes: { doc:'Documentada', parcial:'Execução parcial', gargalo:'Gargalo documentado', semdados:'Sem dados suficientes', val:'Pendente de validação' },
  matriz: [
    { etapa:'Estratégia', st:['doc'], quem:'Marketing',
      evid:'Marco Zero, Planejamento Tático (plano de midia.pdf), Festival 2027, Raio-X EMS, A Luz do Brasil',
      falta:'Registro formal de aprovação' },
    { etapa:'Planejamento e roteiro', st:['doc'], quem:'Marketing · Duda',
      evid:'Calendário EUA (19 pautas). Briefings 10/09 e 11/09. Roteiro do dentista 20/10. PDF com 13 propostas 16/10',
      falta:'Aprovação formal; sobreposição entre as 13 propostas e as 19 pautas' },
    { etapa:'Captação', st:['parcial','semdados'], quem:'Representante e equipe',
      evid:'6 pautas realizadas (classificação gerencial); stories em colaboração 26/10. Restrição de agenda 08/09; takes de patrocinadores reforçados 25/09',
      falta:'Contagem pauta a pauta: a captação não está quantificada' },
    { etapa:'Envio', st:['gargalo'], quem:'Representante, assessoria e produção',
      evid:'21/09 dificuldades reconhecidas para disponibilizar materiais. Fotos oficiais: pedido 28/10, cobrança 04/11, entrega 05/11',
      falta:'Prazo de envio por pauta' },
    { etapa:'Edição e aprovação', st:['gargalo','val'], quem:'Marketing (edição) · aprovador a definir',
      evid:'14/09 pedido de mais agilidade ao marketing. 09/10 3 vídeos recebidos aguardavam publicação',
      falta:'Quem aprova e em quanto tempo' },
    { etapa:'Publicação', st:['parcial'], quem:'Social media',
      evid:'Feed 78% · Reels 65% · Quem Prepara 9% do plano. Calendário EUA: 6 de 19 realizadas',
      falta:'Correspondência link a link das 6 pautas realizadas' }
  ],

  /* ---------- A CADEIA DA EXECUÇÃO (slide de abertura) --------------- */
  cadeia: [
    { n:'01', t:'Estratégia desenvolvida', big:'5', unit:'documentos', st:'fato', sit:'doc',
      det:'Marco Zero, Planejamento Tático (32 pp), Festival 2027, Raio-X EMS e A Luz do Brasil.' },
    { n:'02', t:'Planejamento e roteiro entregues', big:'19', unit:'pautas no calendário EUA', st:'fato', sit:'doc',
      det:'Briefings e calendário editorial em 10/09 e 11/09. Mais 13 propostas em 16/10 (não somadas: pode haver sobreposição).' },
    { n:'03', t:'Captação e envio', big:'6', unit:'conteúdos realizados', st:'neutro', sit:'gargalo',
      det:'6 = conteúdos do calendário EUA classificados como realizados pela coordenação. Não é uma contagem auditada de gravações recebidas: a captação não está quantificada pauta a pauta. Registros: 08/09 restrição de agenda para gravações; 21/09 dificuldades para disponibilizar materiais; fotos oficiais entregues 8 dias após o pedido.' },
    { n:'04', t:'Realização e publicação', big:'31,58%', unit:'6 de 19 realizados', st:'lac', sit:'parcial',
      det:'Recorte EUA, classificação gerencial. No perfil: feed 78%, Reels 65%, Quem Prepara 9%. Em 09/10, 3 vídeos recebidos aguardavam o marketing.' }
  ],
  cadeiaGaps: [
    'Aprovação formal sem registro',
    'Captação não quantificada · restrições documentadas',
    'Edição e publicação: 3 vídeos aguardando (09/10)'
  ],

  /* ---------- CAPÍTULO 05 · plano de ação e roadmap ------------------ */
  /* Processo operacional proposto (governança). Tudo aqui é PROPOSTA para decisão, não atribuição aprovada. */
  plano: [
    { etapa:'Responsáveis por etapa',       resp:'Um nome por etapa (roteiro, captação, envio, edição, aprovação, publicação)', prazo:'Definir na reunião',               reg:'Quadro de responsáveis',                         ev:'Aprovação e envio sem dono hoje' },
    { etapa:'Agenda de captação com a Marcella', resp:'Assessoria/produção + marketing',  prazo:'Janela fixa semanal, combinada na sexta',      reg:'Agenda de gravação compartilhada',               ev:'08/09 · sem tempo para parar e gravar' },
    { etapa:'Envio de materiais',           resp:'Produção / equipe da Miss',            prazo:'Até 24h após a gravação; fotos em até 48h',  reg:'Pasta única, nomeada por pauta',                 ev:'28/10 → 05/11 · fotos em 8 dias' },
    { etapa:'Edição',                       resp:'Marketing',                            prazo:'Até 48h após o recebimento',                 reg:'Fila de edição visível',                         ev:'09/10 · 3 vídeos aguardando' },
    { etapa:'Aprovação',                    resp:'Aprovador único (a definir)',          prazo:'24h, uma rodada de ajustes',                 reg:'OK registrado no mesmo canal',                   ev:'Sem registro de aprovação' },
    { etapa:'Calendário de publicação',     resp:'Social media',                         prazo:'Fechado na sexta (D-7)',                     reg:'Calendário único; peça própria primeiro',        ev:'QPM 9% · 39 collabs × 18 próprias' },
    { etapa:'Reunião semanal',              resp:'Marketing + operação + presidência',  prazo:'Segunda, 30 min',                            reg:'Planejado × realizado por editoria',             ev:'21/09 · "montar um esquema melhor"' },
    { etapa:'Registro de pendências e decisões', resp:'Marketing',                       prazo:'Atualizado após cada reunião',               reg:'Log de pendências com dono e data',              ev:'Causas das 13 pautas sem registro' }
  ],
  /* Decisões para o presidente (slide final). why = evidência que motiva; ok = o que destrava. */
  decisoes: [
    { n:'01', t:'Nomear um responsável por etapa', why:'Aprovação e envio sem dono identificado', ok:'Cada pauta passa a ter quem responde por ela' },
    { n:'02', t:'Proteger uma agenda de captação com a Marcella', why:'08/09: sem tempo para parar e gravar', ok:'Roteiros viram gravações com data' },
    { n:'03', t:'Fixar prazos de envio e de edição', why:'Fotos em 8 dias (28/10 → 05/11); 3 vídeos aguardando em 09/10', ok:'Material circula nos dois sentidos' },
    { n:'04', t:'Definir o aprovador e o prazo de resposta', why:'Nenhum registro formal de aprovação', ok:'Fim da espera sem dono' },
    { n:'05', t:'Adotar um calendário único de publicação', why:'Quem Prepara 9% no perfil próprio; narrativa nas collabs', ok:'A história da Miss vive no MUB' },
    { n:'06', t:'Instituir a reunião semanal com registro', why:'21/09: proposta de "montar um esquema melhor"', ok:'Pendências e decisões rastreáveis' }
  ],
  roadmap: [
    { h:'Semana 1', t:'Decidir', itens:[
      'Aprovador único e prazo de resposta de 24h',
      'Responsável nominal por gravação e envio de brutos',
      'Regra: peça própria no MUB primeiro, collab como amplificação',
      'Zerar a fila de material recebido e ainda não publicado' ] },
    { h:'Semanas 2 a 4', t:'Rodar o ritual', itens:[
      'Pauta fechada na sexta (D-7) com roteiros',
      'Road to Universe e Marcella Connected de volta ao perfil próprio',
      'Reunião de 30 min às segundas com o painel planejado x realizado' ] },
    { h:'30 a 60 dias', t:'Medir e corrigir', itens:[
      'Validar a causa individual de cada um dos 13 conteúdos não realizados',
      'Cruzar as 13 propostas de 16/10 com o calendário dos EUA',
      'Classificação editorial em 100% das peças',
      'Incluir stories e views na medição' ] },
    { h:'Ciclo 2027', t:'Escalar', itens:[
      'Validar tese, escala e arquitetura do Festival MUB 2027',
      'Plataforma 365 do Marco Zero como calendário-mestre',
      'Quem Prepara uma Miss? como série própria do MUB' ] }
  ],

  /* ---------- ANEXO · fontes ----------------------------------------- */
  fontes: [
    { t:'MUB | Marco Zero (deck, 69 slides)', d:'11/08/2026', url:'https://docs.google.com/presentation/d/1WO3--qXsmxxFGVKStjtv_w56lqC6w1Aiw1m-HgYsAlA/edit' },
    { t:'Raio-X Estratégico EMS × MUB', d:'07/08/2026', url:'https://docs.google.com/document/d/1TbLAgBiW41Bu9IE5WKwuZaoIFxztXXiX2zMlItDeQmk/edit' },
    { t:'Festival MUB 2027 · Resumo Executivo e Benchmark', d:'18/08/2026', url:'https://docs.google.com/document/d/1uV-ExpUKzQbIgKjrv3TBy1Fea065ZdvM36PNHV-VbI0/edit' },
    { t:'A Luz do Brasil · Apresentação Marcella', d:'19/08/2026', url:'https://docs.google.com/document/d/1TZ_0YjJdmMhv0ccchCHMtd7EBmkWJAmbVoXaXZU6gZI/edit' },
    { t:'plano de midia.pdf · Planejamento Tático 2026/2027 (32 pp)', d:'', url:null },
    { t:'CALENDARIO MUB (2).pdf · calendário EUA, p. 1–3', d:'', url:null },
    { t:'WhatsApp: ROAD TO MU · GANG MKT + OPS · MUB•MKT', d:'08/09–05/11', url:null },
    { t:'matriz_consolidada_road_e_gang.csv · matriz_evidencias_road_to_mu.csv · matriz_evidencias_gang_mkt_ops.csv', d:'', url:null },
    { t:'PACOTE_EVIDENCIAS_V5.md (consolidação das evidências)', d:'11/11/2026', url:null },
    { t:'ANEXO_CITACOES_WHATSAPP_V5.md · 12 trechos literais verificados nos _chat.txt', d:'11/11/2026', url:null },
    { t:'auditoria-mub-execucao/ (arquivos 01 a 05 e scripts)', d:'06/11/2026', url:null }
  ],
  pendentes: [
    'Causa individual de cada uma das 13 pautas não realizadas nos EUA',
    'Outras solicitações de conteúdo à Marcella (social media em levantamento)',
    'Sobreposição entre as 13 propostas de 16/10 e as 19 pautas do calendário',
    'Correspondência link a link das 6 pautas realizadas',
    'Registro de aprovação dos documentos e do fluxo',
    'Registros ainda sem trecho literal: 10/09 (10:11 e 12:43), 11/09, 20/10 e 26/10',
    'Revisão manual das editorias classificadas por legenda'
  ]
};

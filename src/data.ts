import { SiteContent } from "./types";

export const defaultSiteContent: SiteContent = {
  header: {
    logoText: "Eduarda Zanluchi",
    whatsappLink: "https://wa.me/message/KO3RCJLC7H2NG1"
  },
  hero: {
    eyebrow: "Joinville · SC — Clínica Premium",
    titleNormal1: "Seu corpo merece um protocolo ",
    titleItalic: "exclusivo.",
    titleNormal2: "",
    subtitle: "Tratamentos personalizados para gordura localizada, flacidez, diástase abdominal e remodelação corporal. Sem cirurgia e sem afastamento da rotina.",
    buttonPrimaryText: "Agendar Avaliação",
    buttonPrimaryLink: "https://wa.me/message/KO3RCJLC7H2NG1",
    buttonSecondaryText: "Conhecer Protocolos",
    badge1: "Atendimento personalizado",
    badge2: "Resultados reais",
    badge3: "Protocolos exclusivos"
  },
  sobre: {
    eyebrow: "Especialista em Estética Corporal",
    titleName: "Eduarda Zanluchi",
    subtitle: "8 anos transformando corpos e vidas",
    paragraphs: [
      "Cada corpo possui necessidades únicas. Por isso, todos os produtos e protocolos são individualizados para garantir resultados reais, naturais e personalizados.",
      "Especialista em estética corporal avançada, atuo há 8 anos desenvolvendo protocolos exclusivos que combinam ciência, tecnologia e sensibilidade clínica para transformar a autoimagem das minhas clientes de forma segura e eficaz."
    ],
    stats: [
      { num: "8+", label: "Anos de experiência" },
      { num: "3", label: "Protocolos exclusivos" },
      { num: "5★", label: "Avaliação Google" }
    ],
    tags: [
      "Estética corporal avançada",
      "Criolipolise especializada",
      "Recuperação abdominal",
      "Protocolos individualizados"
    ]
  },
  protocolos: {
    headerEyebrow: "Tratamentos Exclusivos",
    headerTitleNormal: "Protocolos ",
    headerTitleItalic: "desenvolvidos para você",
    headerDescription: "Cada protocolo é cuidadosamente desenvolvido com base em estudos clínicos e adaptado à individualidade de cada cliente.",
    list: [
      {
        id: "01",
        name: "Criolipólise Método Zanluchi",
        tag: "Protocolo 01 — Redução de Gordura",
        sub: "Eliminação definitiva de gordura localizada",
        description: "Método exclusivo desenvolvido através de estudos e testes clínicos para redução definitiva de gordura localizada através de resfriamento controlado. Uma abordagem científica e personalizada que entrega resultados mensuráveis desde a primeira sessão.",
        expectedResult: "40% a 80% de eliminação de gordura localizada em uma única sessão",
        duration: "4h a 12h (conforme avaliação individual)",
        indicatedFor: "Gordura localizada resistente, flacidez e contorno corporal",
        benefits: [
          "Redução acentuada de gordura localizada",
          "Melhora visível da flacidez na área tratada",
          "Remodelação e definição do contorno corporal",
          "Protocolo 100% personalizado por bioimpedância",
          "Procedimento não invasivo — sem cirurgia",
          "Retorno imediato às suas atividades diárias"
        ],
        stepsTitle: "Como funciona o método",
        steps: [
          { num: "01", title: "Consulta Personalizada", desc: "Análise individual detalhada do tipo de gordura, flacidez, hábitos e metas corporais realizáveis." },
          { num: "02", title: "Procedimento Especializado", desc: "Aplicação do protocolo com tecnologia de ponta, monitoramento de temperatura constante e conforto." },
          { num: "03", title: "Acompanhamento Contínuo", desc: "Monitoramento pós-procedimento estruturado para garantir a melhor evolução biológica dos resultados." }
        ],
        highlight: "Diferencial exclusivo: Fechando a criolipólise no dia da avaliação, a cliente ganha uma cinta modeladora premium e suplementação de suporte exclusiva inclusas.",
        priceNote: "✦ Avaliação: R$ 200,00 · Valores do procedimento sob medida conforme avaliação",
        buttonText: "Agendar Avaliação pelo WhatsApp",
        whatsappLink: "https://wa.me/message/KO3RCJLC7H2NG1"
      },
      {
        id: "02",
        name: "DiástasePH",
        tag: "Protocolo 02 — Recuperação Abdominal",
        sub: "Recuperação funcional e estética do abdômen pós-gestação",
        description: "Tratamento exclusivo idealizado para recuperação da frouxidão abdominal crônica causada por gestações, ganho rápido de peso, exercícios de impacto inadequados ou predisposição familiar. Busca restabelecer a função, força de sustentação profunda, tônus da parede abdominal e propriocepção.",
        expectedResult: "Estreitamento da diástase e recuperação da tonicidade muscular",
        duration: "5 sessões — realizadas 1 vez por semana",
        indicatedFor: "Mães no pós-parto, frouxidão abdominal de sobrepeso e fraqueza de core",
        benefits: [
          "Melhora dramática na estética e função do abdômen",
          "Fortalecimento ativo da musculatura interna profunda (transverso)",
          "Melhora expressiva do contorno da cintura e silhueta",
          "Recuperação da consciência corporal e postura lombar",
          "Totalmente livre de cirurgia, cicatrizes ou dor crônica",
          "Sem necessidade de repouso ou interrupção de rotina"
        ],
        priceNote: "✦ Valores e plano de ação estruturados após avaliação clínica",
        buttonText: "Agendar Consulta de Avaliação",
        whatsappLink: "https://wa.me/message/KO3RCJLC7H2NG1"
      },
      {
        id: "03",
        name: "MAF - muito além de uma simples drenagem",
        tag: "Protocolo 3 - massagem 100% manual",
        sub: "Método manual premium com fundamentação fisiológica avançada",
        description: "Técnica exclusiva totalmente manual, baseada nos mais recentes estudos linfáticos e prática clínica refinada. Associa manobras precisas, alongamento suave, respiração guiada e posturas terapêuticas aceleradoras.",
        expectedResult: "Alívio imediato do inchaço, leveza corporal e ativação metabólica",
        duration: "Sessão avulsa ou planos de tratamento",
        indicatedFor: "Retenção de líquidos crônica, cansaço em pernas, pós-operatório ou desintoxicação",
        benefits: [
          "Redução imediata do edema (inchaço retido)",
          "Otimização da microcirculação e oxigenação tecidual",
          "Estímulo ao trânsito intestinal e redução de gases",
          "Redução do cansaço e dores musculares pesadas",
          "Auxílio integrado no plano de emagrecimento ativo",
          "Fortalecimento indireto da resposta imunológica"
        ],
        priceNote: "✦ Sessão avulsa: R$ 350,00 · Planos de recorrência com condições exclusivas",
        buttonText: "Reservar Minha Sessão no WhatsApp",
        whatsappLink: "https://wa.me/message/KO3RCJLC7H2NG1"
      }
    ]
  },
  beneficios: {
    eyebrow: "O que você ganha",
    titleNormal: "Resultados que ",
    titleItalic: "você vai sentir",
    description: "Cada tratamento é pensado para transformar não apenas o corpo, mas a confiança, leveza e o bem-estar de cada cliente.",
    list: [
      { title: "Redução de Medidas", description: "Contorno corporal real e duradouro com protocolos científicos.", icon: "Activity" },
      { title: "Firmeza da Pele", description: "Estímulo de colágeno que recupera a elasticidade e firmeza natural.", icon: "Shield" },
      { title: "Ativação Linfática", description: "Redução de toxinas acumuladas e aceleração do metabolismo corporal.", icon: "Sparkles" },
      { title: "Autoestima Elevada", description: "Uma transformação profunda que reflete no seu amor-próprio e segurança.", icon: "Heart" },
      { title: "Recuperação do Core", description: "Apoio à reabilitação e força profunda da parede abdominal pós-gestação.", icon: "Check" },
      { title: "Alívio do Estresse", description: "Sessões que são verdadeiros momentos de pausa e descanso físico e mental.", icon: "Coffee" },
      { title: "Definição de Curvas", description: "Realce das curvas naturais com técnicas de escultura manual e tecnologia.", icon: "Smile" },
      { title: "Acompanhamento Vip", description: "Suporte especializado constante, antes e durante seu processo até o retorno.", icon: "Sparkles" }
    ]
  },
  experiencia: {
    eyebrow: "A Experiência Zanluchi",
    titleNormal: "Uma clínica premium desenhada ",
    titleItalic: "especialmente para você",
    description: "Do aroma acolhedor da recepção à sofisticação da sua cabine, cada detalhe é desenhado para criar uma atmosfera de exclusividade, cuidado e transformação.",
    features: [
      { title: "Atendimento Individual e Exclusivo", description: "Reserva exclusiva de horário. Cada cliente recebe atenção única e sem pressa.", icon: "Users" },
      { title: "Ambiente Aromático & Acolhedor", description: "Arquitetura refinada, ambiente confortável, luz suave e uma deliciosa carta de cafés e chás para você aproveitar enquanto aguarda o horário.", icon: "Coffee" },
      { title: "Biossegurança Estrita de Alto Padrão", description: "todos os materiais esterilizados de acordo com as diretrizes médica recomendadas", icon: "Shield" },
      { title: "Acompanhamento de Resultados", description: "Registros fotográficos, acompanhamento de medidas e suporte no WhatsApp", icon: "Activity" }
    ]
  },
  antesDepois: {
    eyebrow: "Transformações Reais",
    titleNormal: "Resultados de Sucesso",
    description: "Cada corpo conta uma história única. Veja as mudanças reais construídas com consistência e ciência.",
    list: [
      {
        tag: "Redução Abdominal de Sucesso",
        description: "Eliminação expressiva de gordura abdominal em apenas uma única sessão de Crio Zanluchi",
        beforeLabel: "",
        afterLabel: ""
      },
      {
        tag: "Recuperação Abdominal",
        description: "Fechamento de diástase abdominal e melhora funcional da postura em 5 semanas",
        beforeLabel: "",
        afterLabel: ""
      },
      {
        tag: "Alívio e Definição",
        description: "Alívio imediato do inchaço e definição do contorno corporal, relaxamento profundo",
        beforeLabel: "",
        afterLabel: ""
      }
    ]
  },
  depoimentos: {
    eyebrow: "Avaliações Reais",
    titleNormal: "O que nossas clientes ",
    titleItalic: "compartilham sobre nós",
    list: [
      {
        authorName: "Ana Carolina Mendes",
        authorDetail: "Cliente de Criolipólise",
        text: "A Eduarda é incrível! Fiz a criolipólise e o resultado superou todas as minhas expectativas mais otimistas. Ela foi muito atenciosa, fez um plano alimentar complementar e o ambiente é simplesmente o melhor espaço de estética de Joinville.",
        stars: 5
      },
      {
        authorName: "Fernanda Ribeiro",
        authorDetail: "Mamãe pós-gestação (DiástasePH)",
        text: "Fiz o tratamento de diástase com ela e em algumas semanas senti uma melhora de postura e firmeza incrível. Minha barriga que ficou flácida depois do bebê voltou a ter tônus. Indico com olhos fechados para qualquer mãe!",
        stars: 5
      },
      {
        authorName: "Juliana Silveira",
        authorDetail: "Cliente assídua de Drenagem MAF",
        text: "A drenagem linfática MAF é sensacional! Saio flutuando de leveza da clínica, sem aquele inchaço de cansaço nas pernas. O toque e a massagem da Eduarda têm um rigor científico e técnico diferenciados.",
        stars: 5
      }
    ],
    googleReviewText: "Excelente! Avaliado em 5.0 estrelas com base em avaliações reais de clientes no Google Business",
    googleReviewLink: "https://share.google/kXZrBIqbXfcR7Sf0V"
  },
  faq: {
    eyebrow: "Tire suas dúvidas",
    titleNormal: "Perguntas frequentes e esclarecimentos do consultório",
    list: [
      { q: "A consulta de avaliação inicial é mesmo obrigatória?", a: "Sim. A avaliação clínica detalhada é a base absoluta para a segurança dos procedimentos. Nela, analisamos pregas de gordura, grau de flacidez, mapeamos a diástase por palpação e contraindicações de saúde. O valor cobrado é de R$ 200,00." },
      { q: "Qual o valor de cada protocolo?", a: "A avaliação custa R$ 200,00. A sessão avulsa da Drenagem MAF custa R$ 350,00. Já os tratamentos como Criolipólise e DiástasePH variam de custo conforme o número de áreas, tamanho da diástase e necessidades estéticas, com orçamentos desenvolvidos em consórcio direto com a cliente na avaliação." },
      { q: "Os procedimentos são dolorosos ou invasivos?", a: "Nenhum procedimento realizado é invasivo, todos nossos tratamentos são livres de agulhas, cortes ou anestesia. A criolipolise causa resfriamento e dormência temporária durante o procedimento, a massagem é altamente terapêutica e relaxante, o tratamento da diástase provoca esforços de resistência, sem dor aguda." },
      { q: "Posso retornar às minhas atividades habituais logo em seguida?", a: "Com certeza. Nossos tratamentos não requerem repouso, tempo de afastamento do trabalho ou cuidados pós-operatórios complexos. Você pode treinar, trabalhar e seguir sua rotina normalmente no mesmo dia." },
      { q: "Sou recém-mãe. Quando posso iniciar o DiástasePH?", a: "Normalmente, sugerimos aguardar o período de liberação do seu obstetra para exercícios leves (geralmente cerca de 40 a 60 dias após o parto). É fundamental conversar na avaliação sobre suas condições de amamentação e cicatrização." }
    ]
  },
  cta: {
    eyebrow: "Agende seu momento",
    titleNormal: "Sua jornada rumo a um novo nível de bem-estar corporal começa aqui.",
    description: "Permita-se viver momentos de extremo cuidado em um espaço concebido exclusivamente para realçar sua autoconfiança de forma personalizada e segura.",
    buttonText: "Agendar Minha Consulta pelo WhatsApp",
    whatsappLink: "https://wa.me/message/KO3RCJLC7H2NG1",
    address: "R. Evaristo da Veiga, 156 — 6° andar, Glória, Joinville - SC",
    mapLink: "https://maps.google.com/?q=R.+Evaristo+da+Veiga,+156+Joinville+SC"
  },
  footer: {
    desc: "Unindo ciência corporal, as melhores tecnologias estéticas mundiais e o aconchego de uma clínica Premium para o seu autocuidado absoluto.",
    socialInstagram: "https://www.instagram.com/eduardamassoterapia_/",
    socialWhatsApp: "https://wa.me/message/KO3RCJLC7H2NG1",
    socialMaps: "https://maps.google.com/?q=R.+Evaristo+da+Veiga,+156+Joinville+SC"
  }
};

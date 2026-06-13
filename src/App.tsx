import  { useState, useEffect } from "react";
import { SiteContent } from "./types";
import { defaultSiteContent } from "./data";
import eduardaPortrait from "./assets/images/edwarda_portrait_newv3.jpg";
import experiencia1 from "./assets/images/experiencia_1_newv3.jpg";
import experiencia2 from "./assets/images/experiencia_2_newv3.jpg";
import resultados1 from "./assets/images/resultados_1_newv3.png";
import resultados2 from "./assets/images/resultados_2_newv3.jpg";
import resultados3 from "./assets/images/resultados_3_newv3.png";
import { IconMapper } from "./components/IconMapper";
import { LiveEditor } from "./components/LiveEditor";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Star, 
  Check, 
  ChevronDown, 
  Compass, 
  Edit3 
} from "lucide-react";

export default function App() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("zanluchi_site_content");
      if (saved) {
        const parsed = JSON.parse(saved);
        let updated = false;
        if (parsed?.hero?.subtitle && parsed.hero.subtitle.includes("remodelação corporal — sem cirurgia")) {
          parsed.hero.subtitle = parsed.hero.subtitle.replace("remodelação corporal — sem cirurgia", "remodelação corporal. Sem cirurgia");
          updated = true;
        }
        if (parsed?.hero?.titleItalic === "exculsivo.") {
          parsed.hero.titleItalic = "exclusivo.";
          updated = true;
        }
        if (parsed?.sobre?.tags && (parsed.sobre.tags.length !== 4 || parsed.sobre.tags[1]?.toLowerCase() !== "criolipolise especializada")) {
          parsed.sobre.tags = [
            "Estética corporal avançada",
            "Criolipolise especializada",
            "Recuperação abdominal",
            "Protocolos individualizados"
          ];
          updated = true;
        }
        if (parsed?.beneficios?.list) {
          const vipItem = parsed.beneficios.list.find((item: any) => item.title === "Acompanhamento Vip");
          if (vipItem && vipItem.description !== "Suporte especializado constante, antes e durante seu processo até o retorno.") {
            vipItem.description = "Suporte especializado constante, antes e durante seu processo até o retorno.";
            updated = true;
          }
        }
        if (parsed?.experiencia?.features) {
          const aromaticoItem = parsed.experiencia.features.find((item: any) => item.title.includes("Ambiente Aromático"));
          if (aromaticoItem && !aromaticoItem.description.includes("carta de cafés e chás")) {
            aromaticoItem.description = "Arquitetura refinada, ambiente confortável, luz suave e uma deliciosa carta de cafés e chás para você aproveitar enquanto aguarda o horário.";
            updated = true;
          }
          const biossegurancaItem = parsed.experiencia.features.find((item: any) => item.title.includes("Biossegurança"));
          if (biossegurancaItem && !biossegurancaItem.description.includes("todos os materiais esterilizados")) {
            biossegurancaItem.description = "todos os materiais esterilizados de acordo com as diretrizes médica recomendadas";
            updated = true;
          }
          const resultadosItem = parsed.experiencia.features.find((item: any) => item.title.includes("Acompanhamento de Resultados"));
          if (resultadosItem && resultadosItem.description.includes("Bioimpedância de controle")) {
            resultadosItem.description = "Registros fotográficos, acompanhamento de medidas e suporte no WhatsApp";
            updated = true;
          }
        }
        if (parsed?.antesDepois) {
          if (parsed.antesDepois.titleNormal && parsed.antesDepois.titleNormal.includes("Antes & Depois")) {
            parsed.antesDepois.titleNormal = "Resultados de Sucesso";
            updated = true;
          }
          if (parsed.antesDepois.list && parsed.antesDepois.list.length >= 3) {
            const item1 = parsed.antesDepois.list[0];
            if (item1.tag !== "Redução Abdominal de Sucesso" || !item1.description.includes("Crio Zanluchi")) {
              item1.tag = "Redução Abdominal de Sucesso";
              item1.description = "Eliminação expressiva de gordura abdominal em apenas uma única sessão de Crio Zanluchi";
              item1.beforeLabel = "";
              item1.afterLabel = "";
              updated = true;
            }
            const item2 = parsed.antesDepois.list[1];
            if (item2.tag !== "Recuperação Abdominal" || !item2.description.includes("diástase")) {
              item2.tag = "Recuperação Abdominal";
              item2.description = "Fechamento de diástase abdominal e melhora funcional da postura em 5 semanas";
              item2.beforeLabel = "";
              item2.afterLabel = "";
              updated = true;
            }
            const item3 = parsed.antesDepois.list[2];
            if (item3.tag !== "Alívio e Definição" || !item3.description.includes("inchaço")) {
              item3.tag = "Alívio e Definição";
              item3.description = "Alívio imediato do inchaço e definição do contorno corporal, relaxamento profundo";
              item3.beforeLabel = "";
              item3.afterLabel = "";
              updated = true;
            }
          }
        }
        if (parsed?.protocolos?.list && parsed.protocolos.list.length >= 3) {
          const proto3 = parsed.protocolos.list[2];
          if (proto3.tag !== "Protocolo 3 - massagem 100% manual" || proto3.name !== "MAF - muito além de uma simples drenagem") {
            proto3.tag = "Protocolo 3 - massagem 100% manual";
            proto3.name = "MAF - muito além de uma simples drenagem";
            updated = true;
          }
        }
        if (parsed?.depoimentos) {
          if (parsed.depoimentos.googleReviewLink !== "https://share.google/kXZrBIqbXfcR7Sf0V") {
            parsed.depoimentos.googleReviewLink = "https://share.google/kXZrBIqbXfcR7Sf0V";
            parsed.depoimentos.googleReviewText = "Excelente! Avaliado em 5.0 estrelas com base em avaliações reais de clientes no Google Business";
            updated = true;
          }
        }
        if (parsed?.faq?.list) {
          const faqItem = parsed.faq.list.find((item: any) => item.q && item.q.includes("dolorosos ou invasivos"));
          if (faqItem && !faqItem.a.includes("Nenhum procedimento realizado é invasivo")) {
            faqItem.a = "Nenhum procedimento realizado é invasivo, todos nossos tratamentos são livres de agulhas, cortes ou anestesia. A criolipolise causa resfriamento e dormência temporária durante o procedimento, a massagem é altamente terapêutica e relaxante, o tratamento da diástase provoca esforços de resistência, sem dor aguda.";
            updated = true;
          }
        }
        if (updated) {
          localStorage.setItem("zanluchi_site_content", JSON.stringify(parsed));
        }
        setContent(parsed);
      }
    } catch (e) {
      console.error("Local storage load failed", e);
    }

    // Scroll listener for nav
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save hander
  const handleSaveContent = (newContent: SiteContent) => {
    setContent(newContent);
    try {
      localStorage.setItem("zanluchi_site_content", JSON.stringify(newContent));
    } catch (e) {
      console.error("Local storage save failed", e);
    }
  };

  // Reset handler
  const handleResetContent = () => {
    setContent(defaultSiteContent);
    try {
      localStorage.removeItem("zanluchi_site_content");
    } catch (e) {
      console.error("Local storage reset failed", e);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-stone-50 select-none pb-4 font-sans text-stone-900 selection:bg-rose/30">
      
      {/* ─── NAVIGATION BAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
          isNavScrolled
            ? "bg-stone-50/95 backdrop-blur-md shadow-lg border-b border-rose/10 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent text-white"
        }`}
      >
        <a
          href="#home"
          className={`font-serif text-xl tracking-wider ${
            isNavScrolled ? "text-stone-900" : "text-white"
          }`}
          id="nav-logo"
        >
          {content.header.logoText}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className={`text-xs uppercase tracking-widest hover:text-rose-dark transition-all ${
              isNavScrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            Sobre
          </a>
          <a
            href="#protocolos"
            className={`text-xs uppercase tracking-widest hover:text-rose-dark transition-all ${
              isNavScrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            Protocolos
          </a>
          <a
            href="#beneficios"
            className={`text-xs uppercase tracking-widest hover:text-rose-dark transition-all ${
              isNavScrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            Benefícios
          </a>
          <a
            href="#resultados"
            className={`text-xs uppercase tracking-widest hover:text-rose-dark transition-all ${
              isNavScrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            Resultados
          </a>
          <a
            href="#faq"
            className={`text-xs uppercase tracking-widest hover:text-rose-dark transition-all ${
              isNavScrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            Dúvidas
          </a>
          <a
            href={content.header.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`py-2 px-5 text-xs text-center border uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 ${
              isNavScrolled
                ? "border-rose text-rose-dark hover:bg-rose hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-rose-dark"
            }`}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className={`md:hidden p-1 rounded transition-all ${
            isNavScrolled ? "text-stone-900" : "text-white"
          }`}
          aria-label="Abrir Menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* ─── MOBILE DRAWER MENU ─── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-stone-50 h-full p-6 shadow-2xl flex flex-col justify-between animate-fade-in-right">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-8">
                <span className="font-serif text-lg text-stone-950 tracking-wider">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 hover:bg-stone-200 rounded"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-6 font-serif text-2xl text-stone-850">
                <a
                  href="#sobre"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-rose-dark transition-all"
                >
                  Sobre Mim
                </a>
                <a
                  href="#protocolos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-rose-dark transition-all"
                >
                  Protocolos
                </a>
                <a
                  href="#beneficios"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-rose-dark transition-all"
                >
                  Benefícios Vantajosos
                </a>
                <a
                  href="#resultados"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-rose-dark transition-all"
                >
                  Antes & Depois
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-rose-dark transition-all"
                >
                  Perguntas Frequentes
                </a>
              </div>
            </div>
            <a
              href={content.header.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 text-center bg-rose text-white uppercase text-xs font-sans font-semibold tracking-wider hover:bg-rose-dark rounded transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              <span>Agendar Minha Consulta</span>
            </a>
          </div>
        </div>
      )}

      {/* ─── HERO SECTION ─── */}
      <header id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Color-only background with brand-toned luxury gradient and subtle organic glows */}
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-stone-950 via-[#22181b] to-stone-900">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-rose-dark/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-rose/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-nude/5 rounded-full blur-[80px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24 pb-24 md:pb-20">
          <div className="max-w-2xl text-left space-y-6 md:ml-12">
            <span className="text-stone-300 text-xs font-sans tracking-widest uppercase block animate-pulse">
              {content.hero.eyebrow}
            </span>
            <h1 className="text-white font-serif font-light text-4xl sm:text-5xl md:text-6xl leading-tight">
              {content.hero.titleNormal1}
              <span className="font-serif-italic text-rose">
                {content.hero.titleItalic}
              </span>
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={content.header.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="py-4 px-8 bg-rose text-white text-xs font-sans font-medium uppercase tracking-wider hover:bg-rose-dark rounded transition-all shadow-xl hover:-translate-y-0.5"
              >
                {content.hero.buttonPrimaryText}
              </a>
              <a
                href="#protocolos"
                className="py-4 px-8 border border-white/40 text-white text-xs font-sans font-medium uppercase tracking-wider hover:bg-white/10 rounded transition-all"
              >
                {content.hero.buttonSecondaryText}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-8 border-t border-white/10 max-w-md">
              <div className="flex items-center gap-2 text-stone-400 text-xs">
                <Check size={14} className="text-rose" />
                <span>{content.hero.badge1}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-xs">
                <Check size={14} className="text-rose" />
                <span>{content.hero.badge2}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-xs">
                <Check size={14} className="text-rose" />
                <span>{content.hero.badge3}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll link */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest z-10">
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent scroll-pulse mb-1" />
          <span>Role para baixo</span>
        </div>
      </header>

      {/* ─── SOBRE SECTION ─── */}
      <section id="sobre" className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image with custom layered borders */}
            <div className="lg:col-span-5 relative max-w-sm mx-auto w-full">
              <div className="absolute -top-4 -left-4 w-4/5 h-4/5 border border-rose rounded z-0" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-nude rounded z-0" />
              <img
                src={eduardaPortrait}
                alt="Eduarda Zanluchi"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80";
                }}
                className="relative z-10 w-full aspect-[3/4] object-cover rounded shadow-md"
              />
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-rose text-xs font-sans tracking-widest uppercase block">
                {content.sobre.eyebrow}
              </span>
              <h2 className="text-stone-900 font-serif text-3xl sm:text-4xl leading-tight">
                {content.sobre.titleName}
              </h2>
              <span className="text-rose font-serif-italic text-lg block">
                {content.sobre.subtitle}
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-rose to-transparent mb-6" />

              <div className="space-y-4 text-stone-600 text-sm leading-relaxed max-w-xl">
                {content.sobre.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Stats showcase */}
              <div className="grid grid-cols-3 gap-6 pt-6 pb-4 border-y border-stone-100 max-w-xl">
                {content.sobre.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <span className="font-serif text-3xl sm:text-4xl text-rose-dark font-light block leading-none">
                      {stat.num}
                    </span>
                    <span className="text-[10px] sm:text-xs text-stone-400 font-sans tracking-wide block uppercase mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Specialty tags list */}
              <div className="flex flex-wrap gap-2 !mt-4 max-w-xl">
                {content.sobre.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] text-stone-600 bg-nude border border-rose-dark/20 rounded-full px-3 py-1 font-sans font-medium tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROTOCOLOS SECTION ─── */}
      <section id="protocolos" className="pt-10 pb-16 bg-stone-50 border-t border-stone-200/50">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <span className="text-rose text-xs font-sans tracking-widest uppercase block">
              {content.protocolos.headerEyebrow}
            </span>
            <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
              {content.protocolos.headerTitleNormal}
              <em className="font-serif-italic font-light text-rose block sm:inline-block">
                {content.protocolos.headerTitleItalic}
              </em>
            </h2>
            <div className="w-12 h-[1px] bg-rose mx-auto" />
            <p className="text-stone-500 text-sm max-w-lg mx-auto leading-relaxed">
              {content.protocolos.headerDescription}
            </p>
          </div>

          {/* Protocols List of Big Cards */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {content.protocolos.list.map((proto, idx) => (
              <div
                key={proto.id}
                className="bg-white border border-stone-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Card Top Inner Header */}
                <div className="p-8 bg-gradient-to-br from-nude to-beige/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-rose/10">
                  <div className="space-y-1">
                    <span className="text-[10px] text-rose font-sans font-bold tracking-widest uppercase block">
                      {proto.tag}
                    </span>
                    <h3 className="text-zinc-900 font-serif text-2xl font-normal leading-tight">
                      {proto.name}
                    </h3>
                    <span className="text-xs text-stone-500 font-serif-italic block">
                      {proto.sub}
                    </span>
                  </div>
                  <span className="text-5xl font-serif text-rose/30 font-extralight tracking-tight leading-none h-fit">
                    {proto.id}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6">
                  {/* Detailed Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {proto.description}
                  </p>

                  {/* Metadata Row Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
                    <div>
                      <span className="text-[10px] text-stone-400 font-sans font-bold tracking-wider uppercase block mb-1">
                        Resultado esperado
                      </span>
                      <span className="font-serif text-base text-stone-900 leading-snug block">
                        {proto.expectedResult}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 font-sans font-bold tracking-wider uppercase block mb-1">
                        Duração da sessão
                      </span>
                      <span className="font-serif text-base text-stone-900 leading-snug block">
                        {proto.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 font-sans font-bold tracking-wider uppercase block mb-1">
                        Indicado para
                      </span>
                      <span className="font-serif text-base text-stone-900 leading-snug block">
                        {proto.indicatedFor}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Nested list */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <span className="text-[10px] text-stone-400 font-sans font-bold tracking-wider uppercase block">
                      Vantagens do protocolo
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {proto.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start text-xs sm:text-sm text-stone-650">
                          <span className="w-1.5 h-1.5 bg-rose rounded-full mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra functioning steps if applicable */}
                  {proto.steps && proto.steps.length > 0 && (
                    <div className="pt-6 border-t border-stone-100 space-y-4">
                      <span className="text-[10px] text-stone-400 font-sans font-bold tracking-wider uppercase block">
                        {proto.stepsTitle || "Como funciona"}
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {proto.steps.map((step, sIdx) => (
                          <div key={sIdx} className="p-4 bg-nude/40 rounded border-l-2 border-rose">
                            <span className="font-serif text-xl font-light text-rose/50 block leading-none mb-1">
                              {step.num}
                            </span>
                            <span className="font-sans font-medium text-xs text-stone-900 tracking-wide block mb-1">
                              {step.title}
                            </span>
                            <p className="text-[11px] text-stone-500 leading-snug">
                              {step.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlight banner if applicable */}
                  {proto.highlight && (
                    <div className="p-4 bg-gradient-to-br from-beige to-nude text-xs border border-rose-dark/20 text-stone-750 italic rounded-md flex gap-3 items-start">
                      <Compass size={16} className="text-rose mt-0.5 flex-shrink-0" />
                      <p>{proto.highlight}</p>
                    </div>
                  )}

                  {/* CTA Footer row inside Card */}
                  <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-xs text-stone-400 font-serif-italic max-w-sm">
                      {proto.priceNote}
                    </span>
                    <a
                      href={proto.whatsappLink || content.header.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-6 bg-rose text-white text-[10px] tracking-wider font-sans font-medium uppercase rounded hover:bg-rose-dark transition-all"
                    >
                      {proto.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── BENEFÍCIOS SECTION ─── */}
      <section id="beneficios" className="pt-16 pb-12 bg-gradient-to-br from-stone-950 via-zinc-950 to-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <span className="text-rose text-xs font-sans tracking-widest uppercase block">
              {content.beneficios.eyebrow}
            </span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl leading-tight">
              {content.beneficios.titleNormal}
              <em className="font-serif-italic font-light text-rose">
                {content.beneficios.titleItalic}
              </em>
            </h2>
            <div className="w-12 h-[1px] bg-rose/40 mx-auto" />
            <p className="text-stone-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {content.beneficios.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.beneficios.list.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-lg text-center transition-all duration-300 hover:bg-rose/10 hover:border-rose/30"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-rose mx-auto mb-4">
                  <IconMapper name={item.icon} size={20} />
                </div>
                <h4 className="font-serif text-lg text-stone-50 font-normal mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── EXPERIENCIA SECTION ─── */}
      <section className="pt-10 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Split Grid for text & specs column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-rose text-xs font-sans tracking-widest uppercase block">
                {content.experiencia.eyebrow}
              </span>
              <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
                {content.experiencia.titleNormal}
                <span className="font-serif-italic text-rose block">
                  {content.experiencia.titleItalic}
                </span>
              </h2>
              <div className="w-12 h-[1px] bg-rose-dark/20" />
              <p className="text-stone-500 text-sm leading-relaxed">
                {content.experiencia.description}
              </p>

              {/* Action features column block */}
              <div className="space-y-4 pt-4">
                {content.experiencia.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 hover:bg-stone-50 rounded-lg transition-all">
                    <div className="w-10 h-10 bg-nude text-rose rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconMapper name={feat.icon} size={18} />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-sans font-semibold text-xs sm:text-sm text-stone-900 tracking-wide uppercase">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 leading-normal">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined 2-image Gallery representation */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src={experiencia1}
                  alt="Espaço Clínico Zanluchi"
                  className="w-full aspect-[3/4] object-cover rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="pt-12">
                <img
                  src={experiencia2}
                  alt="Ambiente Exclusivo"
                  className="w-full aspect-[3/4] object-cover rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ANTES E DEPOIS SECTION ─── */}
      <section id="resultados" className="pt-10 pb-12 bg-nude">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <span className="text-rose text-xs font-sans tracking-widest uppercase block">
              {content.antesDepois.eyebrow}
            </span>
            <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
              {content.antesDepois.titleNormal}
            </h2>
            <div className="w-12 h-[1px] bg-rose-dark/40 mx-auto" />
            <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {content.antesDepois.description}
            </p>
          </div>

          {/* Cards Image with description tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {content.antesDepois.list.map((item, idx) => (
              <div key={idx} className="bg-white border border-rose-dark/20 rounded overflow-hidden shadow transition-all hover:translate-y-[-4px] hover:shadow-xl">
                <div className="aspect-square relative bg-stone-100 overflow-hidden">
                  <img 
                    src={idx === 0 ? resultados1 : idx === 1 ? resultados2 : resultados3}
                    alt={item.tag}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {(item.beforeLabel || item.afterLabel) && (
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between pointer-events-none z-10">
                      {item.beforeLabel && (
                        <span className="bg-stone-900/60 text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.beforeLabel}
                        </span>
                      )}
                      {item.afterLabel && (
                        <span className="bg-rose-dark text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.afterLabel}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-1">
                  <span className="text-[10px] text-rose font-bold block uppercase tracking-wider">{item.tag}</span>
                  <p className="text-xs text-stone-500 leading-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={content.footer.socialInstagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-rose-dark hover:text-stone-900 border-b border-rose-dark/40 pb-0.5 text-xs font-sans font-medium uppercase tracking-wider transition-all"
            >
              <span>Ver mais resultados no Instagram</span>
              <ExternalLink size={12} />
            </a>
          </div>

        </div>
      </section>

      {/* ─── DEPOIMENTOS SECTION ─── */}
      <section className="pt-10 pb-12 bg-stone-50/50 border-t border-b border-stone-200/50">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-8">
            <span className="text-rose text-xs font-sans tracking-widest uppercase block">
              {content.depoimentos.eyebrow}
            </span>
            <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
              {content.depoimentos.titleNormal}
              <span className="font-serif-italic text-rose">
                {content.depoimentos.titleItalic}
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-rose-dark/30 mx-auto" />
          </div>

          {/* Clean Authentic Google Review Centerpiece */}
          <div className="max-w-xl mx-auto bg-white border border-stone-200/80 rounded-xl p-8 shadow-sm text-center space-y-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-10 h-10"
              >
                <path 
                  fill="#4285F4" 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path 
                  fill="#34A853" 
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path 
                  fill="#FBBC05" 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                />
                <path 
                  fill="#EA4335" 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">Avaliações do Google</span>
            </div>

            <div className="flex justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, sIdx) => (
                <Star key={sIdx} size={20} fill="currentColor" className="stroke-none" />
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-stone-850 font-serif text-lg leading-snug">
                Qualidade Certificada por Clientes Reais
              </p>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-sm mx-auto">
                Prezamos pela máxima transparência. Convidamos você a conferir relatos individuais espontâneos e avaliações autênticas registradas diretamente em nossa página do Google Business.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={content.depoimentos.googleReviewLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 border border-stone-900 hover:bg-stone-850 text-white hover:text-white px-6 py-3 rounded text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 shadow-md hover:translate-y-[-2px]"
              >
                <span>Acessar Avaliações no Google</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section id="faq" className="pt-10 pb-12 bg-stone-50 border-t border-stone-150">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <span className="text-rose text-xs font-sans tracking-widest uppercase block">
              {content.faq.eyebrow}
            </span>
            <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
              {content.faq.titleNormal}
            </h2>
            <div className="w-12 h-[1px] bg-rose-dark/30 mx-auto" />
          </div>

          {/* Accordion Questions */}
          <div className="max-w-3xl mx-auto space-y-3">
            {content.faq.list.map((item, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-stone-200 bg-white rounded shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-4 px-6 flex justify-between items-center gap-4 hover:bg-stone-50 transition-all outline-none"
                    aria-label={`Toggle FAQ #${idx + 1}`}
                  >
                    <span className="font-serif text-sm sm:text-base text-stone-900 font-normal">
                      {item.q}
                    </span>
                    <span className={`p-1 bg-nude text-rose rounded-full transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── CTA FINAL SECTION ─── */}
      <section id="cta-final" className="py-24 bg-gradient-to-br from-nude via-beige to-rose/30 text-center relative overflow-hidden">
        {/* Subtle watermarked backdrop monogram representing exclusive aesthetics */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] text-rose-dark/5 pointer-events-none select-none select-none font-light leading-none">
          EZ
        </span>

        <div className="container mx-auto px-6 max-w-2xl relative z-10 space-y-6">
          <span className="text-rose-dark text-xs font-sans tracking-widest uppercase block">
            {content.cta.eyebrow}
          </span>
          <h2 className="text-stone-950 font-serif text-3xl sm:text-4xl leading-tight">
            {content.cta.titleNormal}
          </h2>
          <div className="w-12 h-[1px] bg-rose-dark/30 mx-auto" />
          <p className="text-stone-600 text-sm leading-relaxed max-w-lg mx-auto">
            {content.cta.description}
          </p>

          <div className="pt-4">
            <a
              href={content.cta.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex py-4 px-8 bg-rose text-white text-xs font-sans font-medium uppercase tracking-widest rounded transition-all hover:bg-rose-dark hover:-translate-y-0.5 shadow-xl hover:shadow-2xl"
            >
              {content.cta.buttonText}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-6 text-xs text-stone-500 font-sans tracking-wide">
            <MapPin size={14} className="text-rose flex-shrink-0" />
            <span>
              {content.cta.address} ·{" "}
              <a 
                href={content.cta.mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-rose-dark hover:underline font-medium"
              >
                Traçar Rota no Maps
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Brand column */}
            <div className="md:col-span-6 space-y-4">
              <span className="font-serif text-white text-xl tracking-wider block">
                {content.header.logoText}
              </span>
              <span className="text-[10px] text-rose font-bold block uppercase tracking-widest">
                Estética Corporal & Massoterapia
              </span>
              <p className="text-xs text-stone-500 max-w-sm leading-relaxed">
                {content.footer.desc}
              </p>

              {/* Social Link widgets */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={content.footer.socialInstagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 hover:bg-rose hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <IconMapper name="Instagram" size={16} />
                </a>
                <a
                  href={content.footer.socialWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 hover:bg-rose hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <IconMapper name="Phone" size={16} />
                </a>
                <a
                  href={content.footer.socialMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 hover:bg-rose hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Endereço"
                >
                  <IconMapper name="MapPin" size={16} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] text-rose font-bold block uppercase tracking-widest">
                Sessões e Pacotes
              </span>
              <ul className="space-y-2 text-xs font-sans text-stone-400">
                <li>
                  <a href="#protocolos" className="hover:text-white transition-all">Criolipólise Método Zanluchi</a>
                </li>
                <li>
                  <a href="#protocolos" className="hover:text-white transition-all">DiástasePH</a>
                </li>
                <li>
                  <a href="#protocolos" className="hover:text-white transition-all">Drenagem MAF</a>
                </li>
                <li>
                  <a href={content.header.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition-all">Consulta de Avaliação</a>
                </li>
              </ul>
            </div>

            {/* Location details */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] text-rose font-bold block uppercase tracking-widest">
                Encontre o Consultório
              </span>
              <address className="space-y-1 block text-xs not-italic text-stone-500 leading-normal">
                <p className="text-stone-300">Joinville · SC · Brasil</p>
                <p>Glória — R. Evaristo da Veiga, 156</p>
                <p>6° andar — Sala Comercial</p>
                <p className="pt-2 text-[10px] font-sans text-rose uppercase tracking-wider">Atendimento sob agenda prévia</p>
              </address>
            </div>

          </div>

          {/* Legal copyrights */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-wide text-stone-600">
            <p>© 2025 {content.header.logoText} — Estética Premium. Todos os direitos reservados no âmbito nacional.</p>
            <p>Joinville · Santa Catarina</p>
          </div>
        </div>
      </footer>

      {/* ─── WHATSAPP FLOATING BADGE ─── */}
      <a
        href={content.header.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 wa-pulse"
        aria-label="Abrir WhatsApp oficial da clínica"
      >
        <IconMapper name="Phone" size={24} />
      </a>

      {/* ─── LIVE EDITOR MODE CONTROL TRIGGER ─── */}
      <button
        onClick={() => setIsEditorOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-zinc-900 border border-zinc-700/50 hover:bg-zinc-800 text-white rounded-full px-5 py-3 shadow-2xl hover:-translate-y-0.5 transition-all text-xs font-sans font-medium uppercase tracking-wider flex items-center gap-2"
        title="Modo de Edição"
      >
        <Edit3 size={14} className="text-rose animate-spin-slow" />
        <span>Editar Textos do Site</span>
      </button>

      {/* ─── LIVE EDITOR INSTANCE MODAL ─── */}
      {isEditorOpen && (
        <LiveEditor
          content={content}
          onSave={handleSaveContent}
          onReset={handleResetContent}
          onClose={() => setIsEditorOpen(false)}
        />
      )}

    </div>
  );
}

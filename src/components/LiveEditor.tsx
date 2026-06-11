import React, { useState } from "react";
import { SiteContent, Protocol, Benefit, Testimonial, FaqItem, Stat } from "../types";
import { Save, RefreshCw, X, Edit3, Smartphone, ExternalLink, Info, Check, Plus, Trash2 } from "lucide-react";

interface LiveEditorProps {
  content: SiteContent;
  onSave: (newContent: SiteContent) => void;
  onReset: () => void;
  onClose: () => void;
}

type TabType = "hero" | "sobre" | "protocolos" | "depoimentos_faq" | "extras";

export const LiveEditor: React.FC<LiveEditorProps> = ({ content, onSave, onReset, onClose }) => {
  const [edited, setEdited] = useState<SiteContent>(JSON.parse(JSON.stringify(content)));
  const [activeTab, setActiveTab] = useState<TabType>("hero");
  const [selectedProtocolIndex, setSelectedProtocolIndex] = useState<number>(0);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleChange = (section: keyof SiteContent, key: string, value: any) => {
    setEdited((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleNestedStateChange = (section: keyof SiteContent, nestedKey: string, index: number, field: string, value: any) => {
    setEdited((prev) => {
      const sectionData = { ...prev[section] } as any;
      const arrayData = [...sectionData[nestedKey]];
      arrayData[index] = {
        ...arrayData[index],
        [field]: value,
      };
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [nestedKey]: arrayData,
        },
      };
    });
  };

  const handleProtocolBenefitChange = (protoIndex: number, benefitIndex: number, value: string) => {
    setEdited((prev) => {
      const protocols = [...prev.protocolos.list];
      const benefits = [...protocols[protoIndex].benefits];
      benefits[benefitIndex] = value;
      protocols[protoIndex] = {
        ...protocols[protoIndex],
        benefits,
      };
      return {
        ...prev,
        protocolos: {
          ...prev.protocolos,
          list: protocols,
        },
      };
    });
  };

  const addProtocolBenefit = (protoIndex: number) => {
    setEdited((prev) => {
      const protocols = [...prev.protocolos.list];
      const benefits = [...protocols[protoIndex].benefits, "Novo benefício"];
      protocols[protoIndex] = {
        ...protocols[protoIndex],
        benefits,
      };
      return {
        ...prev,
        protocolos: {
          ...prev.protocolos,
          list: protocols,
        },
      };
    });
  };

  const removeProtocolBenefit = (protoIndex: number, benefitIndex: number) => {
    setEdited((prev) => {
      const protocols = [...prev.protocolos.list];
      const benefits = protocols[protoIndex].benefits.filter((_, idx) => idx !== benefitIndex);
      protocols[protoIndex] = {
        ...protocols[protoIndex],
        benefits,
      };
      return {
        ...prev,
        protocolos: {
          ...prev.protocolos,
          list: protocols,
        },
      };
    });
  };

  const handleSave = () => {
    onSave(edited);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white text-zinc-800 shadow-2xl flex flex-col border-l border-zinc-200">
      {/* Toast Alert */}
      {showSavedToast && (
        <div className="fixed top-4 right-4 bg-zinc-900 text-white px-4 py-3 rounded-md shadow-xl flex items-center gap-2 z-50 animate-bounce">
          <Check size={18} className="text-emerald-400" />
          <span>Alterações gravadas com sucesso no navegador!</span>
        </div>
      )}

      {/* Header */}
      <div className="p-4 bg-zinc-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Edit3 size={20} className="text-rose" />
          <h3 className="font-sans font-medium text-lg tracking-wide uppercase">Editor Live - Clínica Zanluchi</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-zinc-800 rounded transition-all text-zinc-400 hover:text-white"
          title="Fechar Editor"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tabs Menu */}
      <div className="flex bg-zinc-100 border-b border-zinc-200 overflow-x-auto">
        {(["hero", "sobre", "protocolos", "depoimentos_faq", "extras"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-xs font-sans font-medium uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab
                ? "border-rose text-rose-dark bg-white font-semibold"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {tab === "hero" && "Hero & Início"}
            {tab === "sobre" && "Sobre Mim"}
            {tab === "protocolos" && "Protocolos"}
            {tab === "depoimentos_faq" && "Depoimentos & FAQ"}
            {tab === "extras" && "Extras & Contacto"}
          </button>
        ))}
      </div>

      {/* Form Content Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div className="p-3 bg-rose/10 border border-rose/30 rounded text-xs text-rose-dark flex gap-2 items-start mb-4">
          <Info size={16} className="mt-0.5" />
          <p>Instruções: Você pode editar qualquer texto abaixo. Os resultados são visíveis instantaneamente na página ao fundo. Lembre de clicar em "Salvar" no canto inferior.</p>
        </div>

        {/* HERO TAB */}
        {activeTab === "hero" && (
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 uppercase tracking-wider">Configuração de Entrada (Hero)</h4>
            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Nome da Marca (Header Logo)</label>
              <input
                type="text"
                value={edited.header.logoText}
                onChange={(e) => handleChange("header", "logoText", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Link do WhatsApp Oficial (Todas as chamadas)</label>
              <input
                type="text"
                value={edited.header.whatsappLink}
                onChange={(e) => handleChange("header", "whatsappLink", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none text-blue-600 font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1">Subtítulo do Topo (Eyebrow)</label>
                <input
                  type="text"
                  value={edited.hero.eyebrow}
                  onChange={(e) => handleChange("hero", "eyebrow", e.target.value)}
                  className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1">Texto Destaque Itálico</label>
                <input
                  type="text"
                  value={edited.hero.titleItalic}
                  onChange={(e) => handleChange("hero", "titleItalic", e.target.value)}
                  className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none font-serif-italic"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Título Inicial da Página (Antes do Itálico instalado)</label>
              <input
                type="text"
                value={edited.hero.titleNormal1}
                onChange={(e) => handleChange("hero", "titleNormal1", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Descrição de boas-vindas</label>
              <textarea
                value={edited.hero.subtitle}
                onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
                rows={3}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1">Botão Principal</label>
                <input
                  type="text"
                  value={edited.hero.buttonPrimaryText}
                  onChange={(e) => handleChange("hero", "buttonPrimaryText", e.target.value)}
                  className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 font-medium mb-1">Botão Secundário</label>
                <input
                  type="text"
                  value={edited.hero.buttonSecondaryText}
                  onChange={(e) => handleChange("hero", "buttonSecondaryText", e.target.value)}
                  className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs text-zinc-500 font-medium">Badges Pró-Serviço</label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  value={edited.hero.badge1}
                  onChange={(e) => handleChange("hero", "badge1", e.target.value)}
                  className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
                <input
                  type="text"
                  value={edited.hero.badge2}
                  onChange={(e) => handleChange("hero", "badge2", e.target.value)}
                  className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
                <input
                  type="text"
                  value={edited.hero.badge3}
                  onChange={(e) => handleChange("hero", "badge3", e.target.value)}
                  className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* SOBRE TAB */}
        {activeTab === "sobre" && (
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 uppercase tracking-wider">Apresentação Pessoal (Sobre)</h4>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Título de Seção (Eyebrow)</label>
              <input
                type="text"
                value={edited.sobre.eyebrow}
                onChange={(e) => handleChange("sobre", "eyebrow", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Nome e Sobrenome</label>
              <input
                type="text"
                value={edited.sobre.titleName}
                onChange={(e) => handleChange("sobre", "titleName", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Subtítulo ou Slogan de Experiência</label>
              <input
                type="text"
                value={edited.sobre.subtitle}
                onChange={(e) => handleChange("sobre", "subtitle", e.target.value)}
                className="w-full text-sm border border-rose focus:ring-1 focus:ring-rose rounded p-2 outline-none font-serif-italic"
              />
            </div>

            {edited.sobre.paragraphs.map((para, index) => (
              <div key={index}>
                <label className="block text-xs text-zinc-500 font-medium mb-1">Parágrafo de Apresentação #{index + 1}</label>
                <textarea
                  value={para}
                  onChange={(e) => {
                    const paras = [...edited.sobre.paragraphs];
                    paras[index] = e.target.value;
                    handleChange("sobre", "paragraphs", paras);
                  }}
                  rows={3}
                  className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose focus:ring-1 focus:ring-rose outline-none"
                />
              </div>
            ))}

            <h5 className="text-xs font-semibold text-zinc-700 uppercase tracking-widest mt-6">Estatísticas Rápidas</h5>
            <div className="space-y-3">
              {edited.sobre.stats.map((stat, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 items-center">
                  <div className="col-span-1">
                    <input
                      type="text"
                      value={stat.num}
                      onChange={(e) => handleNestedStateChange("sobre", "stats", index, "num", e.target.value)}
                      placeholder="8+"
                      className="w-full text-sm border border-zinc-300 rounded p-2 font-serif text-rose-dark text-center focus:border-rose outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => handleNestedStateChange("sobre", "stats", index, "label", e.target.value)}
                      placeholder="Anos de experiência"
                      className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-xs text-zinc-500 font-medium mb-1">Tags de Especialidades (Separe por vírgulas para remontar)</label>
              <textarea
                value={edited.sobre.tags.join(", ")}
                onChange={(e) => {
                  const arr = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                  handleChange("sobre", "tags", arr);
                }}
                rows={2}
                className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose outline-none"
              />
            </div>
          </div>
        )}

        {/* PROTOCOLO TAB */}
        {activeTab === "protocolos" && (
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 uppercase tracking-wider">Protocolos e Práticas de Atendimento</h4>

            <div className="flex gap-1 bg-zinc-100 p-1 rounded mb-4">
              {edited.protocolos.list.map((proto, idx) => (
                <button
                  key={proto.id}
                  onClick={() => setSelectedProtocolIndex(idx)}
                  className={`flex-1 py-1.5 px-2 text-[10px] uppercase font-sans tracking-tight font-medium rounded transition-all ${
                    selectedProtocolIndex === idx ? "bg-white text-rose-dark shadow-sm font-semibold" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {proto.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Protocol Editor Form */}
            {(() => {
              const proto = edited.protocolos.list[selectedProtocolIndex];
              if (!proto) return null;
              return (
                <div className="space-y-4 p-4 border border-zinc-200 bg-zinc-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-rose-dark font-sans font-semibold uppercase bg-rose/10 px-2 py-0.5 rounded">{proto.tag}</span>
                    <span className="text-xs text-zinc-400 font-mono">ID {proto.id}</span>
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Nome Oficial da Técnica</label>
                    <input
                      type="text"
                      value={proto.name}
                      onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "name", e.target.value)}
                      className="w-full text-sm border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Subtítulo Técnico</label>
                    <input
                      type="text"
                      value={proto.sub}
                      onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "sub", e.target.value)}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Descrição Abrangente do Protocolo</label>
                    <textarea
                      value={proto.description}
                      onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "description", e.target.value)}
                      rows={4}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Resultado Esperado</label>
                      <input
                        type="text"
                        value={proto.expectedResult}
                        onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "expectedResult", e.target.value)}
                        className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Duração / Sessões</label>
                      <input
                        type="text"
                        value={proto.duration}
                        onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "duration", e.target.value)}
                        className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Indicações e Contraindicações</label>
                    <input
                      type="text"
                      value={proto.indicatedFor}
                      onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "indicatedFor", e.target.value)}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Anotações de Preço / Valores</label>
                    <input
                      type="text"
                      value={proto.priceNote}
                      onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "priceNote", e.target.value)}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                    />
                  </div>

                  {proto.highlight !== undefined && (
                    <div>
                      <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Balão de Destaque Exclusivo</label>
                      <textarea
                        value={proto.highlight}
                        onChange={(e) => handleNestedStateChange("protocolos", "list", selectedProtocolIndex, "highlight", e.target.value)}
                        rows={2}
                        className="w-full text-xs border border-zinc-300 bg-white rounded p-2 focus:border-rose outline-none"
                      />
                    </div>
                  )}

                  {/* Benefits Under Protocol */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-[10px] text-zinc-400 uppercase font-semibold">Tópicos e Vantagens</label>
                      <button
                        type="button"
                        onClick={() => addProtocolBenefit(selectedProtocolIndex)}
                        className="text-[9px] text-rose-dark hover:text-rose font-sans font-bold uppercase flex items-center gap-1"
                      >
                        <Plus size={10} /> Adicionar
                      </button>
                    </div>
                    <div className="space-y-1.5">
                      {proto.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex gap-1.5 items-center">
                          <input
                            type="text"
                            value={benefit}
                            onChange={(e) => handleProtocolBenefitChange(selectedProtocolIndex, bIdx, e.target.value)}
                            className="flex-1 text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none focus:border-rose"
                          />
                          <button
                            type="button"
                            onClick={() => removeProtocolBenefit(selectedProtocolIndex, bIdx)}
                            className="text-zinc-400 hover:text-red-500 p-1.5"
                            title="Remover vantagem"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TESTIMONIALS & FAQ TAB */}
        {activeTab === "depoimentos_faq" && (
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 uppercase tracking-wider">Depoimentos de Clientes</h4>
            <div className="space-y-4">
              {edited.depoimentos.list.map((dep, idx) => (
                <div key={idx} className="p-3 border border-zinc-200 bg-zinc-50 rounded space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9px] text-zinc-400 uppercase font-semibold">Nome da Cliente</label>
                      <input
                        type="text"
                        value={dep.authorName}
                        onChange={(e) => handleNestedStateChange("depoimentos", "list", idx, "authorName", e.target.value)}
                        className="w-full text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-zinc-400 uppercase font-semibold">Tratamento realizado</label>
                      <input
                        type="text"
                        value={dep.authorDetail}
                        onChange={(e) => handleNestedStateChange("depoimentos", "list", idx, "authorDetail", e.target.value)}
                        className="w-full text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] text-zinc-400 uppercase font-semibold">Avaliação / Texto</label>
                    <textarea
                      value={dep.text}
                      onChange={(e) => handleNestedStateChange("depoimentos", "list", idx, "text", e.target.value)}
                      rows={3}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 pt-4 uppercase tracking-wider">Perguntas Frequentes (FAQ)</h4>
            <div className="space-y-4">
              {edited.faq.list.map((item, idx) => (
                <div key={idx} className="p-3 border border-zinc-200 bg-zinc-50 rounded space-y-2">
                  <div>
                    <label className="block text-[9px] text-zinc-400 uppercase font-semibold">Pergunta</label>
                    <input
                      type="text"
                      value={item.q}
                      onChange={(e) => handleNestedStateChange("faq", "list", idx, "q", e.target.value)}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-zinc-400 uppercase font-semibold">Resposta</label>
                    <textarea
                      value={item.a}
                      onChange={(e) => handleNestedStateChange("faq", "list", idx, "a", e.target.value)}
                      rows={3}
                      className="w-full text-xs border border-zinc-300 bg-white rounded p-1.5 outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXTRAS TAB */}
        {activeTab === "extras" && (
          <div className="space-y-4">
            <h4 className="text-sm font-sans font-semibold text-zinc-900 border-b pb-2 uppercase tracking-wider">Contacto & Endereço Final</h4>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Título de Chamada (CTA)</label>
              <textarea
                value={edited.cta.titleNormal}
                onChange={(e) => handleChange("cta", "titleNormal", e.target.value)}
                rows={2}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Endereço Físico (Exibido no botão e mapas)</label>
              <input
                type="text"
                value={edited.cta.address}
                onChange={(e) => handleChange("cta", "address", e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded p-2 focus:border-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Link do Google Maps Direto</label>
              <input
                type="text"
                value={edited.cta.mapLink}
                onChange={(e) => handleChange("cta", "mapLink", e.target.value)}
                className="w-full text-xs border border-zinc-300 rounded p-2 font-mono text-zinc-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Texto Institucional do Rodapé</label>
              <textarea
                value={edited.footer.desc}
                onChange={(e) => handleChange("footer", "desc", e.target.value)}
                rows={3}
                className="w-full text-xs border border-zinc-300 rounded p-2 focus:border-rose outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 font-medium mb-1">Perfis de Redes — Instagram oficial</label>
              <input
                type="text"
                value={edited.footer.socialInstagram}
                onChange={(e) => handleChange("footer", "socialInstagram", e.target.value)}
                className="w-full text-xs border border-zinc-300 rounded p-2 font-mono text-zinc-600 outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Editor Action Buttons Footer */}
      <div className="p-4 bg-zinc-100 border-t border-zinc-200 flex gap-3">
        <button
          onClick={handleSave}
          className="flex-1 py-3 px-4 bg-zinc-900 text-white hover:bg-rose-dark hover:border-rose-dark transition-all rounded font-sans font-medium uppercase text-xs tracking-wider flex items-center justify-center gap-2"
        >
          <Save size={16} />
          <span>Salvar Alterações</span>
        </button>

        <button
          onClick={() => {
            if (confirm("Deseja realmente voltar aos textos padrão originais sugeridos?")) {
              onReset();
            }
          }}
          className="py-3 px-4 bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-800 hover:border-zinc-400 transition-all rounded text-xs"
          title="Resetar Padrão"
        >
          <RefreshCw size={14} />
        </button>
      </div>
    </div>
  );
};

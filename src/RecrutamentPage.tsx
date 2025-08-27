import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecrutamentPage() {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen w-full text-gray-200 flex flex-col">
            <header className="relative py-10 flex flex-col items-center bg-black/30 border-b border-gray-700 overflow-hidden min-h-[180px] md:min-h-[300px] justify-center">
                {/* Botão de voltar */}
                <button
                    className="absolute right-5 md:right-8 top-4 md:top-8 flex items-center gap-2 bg-[#1a1333]/5 hover:bg-[#732CFF]/20 text-white px-4 py-2 rounded-lg shadow transition z-20"
                    onClick={() => navigate("/")}
                >
                    <ArrowLeft size={22} />
                    <span className="hidden md:inline">Voltar</span>
                </button>
                {/* Imagem de fundo com efeito parallax */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: 'url(/assets/bg-main-001.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -2
                    }}
                />
                <div className="absolute inset-0 z-[-1]" />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Recrutamento</h1>
                    <nav className="text-gray-300 text-lg">
                        Início / <span className="text-white font-semibold">Recrutamento</span>
                    </nav>
                </div>
            </header>

            <main className="flex flex-col md:flex-row gap-10 md:px-40 py-20 bg-gradient-to-r from-[#1a1333] via-[#732CFF] to-[#1a1333] mt-auto">
                {/* Formulário de Recrutamento */}
                <section className="p-8 rounded-lg flex-1 mb-8 md:mb-0 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-white">Candidate-se à nossa equipa</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="O seu nome completo..."
                            className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
                        />
                        <input
                            type="email"
                            placeholder="O seu email..."
                            className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
                        />
                        <select
                            className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Selecione o cargo pretendido...
                            </option>
                            <option>Assistente Administrativo</option>
                            <option>Analista Financeiro</option>
                            <option>Gestor de Projetos</option>
                            <option>Consultor de Negócios</option>
                            <option>Desenvolvedor Web</option>
                            <option>Designer Gráfico</option>
                            <option>Especialista em Marketing Digital</option>
                            <option>Gestor de Recursos Humanos</option>
                            <option>Contabilista</option>
                            <option>Engenheiro de Software</option>
                            <option>Analista de Dados</option>
                            <option>Gestor Comercial</option>
                            <option>Assistente de Comunicação</option>
                            <option>Coordenador de Operações</option>
                            <option>Especialista em TI</option>
                            <option>Gestor de Produto</option>
                            <option>Analista de Sistemas</option>
                            <option>Consultor de Vendas</option>
                            <option>Gestor de Marketing</option>
                            <option>Técnico de Suporte</option>
                            <option>Gestor de Logística</option>
                            <option>Analista de Processos</option>
                            <option>Gestor de Qualidade</option>
                            <option>Especialista em Redes</option>
                            <option>Gestor de Eventos</option>
                            <option>Assistente de Direção</option>
                            <option>Gestor de Clientes</option>
                            <option>Analista de Investimentos</option>
                            <option>Gestor de Formação</option>
                            <option>Especialista em Segurança Informática</option>
                        </select>
                        <textarea
                            placeholder="Fale-nos sobre a sua experiência e motivação..."
                            rows={4}
                            className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
                        />
                        <input
                            type="file"
                            className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-3 py-2 text-gray-200 file:text-gray-200 file:bg-[#732CFF] file:rounded-2xl file:p-2 file:border-none"
                            accept=".pdf,.doc,.docx"
                        />
                        <button
                            type="submit"
                            className="border border-[#732CFF] text-white py-3 rounded-md font-semibold bg-[#732CFF] hover:bg-white hover:text-[#732CFF] transition duration-300"
                        >
                            Enviar candidatura
                        </button>
                    </form>
                </section>

                {/* Informações de Recrutamento */}
                <section className="flex-1 rounded-lg px-8 py-4 md:p-8 shadow-lg">
                    <p className="mb-6 text-gray-300">
                        Procuramos talentos que queiram crescer connosco. Se tem vontade de aprender, espírito de equipa e paixão por inovação, envie-nos a sua candidatura. Valorizamos diversidade, dedicação e criatividade.
                    </p>
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">Email para recrutamento:</span>
                            <span className="text-gray-200">recrutamento@bpa.com</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">Telefone:</span>
                            <span className="text-gray-200">+244 934 001 880</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">Morada:</span>
                            <span className="text-gray-200">Angola, Benfica, Dona Xepa</span>
                        </div>
                    </div>
                </section>
            </main>

            {/* Rodapé */}
            <footer className="bg-gradient-to-r from-[#1a1333] via-[#732CFF] to-[#1a1333] py-8 px-8 mt-auto">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
                    <div className="mb-4 md:mb-0 flex flex-col items-center text-center">
                        <img
                            src="/assets/logo-main.png"
                            alt="Logo"
                            className="w-42 mb-2"
                        />
                        <p className="text-gray-200 text-xs">
                            Copyright © 2025 BPA GROUP | Desenvolvido por BPA GROUP
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    )
}
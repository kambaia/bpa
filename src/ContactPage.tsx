import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react"; // ou outro ícone de seta que preferir
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  if (!coords) return <p>Carregando mapa...</p>;

  const src = `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`;
  return (
    <div className="min-h-screen w-[100%] text-gray-200 flex flex-col">

      <header className="relative py-10 flex md:flex-col items-center bg-black/30 border-b border-gray-700 overflow-hidden min-h-[160px] md:min-h-[300px] justify-center">
        {/* Botão de voltar */}
        <button
          className="absolute right-5 md:right-8 top-4 md:top-8 cursor-pointer flex items-center gap-2 bg-[#1a1333]/5 hover:bg-[#732CFF]/20 text-white px-4 py-2 rounded-lg shadow transition z-20"
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
            backgroundImage: 'url(/assets/bg-main-004.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
          }}
        />

        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 z-[-1]" />

        {/* Conteúdo do header */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">Contactos</h1>
          <nav className="text-gray-300 text-lg">
            Início / <span className="text-white font-semibold">Contactos</span>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex flex-col md:flex-row gap-10 md:px-40 md:py-20 bg-gradient-to-r from-[#1a1333] via-[#732CFF] to-[#1a1333] mt-auto">
        {/* Formulário de Contacto */}
        <section className=" p-8 rounded-lg flex-1 mb-2 md:mb-0 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">Fale Connosco</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="O seu nome..."
              className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="exemplo@oseuemail.com"
              className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Assunto..."
              className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
            />
            <textarea
              placeholder="Escreva a sua mensagem aqui..."
              rows={4}
              className="bg-[#2a1a4d]/80 border border-[#732CFF] rounded px-4 py-2 text-gray-200 focus:border-white focus:outline-none transition"
            />
            <button
              type="submit"
              className="border border-[#732CFF] text-white py-3 rounded-md font-semibold bg-[#732CFF] hover:bg-white hover:text-[#732CFF] transition duration-300"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* Informações de Contacto */}
        <section className="flex-1 rounded-lg p-6 md:p-8 shadow-lg">
          <p className="md:mb-6  text-gray-300">
            Em tempos de mudança, estamos sempre prontos para ajudar. Entre em contacto connosco para esclarecer dúvidas, pedir informações ou agendar uma reunião. A nossa equipa está disponível para o apoiar.
          </p>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold ">Telefone:</span>
              <span className="text-gray-200">+244 934 001 880/+244 922 858 762/+244 944 969 865</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold ">Email:</span>
              <span className="text-gray-200">geral@bpa.com</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold ">Whatsapp:</span>
              <span className="text-gray-200">+244 934 001 880</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold ">Morada:</span>
              <span className="text-gray-200">Angola, Benfica, Dona Xepa</span>
            </div>
          </div>
          <iframe
            title="mapa"
            src={src}
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-[#1a1333] via-[#732CFF] to-[#1a1333] py-8 px-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto">
          <div className="mb-4 md:mb-0 flex flex-col items-center text-center">
            <img
              src="/assets/logo-main.png"
              alt="Logo"
              className="w-42 mb-2"
            />
            <p className="text-gray-200 text-xs">
              Desenvolvido por <span className="font-bold">BPA GROUP ®</span> – Todos os direitos reservados
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
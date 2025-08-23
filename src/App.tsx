import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { CompanyModal } from "./components/CompanyModal";
const company = {
  name: "SENDYS Consulting",
  logo: "/assets/1.png",
  image: "/assets/bg-main-001.jpg",
  website: "https://sendysgroup.com",
  slogan: "SERVIMOS PESSOAS, MUDAMOS NEGÓCIOS.",
  description:
    <>
      <p>A <span className="text-[#732CFF]">OMNIBOX STORE</span> dedica-se ao desenvolvimento, manutenção, comercialização e suporte de soluções de gestão para pequenas, médias e grandes empresas, mantendo a aposta no apoio direto ao cliente.</p>,
      <p>Somos produtores do ERP BPA e os serviços que oferecemos englobam temas estratégicos, organizacionais, operacionais e sistemas de informação permitindo ajudar os nossos clientes desde a concepção estratégica até à implementação e operacionalização da mesma.</p>
      <p>Um dos nossos fatores diferenciadores é a capacidade relacional e a constante preocupação em entender o negócio de cada um dos nossos clientes, oferecendo assim um nível de serviço de excelência, com produtos muito competentes para a sua organização e gestão.</p>
    </>,
  highlight: "Loja online de produtos tecnologia.",
};
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

  const images = [
    "/assets/bg-main-001.jpg",
    "/assets/bg-main-002.jpg",
    "/assets/bg-main-003.jpg",
    "/assets/bg-main-004.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 2 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="md:min-h-screen w-full grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out
              ${index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          />
        ))}
      </div>

      {/* Conteúdo acima do fundo */}

      <HeroSection currentImage={currentImage} />

      <div className="z-10 bg-[#2345]/70 p-6 flex-col md:flex justify-center items-center hidden md:visible lg:visible xl:visible 2xl:visible">
        <div className="mb-12 border-b border-white/10 w-full">
          <h1 className="text-5xl font-bold text-white mb-8">EMPRESAS DO GRUPO BPA</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-center items-center  p-6 rounded-3xl ">
          <div onClick={() => setOpen(true)} className="bg-white/10 p-4 rounded-2xl flex flex-row items-center shadow-md hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            <img src="/assets/9.png" alt="Empresa 1" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">OMNIBOX STORE</h2>
              <p className="text-gray-200">Loja online de produtos tecnologia</p>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl flex flex-row items-center shadow-md hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            <img src="/assets/4.png" alt="Empresa 2" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">XStage Inovações</h2>
              <p className="text-gray-200">Desenvolvimento de websites, apps e software.</p>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl flex flex-row items-center shadow-md hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            <img src="/assets/Logo - 03.png" alt="Empresa 3" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">Rove+</h2>
              <p className="text-gray-200">plataforma de venda de serviços de IPTV e streaming</p>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl flex flex-row items-center shadow-md hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            <img src="/assets/7.png" alt="Empresa 4" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">OMNIBOX STORE</h2>
              <p className="text-gray-200">Cyber café com foco em impressão e jogos</p>
            </div>
          </div>

        </div>
      </div>
      <CompanyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        company={company}
      />

    </div>
  );
}

export default App;

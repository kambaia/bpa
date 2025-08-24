import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { CompanyModal } from "./components/CompanyModal";
import { companies } from "./utils/data";
import { X } from "lucide-react";

type TCompany = {
  id: number;
  name: string;
  logo: string;
  subtitle: string;
  image: string;
  website: string;
  slogan: string;
  description: any;
};

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [companySelected, setCompanySelected] = useState<TCompany>(companies[0]);
  const [showGridModal, setShowGridModal] = useState(false);

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


  const selectCompany = (company: TCompany) => {
    const comp = companies.find(c => c.id === company.id);
    if (comp) {
      setCompanySelected(comp);
      setOpen(true);
    }
  };

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
      <HeroSection currentImage={currentImage} setShowGridModal={setShowGridModal} />

      {/* DESKTOP: Empresas */}
      <div className="z-10 bg-[#2345]/70 p-6 flex-col justify-center items-center hidden md:flex">
        <div className="mb-12 border-b border-white/10 w-full">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">EMPRESAS DO GRUPO BPA</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-center items-center  p-6 rounded-3xl">

          {companies.map((comp) => (
            <div
              key={comp.id}
              className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex flex-col items-center text-center cursor-pointer hover:bg-white/20 transition"
              onClick={() => selectCompany(comp)}
            >
              <img src={comp.logo} alt={comp.name} className="h-20 mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">{comp.name}</h2>
              <p className="text-sm text-gray-200">{comp.subtitle}</p>
            </div>
          ))}

        </div>
      </div>



      {/* MOBILE: Modal com empresas */}
      {showGridModal && (
        <div className="fixed inset-0 z-30 bg-black/100  md:hidden">
          <div className="flex justify-end p-4">
            <div className="border-2 border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 transition">
              <button
                className="text-white text-4xl "
                onClick={() => setShowGridModal(false)}
                aria-label="Fechar"
              >
                <X />

              </button>
            </div>
          </div>
          <div className="bg-bg-black/100 p-4 rounded-2xl w-[98vw] h-[90vh] flex mt-[10%] flex-col max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6 w-full">
              <h2 className="text-xl font-bold text-white text-center border-b-2 border-white/6  pb-6 w-full">Empresas do Grupo BPA</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companies.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex flex-col items-center text-center cursor-pointer hover:bg-white/20 transition"
                  onClick={() => {
                    selectCompany(comp);
                    setShowGridModal(false);
                  }}
                >
                  <img src={comp.logo} alt={comp.name} className="h-14 mb-2" />
                  <h2 className="text-base font-semibold text-white mb-1">{comp.name}</h2>
                  <p className="text-xs text-gray-200">{comp.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CompanyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        company={companySelected}
      />
    </div>
  );
}

export default App;

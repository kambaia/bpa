import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface CompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
    company: {
        id: number;
        name: string;
        logo: string;
        subtitle: string;
        image: string;
        website: string;
        slogan: string;
        description: any;
    };
}

export function CompanyModal({ isOpen, onClose, company }: CompanyModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Container */}
                    <motion.div
                        className="relative bg-white w-full  h-[100vh] overflow-hidden grid grid-cols-1 md:grid-cols-2"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Coluna da Imagem */}
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${company.image})`,
                                    backgroundAttachment: 'fixed',
                                }}
                            >
                                <div className="absolute inset-0 bg-[#732CFF]/30 mix-blend-multiply" />
                            </div>
                            {/* Seta sobreposta no topo esquerdo */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 left-4 z-10 bg-white/80 rounded-full p-2 shadow-md md:hidden"
                                aria-label="Fechar"
                            >
                                <ArrowLeft className="w-8 h-8 text-[#732CFF]" />
                            </button>
                        </div>

                        {/* Coluna do Conteúdo */}
                        <div className="p-8 overflow-y-auto">
                            {/* Logo */}
                            <div className="md:flex justify-end mb-4 hidden">
                                <button
                                    onClick={onClose}
                                    className="text-gray-600 hover:text-black cursor-pointer"
                                >
                                    <ArrowLeft className="w-12 h-12  text-[#732CFF]" />
                                </button>
                            </div>
                            <div className="border-b border-gray-200  flex justify-center flex-col items-center p-4">

                                <div className="flex items-center justify-between ">
                                    <img src={company.logo} alt={company.name} className="h-40" />
                                </div>

                                {/* Botão Website */}
                                <a
                                    href={company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-[#732CFF] text-[#732CFF] px-4 py-2 rounded-md font-semibold hover:bg-[#732CFF] hover:text-white transition"
                                >
                                    Visitar Website
                                </a>
                            </div>

                            {/* Slogan */}
                            <h2 className="mt-8 text-2xl font-light text-gray-900">
                                {company.slogan}
                            </h2>
                            <div className="w-10 h-[2px] bg-[#732CFF] mt-2 mb-6"></div>

                            {/* Descrição */}
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {company.description}
                            </p>

                            {/* Destaque */}
                            <p className="font-semibold  text-[#732CFF]">{company.subtitle}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// import { Button } from "@/components/ui/button"; // se usares shadcn, senão troca por <button>
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from 'lucide-react'
import { useState } from "react";
const slogans = [
    <>
        <span className="text-[#732CFF]">  Servimos</span> <span className="font-semibold text-gray-200">pessoas</span>,<br />
        <span className="text-[#732CFF]">mudamos</span><span className="font-semibold text-gray-200">negócios.</span>
    </>,
    <>
        <span className="text-[#732CFF]">Transformamos</span> <span className="font-semibold text-gray-200">ideias</span>,<br />
        <span className="text-[#732CFF]"> criamos </span><span className="font-semibold text-gray-200">futuro.</span>
    </>,
    <>
        <span className="text-[#732CFF]">Valorizamos</span> <span className="font-semibold text-gray-200">talentos</span>,<br />
        <span className="text-[#732CFF]"> geramos </span> <span className="font-semibold text-gray-200">resultados.</span>
    </>,
    <>
        <span className="text-[#732CFF]"> Conectamos</span>  <span className="font-semibold text-gray-200">tecnologia</span>,<br />
        <span className="text-[#732CFF]">  potenciamos</span> <span className="font-semibold text-gray-200">negócios.</span>
    </>,
];

export default function HeroSection({ currentImage, setShowGridModal }: { currentImage?: number, setShowGridModal: (show: boolean) => void }) {

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black/50 to-black/70">
            {/* Logo */}
            <div className="flex flex-row gap-10 items-center justify-space-between mb-6 py-8">
                <img src={"/assets/logo-main.png"} alt="SENDYS GROUP" className="absolute left-5 w-64 md:w-90  mb-8" />
                <motion.div
                    className="absolute mb-10 right-6 top-4 text-white md:hidden"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => setShowGridModal(true)}
                >
                    <LayoutGrid size={30} />

                </motion.div>
            </div>


            <div className="relative h-24 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={currentImage} // muda a cada troca
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="text-3xl md:text-4xl font-light mb-6 origin-left"
                    >  {slogans[currentImage ?? 0]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* Texto descritivo */}
            <p className="max-w-2xl text-gray-200 text-sm md:text-base mb-10 leading-relaxed">
                Um grupo empresarial multidisciplinar, focado em soluções integradas que impulsionam crescimento e inovação. Reunimos experiência sólida em consultoria, tecnologia, marketing e operações, sempre orientados para a eficiência e diversificação de negócios em diferentes setores.
            </p>

            {/* Botões */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
                <button className="w-full border border-white text-white py-3 rounded-md font-semibold hover:bg-white/10 transition">
                    Contactos
                </button>
                <button className="w-full border border-white text-white py-3 rounded-md font-semibold hover:bg-white/10 transition">
                    Descubra mais sobre o Sendys Group
                </button>
                <button className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition">
                    RECRUTAMENTO
                </button>
            </div>

            {/* Rodapé */}
            <footer className="mt-6 py-5 md:py-0 md:mt-0 md:absolute bottom-6 text-xs text-gray-200">
                Desenvolvido por <span className="font-bold">BPA GROUP ®</span> – Todos os direitos reservados
            </footer>
        </section>
    );
}

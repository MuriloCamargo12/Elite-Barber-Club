import CardServicos from "./CardServicos";
import { IconBladeFilled, IconMoustache, IconCut } from "@tabler/icons-react";
import Sobre from "./Sobre";
import Trabalhos from "./Trabalhos";
import { bebas } from "@/lib/fonts";

export default function Main() {
    return (
        <main className="w-full flex flex-col bg-neutral-900 min-h-screen">
            <div id="servicos" className={`${bebas.className} px-5 md:px-0 w-full flex items-center text-center gap-3 py-15 mt-20 font-semibold flex-col`} data-aos="fade-up">
                <span className="text-[#967d3e] text-7xl">NOSSOS SERVIÇOS</span>
                <span className="text-white text-6xl">Feitos para você</span>
            </div>
            <div className="w-full flex justify-center px-3" data-aos="fade-up">
                <div className="w-full lg:w-6/8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-3">
                        <CardServicos icon={IconCut} titulo="Corte Masculino" desc="Cortes modernos e clássicos do seu jeito." preco="25" />
                        <CardServicos icon={IconMoustache} titulo="Barba Completa" desc="Moedelagem, alinhamento e hidratação premium." preco="20" />
                        <CardServicos icon={IconBladeFilled} titulo="Combo Completo" desc="Corte + Barba com desconto especial." preco="40" />
                    </div>
                </div>
            </div>
            <div id="sobre" className={`${bebas.className} w-full px-5 md:px-0 flex items-center text-center gap-3 py-15 mt-20 font-semibold flex-col`} data-aos="fade-up">
                <span className="text-[#967d3e] text-7xl">SOBRE NÓS</span>
                <span className="text-white text-6xl">Paixão pelo que fazemos</span>
            </div>
            <div className="w-full flex justify-center px-3" data-aos="fade-up">
                <div className="w-full lg:w-6/8">
                    <div className="flex justify-between gap-3">
                        <Sobre />
                    </div>
                </div>
            </div>
            <div id="trabalhos" className={`${bebas.className} w-full px-5 md:px-0 flex items-center text-center gap-3 py-15 mt-20 font-semibold flex-col`} data-aos="fade-up">
                <span className="text-[#967d3e] text-7xl">GALERIA</span>
                <span className="text-white text-6xl">Veja alguns trabalhos</span>
            </div>
            <div className="w-full flex justify-center px-3" data-aos="fade-up">
                <div className="w-full lg:w-6/8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-3">
                        <Trabalhos titulo="Degrade Navalhado" img="/cliente1.jpeg"/>
                        <Trabalhos titulo="High Fade" img="/cliente2.jpeg"/>
                        <Trabalhos titulo="Mid Fade" img="/cliente3.jpeg"/>
                        <Trabalhos titulo="Barba Texturizada" img="/cliente4.jpeg"/>
                        <Trabalhos titulo="UnderCut" img="/cliente5.jpeg"/>
                        <Trabalhos titulo="Low Fade" img="/cliente6.jpeg"/>
                    </div>
                </div>
            </div>
        </main>
    )
}
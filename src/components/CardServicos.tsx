import { IconBrandWhatsapp } from "@tabler/icons-react"

interface CardServicoes {
    icon: React.ElementType
    titulo: string
    desc: string
    preco: string
}

export default function CardServicos(props: CardServicoes) {
    const Icon = props.icon
    return (
        <div className="bg-neutral-950/50 border border-white/20 rounded-2xl py-6 px-4 flex justify-center transition-all duration-300 hover:border-[#967d3e]/50  hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
            <div className="flex flex-col items-center text-center gap-5 max-w-xs">

                <div className="flex justify-center">
                    <Icon size={80} className="text-[#967d3e]" />
                </div>

                <div className="flex flex-col gap-2 min-h-37.5 border-b border-white/20 pb-5">
                    <h2 className="text-2xl font-semibold text-white">
                        {props.titulo}
                    </h2>

                    <p className="text-md text-gray-400 leading-relaxed">
                        {props.desc}
                    </p>
                </div>

                <div className="flex items-center">
                    <span className="text-lg text-gray-300 flex gap-2">
                        A partir de
                        <span className="text-[#967d3e] font-bold text-lg">
                            R$ {props.preco}
                        </span>
                    </span>
                </div>

                <div>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#967d3e] flex py-2 px-10 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)] cursor-pointer">
                        <span className="flex items-center gap-2">
                            <IconBrandWhatsapp size={30} className="text-[#1fa015]"/>
                            <span className="font-semibold text-black">Agendar Horário</span>
                        </span>
                    </a>
                </div>

            </div>
        </div>
    )
}
import Image from "next/image"

interface TrabalhosProps {
    img: string
    titulo: string
}

export default function Trabalhos(props: TrabalhosProps) {
    return (
        <section>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
                
                <div className="relative overflow-hidden">
                    <Image
                        src={props.img}
                        width={500}
                        height={700}
                        alt={props.titulo || "Trabalho realizado"}
                        className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>

                {props.titulo && (
                    <div className="p-4">
                        <h3 className="text-white text-lg font-semibold tracking-wide">
                            {props.titulo}
                        </h3>

                        <div className="mt-2 h-[2px] w-full bg-[#967d3e]" />
                    </div>
                )}
            </div>
        </section>
    )
}
import Image from "next/image";

export default function Sobre() {
    return (
        <section className="w-full bg-neutral-950/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
            <div className="flex flex-col lg:flex-row items-center">

                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col gap-3">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
                        Mais do que um corte,
                        <br />
                        uma experiência.
                    </h2>

                    <p className="text-neutral-300 text-base md:text-md leading-8">
                        A Elite Barber Club nasceu com o propósito de transformar cada
                        atendimento em um momento único. Aqui, cada detalhe foi pensado
                        para oferecer muito mais do que um simples corte de cabelo.
                    </p>

                    <p className="text-neutral-400 text-base md:text-md leading-8">
                        Entregamos confiança, estilo e autoestima para homens que valorizam
                        presença, cuidado pessoal e uma experiência de alto nível.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 pt-4">
                        <div>
                            <h3 className="text-3xl font-bold text-[#967d3f]">+5</h3>
                            <span className="text-white text-sm">
                                Anos de experiência
                            </span>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[#967d3f]">100%</h3>
                            <span className="text-white text-sm">
                                Clientes satisfeitos
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-full">
                    <Image
                        src="/sobre.jpeg"
                        width={700}
                        height={700}
                        alt="foto-sobre"
                        className="w-full h-full object-cover lg:min-h-[600px] rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}
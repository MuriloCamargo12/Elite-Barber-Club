"use client"

import { IconBrandWhatsapp, IconCircleCheck, IconClock, IconMenu2, IconScissors, IconStar, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { bebas } from "@/lib/fonts";
import { useState } from "react";

export default function Header() {

    const [ativo, setAtivo] = useState(false)
    return (
        <header className="bg-[url('/cabecalho.jpeg')] w-full min-h bg-cover bg-center bg-no-repeat border-b border-white/20">
            <div className="w-full flex flex-col items-center">
                <div className="bg-black/85 w-full md:w-7/8 rounded-b-3xl border-2 border-white/20" data-aos="fade-down">
                    <div className="px-3 flex justify-between">
                        <div>
                            <button className="cursor-pointer flex items-center">
                                <Image src={'/logo.png'} alt="Logo" width={80} height={80} className="w-20"></Image>
                                <div className={`${bebas.className} flex flex-col text-2xl`}>
                                    <span className="font-black">Elite Barber</span>
                                    <span className="font-black text-[#967d3e] self-start">Club</span>
                                </div>
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button className="hover:text-[#967d3e] transition-all duration-300 cursor-pointer" onClick={() => setAtivo(!ativo)}>
                                {ativo ? (
                                    <IconX size={50} className="hover:text-red-600" />
                                ) : <IconMenu2 size={50} className="hover:text-[#967d3e]" />}
                            </button>
                        </div>

                        <div className="lg:flex items-center hidden">
                            <ul className="flex gap-12 text-sm">
                                <li>
                                    <a href="#inicio" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Início
                                    </a>
                                </li>
                                <li>
                                    <a href="#servicos" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Serviços
                                    </a>
                                </li>
                                <li>
                                    <a href="#sobre" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Sobre
                                    </a>
                                </li>
                                <li>
                                    <a href="#trabalhos" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Trabalhos
                                    </a>
                                </li>
                                <li>
                                    <a href="#contato" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:flex justify-center items-center hidden">
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#967d3e] flex px-5 py-2 rounded-4xl items-center gap-1 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
                                <span><IconBrandWhatsapp size={30} className="text-[#1fa015]" /></span>
                                <span className="font-semibold text-black">Agendar Horário</span>
                            </a>
                        </div>

                    </div>
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
                            ${ativo
                                ? "max-h-125 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}>
                                
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center w-full">
                            <ul className="flex flex-col items-center  gap-5 text-sm w-full">
                                <li className="border-b border-white/20 hover:border-[#967d3e]">
                                    <a href="#inicio" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Início
                                    </a>
                                </li>
                                <li className="border-b border-white/20 hover:border-[#967d3e]">
                                    <a href="#servicos" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Serviços
                                    </a>
                                </li>
                                <li className="border-b border-white/20 hover:border-[#967d3e]">
                                    <a href="#sobre" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Sobre
                                    </a>
                                </li>
                                <li className="border-b border-white/20 hover:border-[#967d3e]">
                                    <a href="#trabalhos" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Trabalhos
                                    </a>
                                </li>
                                <li className="border-b border-white/20 hover:border-[#967d3e]">
                                    <a href="#contato" className="cursor-pointer hover:text-[#967d3e] transition-all duration-300">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:flex justify-center items-center py-5">
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#967d3e] flex px-5 py-2 rounded-4xl items-center gap-1 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
                                <span><IconBrandWhatsapp size={30} className="text-[#1fa015]" /></span>
                                <span className="font-semibold text-black">Agendar Horário</span>
                            </a>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="px-5 md:px-0 md:w-6/8 min-h-screen flex items-center md:justify-start justify-center" data-aos="fade-up">
                    <div className="flex flex-col lg:gap-8 gap-3 mb-10">
                        <div className={`${bebas.className}`}>
                            <h1 className={"md:text-8xl text-6xl"}>ESTILO CLÁSSICO</h1>
                            <h1 className="md:text-8xl text-6xl text-[#967d3e]">CORTE MODERNO.</h1>
                        </div>

                        <div className="md:text-2xl">
                            <p>Viva a melhor experiência em barbearia</p>
                            <p>Qualidade, precisão e estilo em cada detalhe.</p>
                        </div>

                        <div className="lg:flex lg:flex-row flex flex-col gap-3 lg:gap-5">
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#967d3e] flex px-5 py-2 rounded-4xl items-center gap-1 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
                                <span><IconBrandWhatsapp size={30} className="text-[#1fa015]" /></span>
                                <span className="text-black font-semibold">Agendar Horário</span>
                            </a>

                            <button className="bg-[#967d3e] flex px-5 py-2 rounded-4xl items-center gap-1 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#967d3e]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(150,125,62,0.15)]">
                                <span><IconScissors size={30} className="text-gray-800" /></span>
                                <a href="#trabalhos" className="text-black font-semibold">Ver Trabalhos</a>
                            </button>
                        </div>
                        <div className="md:flex md:flex-row flex flex-col gap-3 lg:gap-5 mt-5">
                            <div className="flex gap-2 items-center">
                                <IconCircleCheck size={25} className="text-[#967d3e]" />
                                <span>Atendimento Premium</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <IconClock size={25} className="text-[#967d3e]" />
                                <span>Sem Espera</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <IconStar size={25} className="text-[#967d3e]" />
                                <span>Profissionais Experientes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
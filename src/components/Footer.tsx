import { IconBrandInstagram, IconBrandWhatsapp, IconBrandX, IconMapPin, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import { bebas } from "@/lib/fonts";

export default function Footer() {
    return (
        <footer id="contato" className="w-full flex flex-col items-center bg-black border-t border-white/20 py-15 mt-20">
            <div className="w-7/8 lg:flex md:flex-row gap-3 md:gap-0 flex flex-col justify-between">
                <div className="flex justify-center flex-col gap-5">
                    <div className="flex items-center">
                        <Image src={'/logo.png'} height={100} width={100} alt="logo" className="w-20"></Image>
                        <div className={`${bebas.className} flex flex-col`}>
                            <span className="text-2xl">Elite Barber</span>
                            <span className="text-2xl text-[#967d3e]">Club</span>
                        </div>
                    </div>

                    <div className="text-neutral-400 text-sm">
                        <p>© {new Date().getFullYear()} Elite Barber Club</p>
                        <p>Todos os direitos reservados</p>
                    </div>
                </div>

                <div className="flex md:flex md:flex-col lg:flex lg:flex-row gap-5 items-center">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#967d3e] cursor-pointer hover:-translate-y-1 transition-all duration-300"><IconBrandInstagram size={45} className="bg-neutral-900 rounded-full p-1" /></a>
                    <a href="https://x.com/?lang=pt" target="_blank" rel="noopener noreferrer" className="hover:text-[#967d3e] cursor-pointer hover:-translate-y-1 transition-all duration-300"><IconBrandX size={45} className="bg-neutral-900 rounded-full p-1" /></a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#967d3e] cursor-pointer hover:-translate-y-1 transition-all duration-300"><IconBrandWhatsapp size={45} className="bg-neutral-900 rounded-full p-1" /></a>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold">Links Rápidos</h2>
                    <ul className="text-neutral-400 flex flex-col gap-2 text-sm">
                        <li className="hover:text-[#967d3e] cursor-pointer"><a href="#inicio">Início</a></li>
                        <li className="hover:text-[#967d3e] cursor-pointer"><a href="#servicos">Seviços</a></li>
                        <li className="hover:text-[#967d3e] cursor-pointer"><a href="#sobre">Sobre</a></li>
                        <li className="hover:text-[#967d3e] cursor-pointer"><a href="#trabalhos">Trabalhos</a></li>
                        <li className="hover:text-[#967d3e] cursor-pointer"><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold">Contato</h2>
                    <div className="flex flex-col gap-3 text-sm text-neutral-400">
                        <div className="flex gap-2 items-center hover:text-[#967d3e] cursor-pointer">
                            <span><IconPhone /></span>
                            <span>(11) 99999-9999</span>
                        </div>

                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:text-[#967d3e] cursor-pointer">
                            <span><IconBrandWhatsapp /></span>
                            <span>Fale no WhatsApp</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold">Endereço</h2>
                    <div className="flex gap-2 text-sm hover:text-[#967d3e] cursor-pointer">
                        <IconMapPin />
                        <a href="https://www.google.com/maps?q=Centro+de+São+Paulo" target="_blank" rel="noopener noreferrer" className="flex flex-col text-neutral-400 hover:text-[#967d3e] cursor-pointer">
                            <span>Rua das Navalhas, 123</span>
                            <span>Centro - São Paulo</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
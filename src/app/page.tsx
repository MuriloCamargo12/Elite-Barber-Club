import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";


export default function Home() {
  return (
    <div id="inicio" className="flex flex-col bg-neutral-900">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

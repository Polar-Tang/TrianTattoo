// import '../output.css'
// import "../pages/home.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { Input } from "@/components/ui/input"
import { FaMagnifyingGlass } from "react-icons/fa6";

const SectionHero = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(".headline", 
      { strokeDashoffset: 1000 }, 
      { strokeDashoffset: 0, duration: 3, ease: "power2.out" }
    );
  }, []);
  
  
  return (
    <div className="relative bg-[url(/public/darkCastle.webp)] bg-cover bg-norepeat w-full h-full flex items-center justify-center bg-gradient-to-b from-withe to-black bg-no-repeat">
    <div className="absolute h-full w-full bg-gradient-to-b from-trasparent to-black z-10"></div>

    <div className='w-70 flex items-center'>
      <Input type="text" placeholder="Cositas maravillosas" className='w-50 z-100 text-white rounded-md border-purple-500 focus:border-purple-500/50 focus:outline' />
      <FaMagnifyingGlass className='w-20 text-white'/>
    </div>
</div>

  )
}

export default SectionHero
import './App.css';
import HeroSection from "@/components/hero-section";
import GameSection from "@/components/game-section";
import PartnershipCarousel from './components/carousel-section';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Import local logos
import logo1 from '@/assets/1.jpg';
import logo2 from '@/assets/2.jpg';
import logo3 from '@/assets/3.jpg';
import logo4 from '@/assets/4.jpg';
import logo5 from '@/assets/5.jpg';
import logo6 from '@/assets/6.jpg';
import logo7 from '@/assets/7.jpg';
import logo8 from '@/assets/8.jpg';
import logo9 from '@/assets/9.jpg';
import logo10 from '@/assets/10.jpg';
import logo11 from '@/assets/11.jpg';
import logo12 from '@/assets/12.jpg';
import logo13 from '@/assets/13.jpg';

// Define the Partner type locally if not imported
type Partner = {
  id: number;
  name: string;
  logo: string;
  url?: string;
};

// Helper object to map IDs to imported logos
const localLogoMap: { [key: number]: string } = {
  1: logo1,
  2: logo2,
  3: logo3,
  4: logo4,
  5: logo5,
  6: logo6,
  7: logo7,
  8: logo8,
  9: logo9,
  10: logo10,
  11: logo11,
  12: logo12,
  13: logo13,
};

function App() {
  const partnersData: Omit<Partner, 'name'>[] = [
    { id: 1, logo: localLogoMap[1], },
    { id: 2, logo: localLogoMap[2], },
    { id: 3, logo: localLogoMap[3], },
    { id: 4, logo: localLogoMap[4], },
    { id: 5, logo: localLogoMap[5], },
    { id: 6, logo: localLogoMap[6], },
    { id: 7, logo: localLogoMap[7], },
    { id: 8, logo: localLogoMap[8], },
    { id: 9, logo: localLogoMap[9], },
    { id: 10, logo: localLogoMap[10], },
    { id: 11, logo: localLogoMap[11], },
    { id: 12, logo: localLogoMap[12], },
    { id: 13, logo: localLogoMap[13], },
  ];

  const partners: Partner[] = partnersData.map(partnerBase => ({
    ...partnerBase,
    name: partnerBase.id.toString(), // Set name to the partner's ID as a string
  }));

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <PartnershipCarousel
        partners={partners}
        autoScroll={true}
        scrollSpeed={100} // Adjusted from original 200, modify as needed
      />
      <Button
        className={`fixed right-2.5 bottom-2.5 text-1xl px-4 py-2 transition duration-300 ease-in-out bg-white text-black hover:bg-black hover:text-white hover:scale-105`}
      >
        <a href="https://testnet.rarible.fun/collections/megaethtestnet/0x48003fc38f46759a652c4705929fa801e2c22c26" target="_blank" rel="noopener noreferrer">Mint</a>
        <ChevronRight />
      </Button>
      <GameSection />
      <p className="p-2 m-4">Developed by <a href="http://www.discord.com/users/656833394512232449" target="_blank" rel="noopener noreferrer" className=' hover:underline'><strong>Petalsforkite</strong></a> to show love for BadBunnZ 🧡</p>
    </div>
  );
}

export default App;
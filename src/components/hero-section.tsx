import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import BadbunnzIMG from "@/assets/bad-bunnz.svg"

export default function HeroSection() {
  return (
    <section
      className="min-h-screen w-full bg-no-repeat bg-right bg-contain flex items-center"
      style={{
        backgroundImage: `url(${BadbunnzIMG})`, // use correct relative path
      }}
    >
      <div className="px-8 max-w-5xl">
        <h1 className="text-9xl font-bold mb-6 animate-gradient-text">BadBunnz</h1>
        <Button
          className={`${buttonVariants({ variant: "outline" })} text-3xl px-8 py-4 transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-white hover:scale-105`}
        >
          Mint       
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}

import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

import BadbunnzIMG from "@/assets/bad-bunnz.svg"

export default function HeroSection() {
  return (
    <section
      className="min-h-screen w-full bg-no-repeat bg-right bg-auto flex items-center"
      style={{
        backgroundImage: `url(${BadbunnzIMG})`,
      }}
    >
      <div className="px-8 max-w-5xl">
        <h1 className="text-9xl font-bold mb-6 animate-gradient-text">BadBunnz</h1>

        <div className="flex justify-center">
          <Button
            className={`${buttonVariants({ variant: "outline" })} text-3xl px-6 py-6 transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-white hover:scale-105`}
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Enter
            <ChevronRight />
          </Button>
        </div>
      </div>

    </section>

  );
}

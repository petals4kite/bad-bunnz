import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full min-h-full py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight leading-tight">
            BadBunnz
          </h1>
          <Button variant="outline">Button</Button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/hero-image.png" // replace with your actual image path
            alt="Hero"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
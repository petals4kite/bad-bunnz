import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BunnyGame from "./BunnyGame.tsx";
import CarrotCatch from "./CarrotCatch.tsx";

export default function GameHub() {
  return (
    <section className="p-6 max-w-2xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-neutral-900">Play-A-Bunnz</h1>
      <Tabs defaultValue="bunny">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger
            value="bunny"
            className="hover:bg-neutral-900 hover:text-white transition-colors duration-200"
          >
            Click-A-Bunnz
          </TabsTrigger>

          <TabsTrigger
            value="carrot"
            className="hover:bg-neutral-900 hover:text-white transition-colors duration-200"
          >
            Carrot-Bunnz
          </TabsTrigger>


        </TabsList>

        <TabsContent value="bunny">
          <BunnyGame />
        </TabsContent>
        <TabsContent value="carrot">
          <CarrotCatch />
        </TabsContent>
      </Tabs>
    </section>
  );
}

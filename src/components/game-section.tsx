import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BunnyGame from "./BunnyGame.tsx";
import CarrotCatch from "./CarrotCatch.tsx";

export default function GameHub() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">🎮 Mini Games Hub</h1>
      <Tabs defaultValue="bunny">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="bunny">🐰 Bunny Clicker</TabsTrigger>
          <TabsTrigger value="carrot">🥕 Carrot Catch</TabsTrigger>
        </TabsList>

        <TabsContent value="bunny">
          <BunnyGame />
        </TabsContent>
        <TabsContent value="carrot">
          <CarrotCatch />
        </TabsContent>
      </Tabs>
    </div>
  );
}

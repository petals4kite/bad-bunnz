import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Bunny {
  x: number;
  y: number;
  id: number;
}

export default function BunnyGame() {
  const [bunnies, setBunnies] = useState<Bunny[]>([]);
  const [score, setScore] = useState(0);
  const gameRef = useRef<HTMLDivElement>(null);
  const bunnyId = useRef(0);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      if (gameRef.current) {
        const gameWidth = gameRef.current.offsetWidth;
        const gameHeight = gameRef.current.offsetHeight;
        const newBunny: Bunny = {
          x: Math.random() * (gameWidth - 40),
          y: Math.random() * (gameHeight - 40),
          id: bunnyId.current++,
        };
        setBunnies(prev => [...prev, newBunny]);

        setTimeout(() => {
          setBunnies(prev => prev.filter(b => b.id !== newBunny.id));
        }, 2000);
      }
    }, 1000);

    return () => clearInterval(spawnInterval);
  }, []);

  const handleBunnyClick = (id: number) => {
    setScore(prev => prev + 1);
    setBunnies(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 gap-4">
      <Card className="w-full max-w-md bg-white shadow-lg border-neutral-200 border-2">
        <CardContent className="text-center py-4">
          <h2 className="text-xl font-bold text-neutral-900">Click-A-Bunnz</h2>
          <p className="text-lg">Score: <span className="font-semibold">{score}</span></p>
        </CardContent>
      </Card>

      <div
        ref={gameRef}
        className="relative w-full max-w-md h-[400px] bg-neutral-800 rounded-xl border shadow-inner overflow-hidden"
      >
        {bunnies.map(bunny => (
          <div
            key={bunny.id}
            className="absolute text-3xl cursor-pointer animate-bounce hover:scale-125 transition-transform duration-150"
            style={{ top: bunny.y, left: bunny.x }}
            onClick={() => handleBunnyClick(bunny.id)}
          >
            🐰
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="hover:bg-neutral-900 hover:text-white transition-colors duration-200"
        onClick={() => { setScore(0); setBunnies([]); }}
      >
        Reset Game
      </Button>
    </div>
  );
}

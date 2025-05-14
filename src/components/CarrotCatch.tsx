import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Bunny {
  x: number;
  y: number;
  id: number;
}

export default function CarrotCatch() {
  const [bunnies, setBunnies] = useState<Bunny[]>([]);
  const [score, setScore] = useState(0);
  const gameRef = useRef<HTMLDivElement>(null);
  const bunnyId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameRef.current) {
        const width = gameRef.current.offsetWidth;
        const newBunny: Bunny = {
          x: Math.random() * (width - 40),
          y: 0,
          id: bunnyId.current++,
        };
        setBunnies(prev => [...prev, newBunny]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fallInterval = setInterval(() => {
      setBunnies(prev =>
        prev
          .map(b => ({ ...b, y: b.y + 10 }))
          .filter(b => b.y < 360) // remove if hits bottom
      );
    }, 100);

    return () => clearInterval(fallInterval);
  }, []);

  const handleClick = (id: number) => {
    setScore(score + 1);
    setBunnies(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="w-full max-w-md border-orange-200 shadow-md">
        <CardContent className="text-center py-4">
          <h2 className="text-xl font-bold text-orange-500">🥕 Carrot Catch</h2>
          <p className="text-lg">Score: <span className="font-semibold">{score}</span></p>
        </CardContent>
      </Card>

      <div
        ref={gameRef}
        className="relative w-full max-w-md h-[400px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl overflow-hidden border shadow-inner"
      >
        {bunnies.map(b => (
          <div
            key={b.id}
            className="absolute text-3xl cursor-pointer transition-transform duration-75"
            style={{ left: b.x, top: b.y }}
            onClick={() => handleClick(b.id)}
          >
            🐰
          </div>
        ))}
      </div>

      <Button
        onClick={() => {
          setScore(0);
          setBunnies([]);
        }}
        className="bg-orange-100 border border-orange-300 hover:bg-orange-200 text-orange-600"
      >
        Reset Game
      </Button>
    </div>
  );
}

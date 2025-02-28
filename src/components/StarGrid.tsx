"use client";

import { useRef, useEffect } from "react";

export default function StarGrid() {
  const grid = [14, 30] as const;
  const container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (container.current) {
      container.current.style.opacity = "1"; // Torna visível após a montagem
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14"
      id="star-grid"
      ref={container}
      opacity={1} // Alterado de 0 para 1
      style={{
        maskImage: "linear-gradient(black, transparent)",
        transition: "opacity 0.5s ease-in-out", // Adicionando uma transição suave
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={`${i}-${j}`} // Corrigida a chave para evitar duplicação
                fill="currentColor"
                opacity="0.2"
                className="star-grid-item"
                d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}

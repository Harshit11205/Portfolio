"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const canvas = ctx.canvas;
  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.width;
  const ih = img.height;

  const hRatio = cw / iw;
  const vRatio = ch / ih;
  const ratio  = Math.max(hRatio, vRatio);

  const cx = (cw - iw * ratio) / 2;
  const cy = (ch - ih * ratio) / 2;

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, 0, 0, iw, ih, cx, cy, iw * ratio, ih * ratio);
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll (0 to 1) to frame index (0 to 119)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(imgArray);
          setLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, []);

  // Handle Resize
  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const ctx = canvas.getContext("2d");
      const currentFrame = Math.round(currentIndex.get());
      if (ctx && images[currentFrame]) {
        drawImageCover(ctx, images[currentFrame]);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Trigger initially
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [loaded, images, currentIndex]);

  // Handle Scroll rendering
  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (!loaded || !canvasRef.current || images.length === 0) return;
    
    const frameIndex = Math.round(latest);
    const ctx = canvasRef.current.getContext("2d");
    if (ctx && images[frameIndex]) {
      drawImageCover(ctx, images[frameIndex]);
    }
  });

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-50">
            Loading Sequence...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}

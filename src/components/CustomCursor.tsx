import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!ringRef.current) return;
      if (target.closest("button, a, [role='button']")) {
        ringRef.current.style.width = "52px";
        ringRef.current.style.height = "52px";
        ringRef.current.style.borderColor = "#E879F9";
        ringRef.current.style.background = "rgba(123,47,190,0.1)";
      } else {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(192,132,252,0.5)";
        ringRef.current.style.background = "transparent";
      }
    };

    let raf: number;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.125;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.125;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    raf = requestAnimationFrame(loop);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(192,132,252,0.5)",
          transition: "width 0.12s ease, height 0.12s ease, border-color 0.12s ease, background 0.12s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;

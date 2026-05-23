import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (el.dataset.reveal === "stagger") {
              Array.from(el.children).forEach((child, i) => {
                setTimeout(() => {
                  (child as HTMLElement).style.opacity = "1";
                  (child as HTMLElement).style.transform = "none";
                  (child as HTMLElement).style.filter = "none";
                }, i * 80);
              });
            }
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;

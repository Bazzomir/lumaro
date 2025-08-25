import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useScrollSpy(sectionsSelector = "section[id]") {
  const [activeId, setActiveId] = useState("home");
  const isNavigatingRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;

        const bestEntry = entries
          .filter((entry) => entry.isIntersecting)
          .reduce(
            (best, curr) =>
              curr.intersectionRatio > (best?.intersectionRatio || 0)
                ? curr
                : best,
            null
          );

        if (bestEntry) {
          const id = bestEntry.target.id;
          setActiveId(id);

          const path = id === "home" ? "/lumaro" : `/lumaro/${id}`;
          navigate(path, { replace: true });
        }
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    document.querySelectorAll(sectionsSelector).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [navigate, sectionsSelector]);

  const scrollToId = useCallback(
    (id) => {
      isNavigatingRef.current = true;

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setActiveId(id);
      const path = id === "home" ? "/lumaro" : `/lumaro/${id}`;
      navigate(path, { replace: true });

      setTimeout(() => (isNavigatingRef.current = false), 200);
    },
    [navigate]
  );

  return { activeId, scrollToId };
}

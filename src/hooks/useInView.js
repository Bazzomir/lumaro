import { useState, useEffect } from "react";

export function useInView(ref, options = { threshold: 0.25, once: false }) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (options.once) {
                        observer.disconnect();
                    }
                } else {
                    if (!options.once) {
                        setIsInView(false);
                    }
                }
            },
            options
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return isInView;
}

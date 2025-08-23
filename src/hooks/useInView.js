import { useState, useEffect, useRef } from "react";

export function useInView(options = { threshold: 0.25 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (options.once) {
                        observer.disconnect();
                    }
                } else {
                    if (!options.once) {
                        setInView(false);
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

    return [ref, inView];
}
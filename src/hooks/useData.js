import { useQuery } from '@tanstack/react-query';

export function useData() {
    return useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const url = `${import.meta.env.BASE_URL}/data.json`
            const res = await fetch(url);
            if (!res.ok) throw new Error("Network response was not ok!");
            return res.json();
        },
        staleTime: 1000 * 60 * 5
    });
}

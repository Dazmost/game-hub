import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

// so we are hiding these HTTP endpoint details behind the useGenres hook
const useGenres = () => useData<Genre>('/genres');

export default useGenres;
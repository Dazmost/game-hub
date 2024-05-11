// import useData from "./useData";
import genres from '../data/genres'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// so we are hiding these HTTP endpoint details behind the useGenres hook
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;
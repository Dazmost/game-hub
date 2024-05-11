import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

// parent_platforms: { platform: Platform }[]
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
  }

  // (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', { 
    params: { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    [gameQuery]); // was [gameQuery.genre?.id, gameQuery.platform?.id]
// params is one of the properties of Axios request config object
// because selectedGenre could be null, here we use optional chaining
// so if selectedGenre is null, genres will also be null
// so we pass this object to our data hook

export default useGames;
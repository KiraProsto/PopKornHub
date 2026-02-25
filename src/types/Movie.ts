export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  vote_average?: number;
  category: string;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
}

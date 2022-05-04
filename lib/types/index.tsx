export interface IMovie {
  id: number;
  title: string;
  genre_id: number[];
  adults: boolean;
  backdrop_path: string;
  poster_path: string;
  media_type?: string;
  release_date?: string;
  name?: string;
  original_title: string;
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface BelongToCollection {
  id: number, 
  name: string, 
  poster_path: string, 
  backdrop: string
}

export interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string
  origin_country: string
}

export interface Genres {
  id: number;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieInfo {
  adult: boolean
  backdrop_path: string;
  belongs_to_collection: BelongToCollection;
  budget: number;
  genres: Genres[];
  homepage?: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompanies[];
  spoken_languages: SpokenLanguage[];
  release_date?: string;
  last_air_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title?: string;
  video: boolean;
  vote_average?: number;
  vote_count: number;
}

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Crew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
}

export interface ICredits {
  cast: Cast[];
  crew: Crew[];
  id: number;
}

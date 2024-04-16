type tShows = {
  id: number,
  name: string,
  summary: string,
  image: string;
};

type tShowsApiResultData = {
  show: {
    id: number,
    name: string,
    summary: string,
    image: {
      medium: string | null
    }
  }
};

type tEpisodes = {
  id: number,
  name: string,
  season: number,
  number: number;
};

type tEpisodesApiResultData = {
  id: number,
  name: string,
  season: number,
  number: number;
};
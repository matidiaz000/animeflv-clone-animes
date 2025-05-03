interface IUrl {
  url: string,
  sort: string,
  text: string
};

export const urls: IUrl[] = [
  {
    url: 'episodios-nuevos',
    sort: 'UPDATED_AT_DESC',
    text: 'Episodios nuevos'
  },
  {
    url: 'lo-mas-popular',
    sort: 'POPULARITY_DESC',
    text: 'Lo más popular'
  },
  {
    url: 'proximamente',
    sort: 'POPULARITY_DESC',
    text: 'Próximamente'
  },
  {
    url: 'top-100-anime',
    sort: 'SCORE_DESC',
    text: 'Top 100 anime'
  },
]
export type ISeasons = 'SPRING' | 'SUMMER' | 'FALL' | 'WINTER';

export const getSeason = (next?: boolean): ISeasons => {
  const now = new Date();
  const month = now.getMonth();
  let season: ISeasons;
  const listSeasons: ISeasons[] = ['SPRING', 'SUMMER', 'FALL', 'WINTER']

  if (month >= 2 && month <= 4) {
    season = listSeasons[!next ? 0 : 1];
  } else if (month >= 5 && month <= 7) {
    season = listSeasons[!next ? 1 : 2];
  } else if (month >= 8 && month <= 10) {
    season = listSeasons[!next ? 2 : 3];
  } else {
    season = listSeasons[!next ? 3 : 4];
  }

  return season;
}

export const currentYear = new Date().getFullYear();
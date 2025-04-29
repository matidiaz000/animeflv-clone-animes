type IFormat = 'MOVIE' | 'TV' | 'OVA';

export const Format = (string: IFormat) => {
  if (string === 'MOVIE') return 'film'
  if (string === 'TV') return 'anime'
  if (string === 'OVA') return 'ova'
  else return 'default'
}
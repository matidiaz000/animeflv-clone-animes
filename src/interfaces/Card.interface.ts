export type Categories = 'film' | 'anime' | 'ova' | 'default';

export interface ICard {
  id: number,
  img: string,
  category: Categories,
  title: string,
  subtitle: string,
  link: string
}

export interface ISmallCard {
  id: number,
  img: string,
  title: string,
  subtitle: string,
  link: string,
  time: string,
  likes: number
}
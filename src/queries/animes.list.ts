import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query getAnimeList($sort: [MediaSort], $page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int, $status: MediaStatus) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        lastPage
        perPage
        total
      }
      media (sort: $sort, format_in: [OVA, TV, MOVIE], isAdult: false, season: $season, seasonYear: $seasonYear, status: $status) {
        id
        coverImage {
          medium
          large
          color
        }
        title {
          userPreferred
          english
          native
          romaji
        }
        episodes
        format
        duration
        status
      }
    }
  }
`;
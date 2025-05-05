import { urls } from "../constants/urls";
import { currentYear, getSeason } from "./seasons";

interface IProps {
  getSort: any,
  currentPage: any,
  category: any
}

export const setVariables = ({getSort, currentPage, category}: IProps) => {
  let variables: any = {
    sort: [getSort],
    page: currentPage,
    perPage: 18,
  }
  if (category === urls[0].url) {
    variables = {
      season: getSeason(),
      seasonYear: currentYear,
      status: 'RELEASING',
      ...variables
    }
  } else if (category === urls[1].url) {
    variables = {
      season: getSeason(),
      seasonYear: currentYear,
      ...variables
    }
  } else if (category === urls[2].url) {
    variables = {
      season: getSeason(true),
      seasonYear: currentYear,
      status: 'NOT_YET_RELEASED',
      ...variables
    }
  }
  return variables
}
import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries/animes.list";
import { currentYear, getSeason } from "../utilities/seasons";
import { useState } from "react";
import { urls } from "../constants/urls";
import { Format } from "../constants/format";

const Animes = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const getSort = urls.find(d => d.url === category)?.sort;

  const setVariables = () => {
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
    }
    if (category === urls[1].url) {
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

  const { loading, error, data, fetchMore } = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: setVariables(),
  });
  
  const media = data?.Page?.media;
  const pageInfo = data?.Page?.pageInfo;

  const loadMore = (page: number) => {
    if (pageInfo.hasNextPage) {
      setCurrentPage(page)
      fetchMore({ variables: setVariables() });
    }
  };

  const setSubtitle = (item: any): string => {
    if (item.episodes > 1) return `${item.episodes} episodios`
    else if (item.episodes === 1 && item.duration) return `${item.duration}m`
    else return "Próximamente"
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <article className="container pb-5">
      <header className="d-flex justify-content-between align-items-center mt-5">
        <h2>{urls.find(d => d.url === category)?.text}</h2>
        {/* 
        <div className="d-flex align-items-center">
          <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Ordenar</Button>
          <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Filtrar</Button>
        </div>
        */}
      </header>
      <section className="row my-n4 py-4">
        {media?.map((item: any) => 
          <div className="col-2 my-4" key={`animesList-${item.id}`}>
            <Card
              img={item.coverImage?.large}
              category={Format(item.format)}
              title={item.title?.userPreferred}
              subtitle={setSubtitle(item)}
              link={`/anime/${item.id}`}
            />
          </div>
        )}
      </section>
      <section className="d-flex align-items-center mt-4">
        <Button
          disabled={currentPage === 1}
          variant="contained"
          className="mx-auto"
          onClick={() => loadMore(currentPage - 1)}
          color="primary"
        >Anterior</Button>
        <span>{currentPage} / {pageInfo?.lastPage}</span>
        <Button
          variant="contained"
          className="mx-auto"
          onClick={() => loadMore(currentPage + 1)}
          color="primary"
        >Siguiente</Button>
      </section>
    </article>
  );
};

export default Animes;

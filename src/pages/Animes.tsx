import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries/animes.list";
import { getSeason } from "../utilities/seasons";

const Animes = () => {
  const { category } = useParams();

  const currentYear = new Date().getFullYear();

  const urls: { url: string, sort: string }[] = [
    { url: 'episodios-nuevos', sort: 'ID_DESC' },
    { url: 'lo-mas-popular', sort: 'POPULARITY_DESC' },
    { url: 'proximamente', sort: 'POPULARITY_DESC' },
    { url: 'top-100-anime', sort: 'SCORE_DESC' },
  ]

  const setVariables = () => {
    const sort = urls.find(d => d.url === category)?.sort;
    let variables: any = {
      sort: [sort],
      page: 1,
      perPage: 20,
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

  const list = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: setVariables(),
  });

  const Format = (string: any) => {
    if (string === 'MOVIE') return 'film'
    if (string === 'TV') return 'anime'
    if (string === 'OVA') return 'ova'
    else return 'default'
  }

  if (list.loading) return <p>Loading...</p>;
  if (list.error) return <p>Error : {list.error.message}</p>;

  return (
    <article className="container pb-5">
      <header className="d-flex justify-content-between align-items-center mt-5">
        <h2>Acción</h2>
        <div className="d-flex align-items-center">
          <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Ordenar</Button>
          <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Filtrar</Button>
        </div>
      </header>
      <section className="row my-n4 py-4">
        {list?.data?.Page?.media?.map((item: any) => 
          <div className="col-2 my-4" key={`animesList-${item.id}`}>
            <Card
              img={item.coverImage?.large}
              category={Format(item.format)}
              title={item.title?.userPreferred}
              subtitle={`${item.episodes} episodios`}
              link={item.id}
            />
          </div>
          )}
      </section>
    </article>
  );
};

export default Animes;

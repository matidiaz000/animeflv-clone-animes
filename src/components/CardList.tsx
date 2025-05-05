import { Card } from "@matidiaz000/animeflv-clone-library";
import { Format } from "../constants/format";
import CardListSkeleton from "../skeletons/CardList";

interface IProps {
  data: any,
  loading: any,
  error: any
}

const CardList = ({ data, loading, error }: IProps) => {
  if (loading) return <CardListSkeleton />;
  if (error) return <p>Error : {error.message}</p>;

  const setSubtitle = (item: any): string => {
    if (item.episodes > 1) return `${item.episodes} episodios`
    else if (item.episodes === 1 && item.duration) return `${item.duration}m`
    else return "Próximamente"
  }

  return (
    <section className="row my-n4 py-4">
      {data.map((item: any) => 
        <div className="col-4 col-sm-3 col-lg-2 my-4" key={`animesList-${item.id}`}>
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
  );
};

export default CardList;

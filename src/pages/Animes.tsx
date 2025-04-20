import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import animesList from './../mocks/animesList.json';
import { ICard } from "../interfaces/Card.interface";

const Animes = () => {
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
        {(animesList as unknown as ICard[]).map(item => 
          <div className="col-2 my-4" key={`animesList-${item.id}`}>
            <Card
              img={item.img}
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          </div>
          )}
      </section>
    </article>
  );
};

export default Animes;

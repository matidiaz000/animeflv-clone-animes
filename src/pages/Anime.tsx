import { Button, Card, Icon } from "@matidiaz000/animeflv-clone-library";
import chapters from './../mocks/chapters.json';
import { ISmallCard } from "../interfaces/Card.interface";

const Anime = () => {
  return (
    <article>
      <header>
        <div className="bg-dark text-white">
          <div className="container pb-4 pt-5">
            <div className="row">
              <div className="col-3 position-relative">
                <div className="position-absolute">
                  <Card
                    img="https://www3.animeflv.net/uploads/animes/covers/3220.jpg"
                    title=""
                    subtitle=""
                    link=""
                  />
                </div>
              </div>
              <div className="col">
                <h1 className="d-block text-gray-200 w-50 mb-4">Mushoku Tensei Jobless Reincarnation</h1>
                <Button variant="watercolor" className="rounded" color="primary" span={true}>SERIE</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              <h4>Sinopsis</h4>
              <p>Cuando un autobús atropella a un joven de 34 años que no ha logrado mucho en su vida, su historia no termina ahí. Habiendo reencarnado en un niño, Rudy aprovechará cada oportunidad para vivir la vida que siempre quiso. Con la ayuda de sus amigos, unas habilidades mágicas recién adquiridas, y el coraje para hacer las cosas que siempre ha soñado, se embarca en una aventura épica, con su experiencia pasada intacta.</p>
              <nav className="d-flex mx-n2">
                <Button variant="watercolor" className="mx-2 rounded" color="gray-600" span>AVENTURA</Button>
                <Button variant="watercolor" className="mx-2 rounded" color="gray-600" span>FANTASÍA</Button>
                <Button variant="watercolor" className="mx-2 rounded" color="gray-600" span>DRAMA</Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <section className="py-5">
          <header className="d-flex justify-content-between align-items-center">
            <button className="bg-transparent border-0 d-flex align-items-center">
              <h3>Temporada 1</h3>
              <Icon icon="" />
            </button>
            <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Ordenar</Button>
          </header>
          <div className="row">
            {(chapters as unknown as ISmallCard[]).map(item => 
              <div className="col-2 my-3" key={`season-1-${item.id}`}>
                <Card
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  subtitle={item.subtitle}
                  time={item.time}
                >
                  <span className="small">{item.likes} L</span>
                </Card>
              </div>
              )}
          </div>
        </section>

        <section className="py-5">
          <header className="d-flex justify-content-between align-items-center">
            <button className="bg-transparent border-0 d-flex align-items-center">
              <h3>Temporada 2</h3>
              <Icon icon="" />
            </button>
            <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Ordenar</Button>
          </header>
          <div className="row">
            {(chapters as unknown as ISmallCard[]).map(item => 
              <div className="col-2 my-3" key={`season-1-${item.id}`}>
                <Card
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  subtitle={item.subtitle}
                  time={item.time}
                >
                  <span className="small">{item.likes} L</span>
                </Card>
              </div>
              )}
          </div>
        </section>
      </div>
    </article>
  );
};

export default Anime;

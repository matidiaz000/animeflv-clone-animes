import { Button } from "@matidiaz000/animeflv-clone-library";

interface IProps {
  currentPage: number,
  pageInfo: any
  next: any,
  prev: any
}

const Pagination = ({currentPage, pageInfo, next, prev}: IProps) => {
  return (
    <section className="d-flex align-items-center mt-4">
      <Button
        disabled={currentPage === 1}
        variant="contained"
        className="mx-auto"
        onClick={prev}
        color="primary"
      >Anterior</Button>
      <span>{currentPage} / {pageInfo?.lastPage}</span>
      <Button
        variant="contained"
        className="mx-auto"
        onClick={next}
        color="primary"
      >Siguiente</Button>
    </section>
  );
};

export default Pagination;

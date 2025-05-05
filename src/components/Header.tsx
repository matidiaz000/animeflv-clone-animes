import { useParams } from "react-router-dom";
import { urls } from "../constants/urls";

const Header = () => {
  const { category } = useParams();

  return (
    <header className="d-flex justify-content-between align-items-center mt-5">
      <h2>{urls.find(d => d.url === category)?.text}</h2>
      {/* 
      <div className="d-flex align-items-center">
        <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Ordenar</Button>
        <Button variant="contained" className="ms-3 rounded-pill" color="primary" startIcon="">Filtrar</Button>
      </div>
      */}
    </header>
  );
};

export default Header;

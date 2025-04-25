import { Route, Routes } from "react-router-dom";
import Animes from './pages/Animes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Animes />} path="/:category/:value" />
    </Routes>
  );
};

export default AppRoutes;

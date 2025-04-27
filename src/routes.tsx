import { Route, Routes } from "react-router-dom";
import Animes from './pages/Animes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Animes />} path="/:category" />
    </Routes>
  );
};

export default AppRoutes;

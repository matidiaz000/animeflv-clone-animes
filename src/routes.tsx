import { Route, Routes } from "react-router-dom";
import Anime from './pages/Anime';
import Animes from './pages/Animes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Animes />} path="/" />
      <Route index element={<Anime />} path="/:name" />
    </Routes>
  );
};

export default AppRoutes;

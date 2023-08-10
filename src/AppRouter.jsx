import { Route, Routes } from "react-router-dom";

import { HomePage, RecipesPage, RecipeViewerPage } from "./pages";

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipe/:id" element={<RecipeViewerPage />} />
  </Routes>

export default AppRouter;

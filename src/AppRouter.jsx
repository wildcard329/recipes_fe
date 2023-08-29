import { Route, Routes } from "react-router-dom";

import { HomePage, RecipesPage, RecipeViewerPage, RecipeEditorPage } from "./pages";

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipe/:id" element={<RecipeViewerPage />} />
    <Route path="/recipes/new" element={<RecipeEditorPage />} />
  </Routes>

export default AppRouter;

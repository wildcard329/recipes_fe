import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AuthPage = lazy(() => import("../src/pages/AuthPage.jsx"));
const HomePage = lazy(() => import("../src/pages/HomePage.jsx"));
const RecipesPage = lazy(() => import("../src/pages/RecipesPage.jsx"));
const RecipeViewerPage = lazy(() => import("../src/pages/RecipeViewerPage.jsx"));
const RecipeEditorPage = lazy(() => import("../src/pages/RecipeEditorPage.jsx"));

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipe/:id" element={<RecipeViewerPage />} />
    <Route path="/recipes/new" element={<RecipeEditorPage />} />
    <Route path="/recipes/:id/edit" element={<RecipeEditorPage />} />
  </Routes>

export default AppRouter;

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AuthPage = lazy(() => import("../src/pages/AuthPage.jsx"));
const LogoutPage = lazy(() => import("../src/pages/LogoutPage.jsx"));
const HomePage = lazy(() => import("../src/pages/HomePage.jsx"));
const IngredientsPage = lazy(() => import("../src/pages/IngredientsPage.jsx"));
const RecipesPage = lazy(() => import("../src/pages/RecipesPage.jsx"));
const RecipeViewerPage = lazy(() => import("../src/pages/RecipeViewerPage.jsx"));
const RecipeEditorPage = lazy(() => import("../src/pages/RecipeEditorPage.jsx"));
const UserProfile = lazy(() => import("../src/pages/UserProfile.jsx"));

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ingredients" element={<IngredientsPage />} />
    <Route path="/ingredients/:user" element={<IngredientsPage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/logout" element={<LogoutPage />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipes/:user" element={<RecipesPage />} />
    <Route path="/recipe/:id" element={<RecipeViewerPage />} />
    <Route path="/recipes/new" element={<RecipeEditorPage />} />
    <Route path="/recipes/:id/edit" element={<RecipeEditorPage />} />
    <Route path="/user/:userId/profile" element={<UserProfile />} />
  </Routes>

export default AppRouter;

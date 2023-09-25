import { IngredientProvider } from "../state/providers";
import { IngredientDisplay, IngredientList } from "../components/ingredient";
import "./IngredientsPage.css";

const IngredientsPage = () => {  
  return(
    <IngredientProvider>
      <div className="ingredients-page-wrapper">
        <IngredientDisplay />
        <IngredientList />
      </div>
    </IngredientProvider>
  )
}

export default IngredientsPage;

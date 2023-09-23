import { useState } from "react";
import ingredientsJson from "../assets/configs/ingredients.json";
import "./IngredientsPage.css";

const IngredientsPage = () => {
  const [selected, setSelected] = useState({});

  const selectItem = (ingredient) => {
    console.log('data ', ingredient);
    setSelected(ingredient);
  }
  
  return(
      <div className="ingredients-page-wrapper">
        <ul className="ingredients-list">
          {ingredientsJson.map((ingredient) => <li className="ingredients-list-item" onClick={() => selectItem(ingredient)} key={ingredient.ingredient_id}><button>{ingredient.ingredient_name}</button></li>)}
        </ul>
        <div className="ingredients-data">
          {!!selected && <h3>{selected.ingredient_name}</h3>}
          {!!selected && <p>{selected.ingredient_description}</p>}
        </div>
      </div>
  )
}

export default IngredientsPage;

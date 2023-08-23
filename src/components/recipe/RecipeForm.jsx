import { useState } from "react";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({});

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>recipe name</label>
        <input name="recipe_name" value={recipe?.recipe_name} onChange={handleChange} placeholder="recipe name" />
      </div>
      <div>
        <label>recipe description</label>
        <input name="recipe_description" value={recipe?.recipe_description} onChange={handleChange} placeholder="recipe description" />
      </div>
      <div>
        <label>recipe prep time</label>
        <input name="recipe_prep_time" value={recipe?.recipe_prep_time} onChange={handleChange} type="number" />
      </div>
      <div>
        <label>recipe cook time</label>
        <input name="recipe_cook_time" value={recipe?.recipe_cook_time} onChange={handleChange} type="number" />
      </div>
      <div>
        <label>recipe total time</label>
        <input name="recipe_total_time" value={recipe?.recipe_total_time} onChange={handleChange} type="number" />
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default RecipeForm;

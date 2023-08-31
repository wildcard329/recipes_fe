import { Link } from "react-router-dom";
import { formatMinutes } from "../../utils/functions/format";
import imgPlaceholder from "../../assets/images/img_unavailable.jpg";
import "./recipe.css";
import { ImageLoader } from "../image";

const RecipeCard = ({ recipe }) => 
  <Link key={recipe?.recipe_id} className="recipe-card" to={`/recipe/:${recipe?.recipe_id}`} state={recipe}>
    <ImageLoader image={recipe?.recipe_image ? recipe?.recipe_image : imgPlaceholder} imgAlt={'recipe image'} />
    <h3 className="recipe-card-text">{recipe?.recipe_name}</h3>
    <p className="recipe-card-text">{formatMinutes(recipe?.recipe_total_time)}</p>
  </Link>

export default RecipeCard;

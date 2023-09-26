import { useContext, useEffect } from "react";
import { accordionContext, recipeContext } from "../../state/contexts";
import { useAmplify } from "../../utils/customhooks";
import { ListEditor } from "../lists";
import { AppButton } from "../button";
import imgUplPlchldr from "../../assets/images/upload_image.png";
import "./RecipeForm.css";
import { AccordionControll, AccordionDrawer } from "../accordion";
import { Button } from "@mui/material";
// import Accordion from "../accordion/Accordion";

const RecipeForm = () => {
  const { recipe, setRecipe, isNewRecipe, asset } = useContext(recipeContext);
  const { addAsset, addRecipe, updateRecipe } = useAmplify();
  const { accordionDrawers } = useContext(accordionContext);

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleIntChange = (e) => setRecipe({ ...recipe, [e.target.name]: parseInt(e.target.value) });

  const handleImgUpld = (e) => {
    const file = e.target.files[0];
    if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
      const filename = `${recipe?.recipe_author || 'Greg'}-${file.name}`;
      addAsset(filename, file);
      setRecipe({ ...recipe, recipe_image_key: filename, recipe_image: file });
    } else {
      alert('That is not an image');
    };
  };

  const handleCategories = async (categories) => await setRecipe((prevRec) => ({ ...prevRec, recipe_categories: categories }));

  const handleIngredients = async (ingredients) => await setRecipe((prevRec) => ({ ...prevRec, recipe_ingredients: ingredients }));

  const handleInstructions = async (instructions) => await setRecipe((prevRec) => ({  ...prevRec, recipe_instructions: instructions }));

  const handleTools = async (tools) => await setRecipe((prevRec) => ({ ...prevRec, recipe_tools: tools }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setRecipe(delete recipe?.recipe_image);    
    isNewRecipe ? await addRecipe(recipe) : await updateRecipe(recipe);
    alert('recipe updated');
  };

  useEffect(() => {
    console.log('data ', accordionDrawers)
  }, [accordionDrawers]);

  return(
    <form onSubmit={handleSubmit} className="recipe-form">
      <AccordionControll />
      <AccordionDrawer accordionLabel={"general"} accordionState={accordionDrawers[0]}>
        <div id="general" className="form-section">
          <div className="form-input recipe-name">
            <label>recipe name</label>
            <input name="recipe_name" value={recipe?.recipe_name} onChange={handleChange} placeholder="recipe name" />
          </div>
          <div className="form-input recipe-time">
            <div className="form-input">
              <label>recipe prep time</label>
              <input name="recipe_prep_time" value={recipe?.recipe_prep_time} onChange={handleIntChange} type="number" />
            </div>
            <div className="form-input">
              <label>recipe cook time</label>
              <input name="recipe_cook_time" value={recipe?.recipe_cook_time} onChange={handleIntChange} type="number" />
            </div>
            <div className="form-input">
              <label>recipe total time</label>
              <input name="recipe_total_time" value={recipe?.recipe_total_time} onChange={handleIntChange} type="number" />
            </div>
          </div>
          <div className="form-input recipe-image">
            <label>recipe image</label>
            <img src={asset ? asset : recipe?.recipe_image ? recipe?.recipe_image : imgUplPlchldr} alt="recipe-image" className="recipe-image-asset" />
            <input name='recipe_image' onChange={handleImgUpld} type="file" />
          </div>
          <div className="form-input recipe-description">
            <label>recipe description</label>
            <textarea name="recipe_description" value={recipe?.recipe_description} onChange={handleChange} placeholder="recipe description" />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"categories"} accordionState={accordionDrawers[1]}>
        <div id="recipe-categories" className="list-editor">
          <div className="form-input recipe-categories">
            <ListEditor list={recipe?.recipe_categories} listTitle={"categories"} editorCb={handleCategories} />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"tools"} accordionState={accordionDrawers[2]}>
        <div id="recipe-tools" className="list-editor">
          <div className="form-input recipe-tools">
            <ListEditor list={recipe?.recipe_tools} listTitle={"tools"} editorCb={handleTools} />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"ingredients"} accordionState={accordionDrawers[3]}>
        <div id="recipe-ingredients" className="list-editor">
          <div className="form-input recipe-ingredients">
            <ListEditor list={recipe?.recipe_ingredients} listTitle={"ingredients"} editorCb={handleIngredients} />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"instructions"} accordionState={accordionDrawers[4]}>
        <div id="recipe-steps" className="list-editor">
          <div className="form-input recipe-instructions">
            <ListEditor list={recipe?.recipe_instructions} listTitle={"instructions"} isOrderedList isLongInput editorCb={handleInstructions} />
          </div>
        </div>
      </AccordionDrawer>
      <div className="form-action">
        <Button variant="contained" type="submit" className="recipe-submit-btn">
          submit
        </Button>
      </div>
    </form>
  )
}

export default RecipeForm;

import { useContext } from "react";
import { accordionContext, recipeContext } from "../../state/contexts";
import { useAmplify, useBool } from "../../utils/customhooks";
import { ListEditor } from "../lists";
import { AccordionControll, AccordionDrawer } from "../accordion";
import imgUplPlchldr from "../../assets/images/upload_image.png";
import { Button } from "@mui/material";
import "./RecipeForm.css";
import { FormInput } from "../form";

const RecipeForm = () => {
  const { recipe, setRecipe, isNewRecipe, asset, user } = useContext(recipeContext);
  const { addAsset, addRecipe, updateRecipe } = useAmplify();
  const { accordionDrawers } = useContext(accordionContext);
  const {
    isTruthy: hasFailedAttempt,
    setTruthy: setHasFailedAttempt,
    setNotTruthy: setNotHasFailedAttempt,
  } = useBool();

  const validFields = {
    recipeName: recipe?.recipe_name?.length > 2,
    recipeDescription: recipe?.recipe_description?.length > 19,
    recipePrepTime: Number.isInteger(recipe?.recipe_prep_time),
    recipeCookTime: Number.isInteger(recipe?.recipe_cook_time),
    recipeTotalTime: Number.isInteger(recipe?.recipe_total_time),
    recipeCategories: recipe?.recipe_categories?.length > 0,
    recipeIngredients: recipe?.recipe_ingredients?.length > 2,
    recipeInstructions: recipe?.recipe_instructions?.length > 0,
  };

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleIntChange = (e) => setRecipe({ ...recipe, [e.target.name]: parseInt(e.target.value) });

  const handleImgUpld = (e) => {
    const file = e.target.files[0];
    if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
      const filename = `${recipe?.recipe_author || user?.user_id}-${file.name}`;
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
    const formFieldsValid = Object.values(validFields);
    const isRecipeValid = !formFieldsValid.includes(false);
    if (isRecipeValid) {
      setNotHasFailedAttempt();
      await setRecipe(delete recipe?.recipe_image); 
      await setRecipe({ ...recipe, recipe_author: user?.user_id })   
      isNewRecipe ? await addRecipe(recipe) : await updateRecipe(recipe);
      alert('recipe updated');
    } else {
      setHasFailedAttempt();
    }
  };

  const validateListItem = (item) => item.length > 2;

  return(
    <form onSubmit={handleSubmit} className="recipe-form">
      <AccordionControll />
      <AccordionDrawer accordionLabel={"general"} accordionState={accordionDrawers[0]}>
        <div id="general" className="form-section">
          <FormInput 
            value={recipe?.recipe_name} 
            validCondition={recipe?.recipe_name?.length > 2} 
            validationMessage={"*Please enter a recipe name with three or more characters."}
            inputName={"recipe_name"} 
            placeHolder={"recipe name"}
            inputType={"text"}
            label={"recipe name"}
            handleChangeCb={handleChange} 
            inputId={"recipe-name"} 
          />
          <div className="form-input recipe-time">
            <FormInput 
              value={recipe?.recipe_prep_time}
              validCondition={Number.isInteger(recipe?.recipe_prep_time)}
              validationMessage={"*Please enter an integer"}
              inputName={"recipe_prep_time"}
              inputType={"number"}
              label={"recipe prep time"}
              handleChangeCb={handleIntChange}
              inputId={"recipe-prep-time"}
            />
            <FormInput 
              value={recipe?.recipe_cook_time}
              validCondition={Number.isInteger(recipe?.recipe_cook_time)}
              validationMessage={"*Please enter an integer"}
              inputName={"recipe_cook_time"}
              inputType={"number"}
              label={"recipe cook time"}
              handleChangeCb={handleIntChange}
              inputId={"recipe-cook-time"}
            />
            <FormInput 
              value={recipe?.recipe_total_time}
              validCondition={Number.isInteger(recipe?.recipe_total_time)}
              validationMessage={"*Please enter an integer"}
              inputName={"recipe_total_time"}
              inputType={"number"}
              label={"recipe total time"}
              handleChangeCb={handleIntChange}
              inputId={"recipe-total-time"}
            />
          </div>
          <div className="form-input recipe-image">
            <label>recipe image</label>
            <img src={asset ? asset : recipe?.recipe_image ? recipe?.recipe_image : imgUplPlchldr} alt="recipe-image" className="recipe-image-asset" />
            <input name='recipe_image' onChange={handleImgUpld} type="file" accept="image/*" className="file-upload" />
          </div>
          <FormInput 
            value={recipe?.recipe_description} 
            validCondition={recipe?.recipe_description?.length > 2} 
            validationMessage={"*Please enter a recipe description of 20 or more characters."}
            inputName={"recipe_description"} 
            isLongInput
            placeHolder={"recipe description"}
            inputType={"text"}
            label={"recipe description"}
            handleChangeCb={handleChange} 
            inputId={"recipe-description"} 
          />
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"categories"} accordionState={accordionDrawers[1]}>
        <div id="recipe-categories" className="list-editor">
          <div className="form-input recipe-categories">
            <ListEditor
              list={recipe?.recipe_categories} 
              listTitle={"categories"} 
              editorCb={handleCategories} 
              itemValidation={validateListItem}
              fieldValidation={recipe?.recipe_categories?.length > 0}
              itemValidationMessage={"*Please add a category that contains three or more characters."}
              fieldValidationMessage={'*Please add at least one category'}
              showFieldValidationMessage={hasFailedAttempt}
            />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"tools"} accordionState={accordionDrawers[2]}>
        <div id="recipe-tools" className="list-editor">
          <div className="form-input recipe-tools">
            <ListEditor 
              list={recipe?.recipe_tools} 
              listTitle={"tools"} 
              editorCb={handleTools} 
              itemValidation={validateListItem}
              fieldValidation={true}
              itemValidationMessage={"*Please add a tool that contains three or more characters."}
              fieldValidationMessage={''}
              showFieldValidationMessage={hasFailedAttempt}
            />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"ingredients"} accordionState={accordionDrawers[3]}>
        <div id="recipe-ingredients" className="list-editor">
          <div className="form-input recipe-ingredients">
            <ListEditor 
              list={recipe?.recipe_ingredients} 
              listTitle={"ingredients"} 
              editorCb={handleIngredients}
              itemValidation={validateListItem}
              fieldValidation={recipe?.recipe_ingredients?.length > 2}
              itemValidationMessage={"*Please add an ingredient that contains three or more characters."}
              fieldValidationMessage={'*Please add at least three ingredients'}
              showFieldValidationMessage={hasFailedAttempt} 
            />
          </div>
        </div>
      </AccordionDrawer>
      <AccordionDrawer accordionLabel={"instructions"} accordionState={accordionDrawers[4]}>
        <div id="recipe-steps" className="list-editor">
          <div className="form-input recipe-instructions">
            <ListEditor 
              list={recipe?.recipe_instructions} 
              listTitle={"instructions"} 
              isOrderedList 
              isLongInput 
              editorCb={handleInstructions} 
              itemValidation={validateListItem}
              fieldValidation={recipe?.recipe_instructions?.length > 0}
              itemValidationMessage={"*Please add an instruction that contains three or more characters."}
              fieldValidationMessage={'*Please add at least one instruction'}
              showFieldValidationMessage={hasFailedAttempt}
            />
          </div>
        </div>
      </AccordionDrawer>
      <div className="form-action">
        {hasFailedAttempt && <span className="error">*Please address errors before submitting.</span>}
        <Button variant={"contained"} type="submit" color={hasFailedAttempt ? "danger" : "primary"} className="recipe-submit-btn">
          submit
        </Button>
      </div>
    </form>
  )
}

export default RecipeForm;

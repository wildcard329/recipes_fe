import { useContext, useEffect } from "react";
import { recipeContext, formContext } from "../../state/contexts";
import { useAmplify } from "../../utils/customhooks";
import { ListEditor } from "../lists";
import { AppButton } from "../button";
import { recipeFormTabs } from "../../utils/constants/recipeConstants.js";
import imgUplPlchldr from "../../assets/images/upload_image.png";
import FormMenu from "../form/FormMenu";
import "./RecipeForm.css";

const RecipeForm = () => {
  const { recipe, setRecipe, isNewRecipe } = useContext(recipeContext);
  const { currentTabId, setTabs, updateTabId, setFormFields, completeFormSection, tabs } = useContext(formContext);
  const { addAsset, addRecipe, updateRecipe } = useAmplify();

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

  const isNextEnabled = {
    general: {
      index: 0,
      section: "general",
      isNextAvailable: recipe?.recipe_name?.length > 7 && recipe?.recipe_description?.length > 50 && !isNaN(recipe?.recipe_prep_time) && !isNaN(recipe?.recipe_cook_time) && !isNaN(recipe?.recipe_total_time),
    },
    image: {
      index: 1,
      section: "image",
      isNextAvailable: true,
    },
    categories: {
      index: 2,
      section: "categories",
      isNextAvailable: recipe?.recipe_categories?.length > 0,
    },
    tools: {
      index: 3,
      section: "tools",
      isNextAvailable: true,
    },
    ingredients: {
      index: 4,
      section: "ingredients",
      isNextAvailable: recipe?.recipe_ingredients?.length > 3,
    },
    instructions: {
      index: 5,
      section: "instructions",
      isNextAvailable: recipe?.recipe_instructions?.length > 0,
    },
    review: {
      index: 6,
      section: "review",
      isNextAvailable: true,
    },
  };

  const unlockTab = (id) => {
    console.log('id ', id);
    const updatedTabs = tabs.map((tab) => tab.id === id ? { ...tab, isLocked: false } : tab );
    console.log('data ', updatedTabs);
    setTabs(updatedTabs);
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

  const handleProceed = (currIndex) => {
    const currField = Object.values(isNextEnabled).find((field) => field.index === currIndex);
    if (currField.isNextAvailable) {
      updateTabId(currIndex+1);
      completeFormSection(currField.section, true);
      unlockTab(currIndex+1);
    };
  };

  useEffect(() => {
    setTabs(recipeFormTabs);
    setFormFields(isNextEnabled);
  }, []);

  return(
    <div className="recipe-form-wrapper">
      <div className="tab-row">
        <FormMenu tabs={tabs} currentTabId={currentTabId} />
      </div>
      <form onSubmit={handleSubmit} className="recipe-form">
        {currentTabId === 0 ?
        <div id="general" className="form-section">
          <div className="form-input recipe-name">
            <label>recipe name</label>
            <input name="recipe_name" value={recipe?.recipe_name} onChange={handleChange} placeholder="recipe name" />
          </div>
          <div className="form-input recipe-description">
            <label>recipe description</label>
            <textarea name="recipe_description" value={recipe?.recipe_description} onChange={handleChange} placeholder="recipe description" />
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
          <button className="cta-btn" type="button" disabled={!isNextEnabled.general.isNextAvailable} onClick={() => handleProceed(0)}>next</button>
        </div>
          : currentTabId === 1 ?
        <div id="recipe-image">
          <label>recipe image</label>
          <img src={recipe?.recipe_image ? recipe?.recipe_image : imgUplPlchldr} alt="recipe-image" className="recipe-image-asset" />
          <input name='recipe_image' onChange={handleImgUpld} type="file" />
          <div className="btn-row">
            <button type="button" disabled={!isNextEnabled.image.isNextAvailable} onClick={() => handleProceed(1)}>next</button>
          </div>
        </div>
          : currentTabId === 2 ?
        <div id="recipe-categories" className="list-editor">
          <div className="form-input recipe-categories">
            <ListEditor list={recipe?.recipe_categories} listTitle={"categories"} editorCb={handleCategories} />
            <button type="button" disabled={!isNextEnabled.categories.isNextAvailable} onClick={() => handleProceed(2)}>next</button>
          </div>
        </div>
          : currentTabId === 3 ?
        <div id="recipe-tools" className="list-editor">
          <div className="form-input recipe-tools">
            <ListEditor list={recipe?.recipe_tools} listTitle={"tools"} editorCb={handleTools} />
            <button className="cta-btn" type="button" disabled={!isNextEnabled.tools.isNextAvailable} onClick={() => handleProceed(3)}>next</button>
          </div>
        </div>
          : currentTabId === 4 ?
        <div id="recipe-ingredients" className="list-editor">
          <div className="form-input recipe-ingredients">
            <ListEditor list={recipe?.recipe_ingredients} listTitle={"ingredients"} editorCb={handleIngredients} />
            <button className="cta-btn" type="button" disabled={!isNextEnabled.ingredients.isNextAvailable} onClick={() => handleProceed(4)}>next</button>
          </div>
        </div>
          : currentTabId === 5 ?
        <div id="recipe-instructions" className="list-editor">
          <div className="form-input recipe-instructions">
            <ListEditor list={recipe?.recipe_instructions} listTitle={"instructions"} isOrderedList isLongInput editorCb={handleInstructions} />
            <button className="cta-btn" type="button" disabled={!isNextEnabled.instructions.isNextAvailable} onClick={() => handleProceed(5)}>next</button>
          </div>
        </div>
          : currentTabId === 6 ?
        <>
          <div className="form-action">
            <AppButton btnLabel={"submit"} classname={"primary"} btnType="submit" />
          </div>
        </>
          : null
        }
      </form>
    </div>
  )
}

export default RecipeForm;

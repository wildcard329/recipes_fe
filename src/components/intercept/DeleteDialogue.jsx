import { useState } from "react";
import { Button } from "@mui/material";
import { RouterLink } from "../router";
import { useAmplify } from "../../utils/customhooks";
import "./DeleteDialogue.css";

const DeleteDialogue = ({ recipe }) => {
  // this component needs refactoring so it can work with any entity and not just recipes
  const { deleteRecipe } = useAmplify();
  
  const [serverReq, setServerReq] = useState({
    isDelReq: false,
    isDeleting: false,
    isDeleted: false,
  });

  const handleInitDelReq = () => setServerReq({ isDelReq: true, isDeleting: false, isDeleted: false });
  
  const handleCancelDelReq = () => setServerReq({ isDelReq: false, isDeleting: false, isDeleted: false });

  const handleDelReq = async () => {
    await setServerReq({ isDelReq: false, isDeleting: true, isDeleted: false });
    await deleteRecipe(recipe?.recipe_author, recipe?.recipe_id);
    await setServerReq({ isDelReq: false, isDeleting: false, isDeleted: true });
  };

  const { isDelReq, isDeleting, isDeleted } = serverReq;

  return(
    <div className="dialogue-box">
      {isDelReq || isDeleted ? <span className={`dialogue-message ${isDelReq && "danger-message"}`}>{isDelReq ? `Delete ${recipe?.recipe_name}?` : isDeleted ? `${recipe?.recipe_name} deleted` : null}</span> : null}
      <Button 
        className="dialogue" 
        style={{ color: "white" }}
        disabled={isDeleted || isDeleting}
        variant="contained"
        color={`${isDelReq ? "danger" : "accent"}`}
        onClick={isDeleted ? null : isDelReq ? handleDelReq : null}
      >
        {isDeleted ?
          "edit"
        : isDelReq ?
          "yes"
        :
          <RouterLink classname={"accent-btn-link"} label={"edit"} path={`/recipes/${recipe?.recipe_id}/edit`} state={recipe} /> 
        }
      </Button>
      <Button 
        className="dialogue"
        style={{ color: "white" }}
        disabled={isDeleted || isDeleting}
        variant="contained"
        color={`${isDelReq ? "accent" : "danger"}`} 
        onClick={isDeleted ? null : isDelReq ? handleCancelDelReq : handleInitDelReq}
      >
        {isDeleted ?
          "delete"
        : isDelReq ?
          "no"
        : isDeleting ?
          "deleting"
        :
          "delete"
        }
      </Button>
    </div>
  )
}

export default DeleteDialogue;

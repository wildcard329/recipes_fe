import { useContext } from "react";
import { ingredientContext } from "../../state/contexts";
import assetNotAvailable from "../../assets/images/img_unavailable.jpg";
import "./IngredientDisplay.css";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material"


const IngredientDisplay = () => {
  const { selectedIngredient } = useContext(ingredientContext);

  return(
    <div className="ingredients-data">
      {!!selectedIngredient?.ingredient_id ?
        <Card>
          <CardHeader className="capitalize" title={selectedIngredient?.ingredient_name} />
          <CardMedia component="img" height="194" image={selectedIngredient.ingredient_img_key ? selectedIngredient?.ingredient_image : assetNotAvailable} alt={`${selectedIngredient?.ingredient_name}-image`} />
          <CardContent>
            <Typography>
              {selectedIngredient?.ingredient_description}
            </Typography>
          </CardContent>
        </Card>
      :
        null  
      }
    </div>
  )
}

export default IngredientDisplay;

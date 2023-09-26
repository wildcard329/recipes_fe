import { useContext, useEffect } from "react";
import { pageNavContext } from "../state/contexts";
import { IngredientProvider } from "../state/providers";
import { IngredientDisplay, IngredientList } from "../components/ingredient";
import { Grid } from "@mui/material";
import "./IngredientsPage.css";

const IngredientsPage = () => {  
  const { setNavLinks } = useContext(pageNavContext);
  
  useEffect(() => {
    setNavLinks([]);
  }, []);

  return(
    <IngredientProvider>
      <Grid className="ingredients-page-wrapper" container direction={"row-reverse"}>
        <Grid item xs={12} md={6}>
          <IngredientDisplay />
        </Grid>
        <Grid item xs={12} md={6}>
          <IngredientList />
        </Grid>
      </Grid>
    </IngredientProvider>
  )
}

export default IngredientsPage;

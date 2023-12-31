import logo from "../../assets/images/recipe-rollout-logo.jpg";
import logo2 from "../../assets/images/logo_asset_2.png";
import logo3 from "../../assets/images/logo_asset_3.png";
import "./AppLogo.css";
import { useBool } from "../../utils/customhooks";

const AppLogo = () => {


  return(
      <>
        <img src={logo2} alt="recipe-rollout-logo-2" height={31} width={137} className="logo-long" />
        <img src={logo3} alt="recipe-rollout-logo-3" height={31} width={137} className="logo-long" />
      </>
  )
}

export default AppLogo;

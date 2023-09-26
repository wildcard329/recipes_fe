import { useContext } from "react";
import { accordionContext } from "../../state/contexts";
import { Button } from "@mui/material";
import "./AccordionControl.css";

const AccordionControl = () => {
  const { openAllDrawers, closeAllDrawers } = useContext(accordionContext);
  return(
    <div>
      <Button variant="outlined" onClick={openAllDrawers}>expand all</Button>
      <Button variant="outlined" onClick={closeAllDrawers}>collapse all</Button>
    </div>
  )
}

export default AccordionControl;

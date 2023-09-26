import { useContext } from "react";
import { accordionContext } from "../../state/contexts";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { AppButton } from "../button";
import "./AccordionDrawer.css";
import { Button } from "@mui/material";

const AccordionDrawer = ({ children, accordionLabel, accordionState }) => {
  const { toggleDrawer } = useContext(accordionContext);

  return(
    <>
      <div className="accordion-container">
        {accordionState?.isOpen ?
          <div className="accordion-collapse">
            {/* <AppButton btnCb={() => toggleDrawer(accordionState?.id)} classname={"icon-btn"} btnLabel={<CgMathMinus />} /> */}
            <Button variant="outlined" onClick={() => toggleDrawer(accordionState?.id)} className="icon-btn"><CgMathMinus /></Button>
          </div>
        :
          <div className="accordion-drawer">
            <span>{accordionLabel}</span>
            <Button variant="outlined" onClick={() => toggleDrawer(accordionState?.id)} className="icon-btn"><CgMathPlus /></Button>
            {/* <AppButton btnCb={()  => toggleDrawer(accordionState?.id)} classname={"icon-btn"} btnLabel={<CgMathPlus />} /> */}
          </div>}
      </div>
      {accordionState?.isOpen ? children : null}
    </>
  )
}

export default AccordionDrawer;

import { useContext } from "react";
import { accordionContext } from "../../state/contexts";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { AppButton } from "../button";
import "./AccordionDrawer.css";

const AccordionDrawer = ({ children, accordionLabel, shouldRender, accordionState }) => {
  const { toggleDrawer } = useContext(accordionContext);

  return(
    <>
      <div className="accordion-container">
        {accordionState?.isOpen ?
          <div className="accordion-collapse">
            <AppButton btnCb={() => toggleDrawer(accordionState?.id)} classname={"icon-btn"} btnLabel={<CgMathMinus />} />
          </div>
        :
          <div className="accordion-drawer">
            <span>{accordionLabel}</span>
            <AppButton btnCb={()  => toggleDrawer(accordionState?.id)} classname={"icon-btn"} btnLabel={<CgMathPlus />} />
          </div>}
      </div>
      {accordionState?.isOpen ? children : null}
    </>
  )
}

export default AccordionDrawer;

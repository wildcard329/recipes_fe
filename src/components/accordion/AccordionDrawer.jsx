import { useContext } from "react";
import { accordionContext } from "../../state/contexts";
import { BsChevronUp, BsChevronDown } from "react-icons/bs"
import "./AccordionDrawer.css";
import { Button } from "@mui/material";

const AccordionDrawer = ({ children, accordionLabel, accordionState }) => {
  const { toggleDrawer } = useContext(accordionContext);

  return(
    <>
      <div className="accordion-container">
        {accordionState?.isOpen ?
          <div className="accordion-collapse">
            <Button onClick={() => toggleDrawer(accordionState?.id)} className="icon-btn"><BsChevronUp fill="#335c67" /></Button>
          </div>
        :
          <div className="accordion-drawer" onClick={() => toggleDrawer(accordionState?.id)}>
            <span>{accordionLabel}</span>
            <Button className="icon-btn"><BsChevronDown fill="#335c67" /></Button>
          </div>}
      </div>
      {accordionState?.isOpen ? children : null}
    </>
  )
}

export default AccordionDrawer;

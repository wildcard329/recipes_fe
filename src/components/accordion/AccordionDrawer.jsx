import { useBool } from "../../utils/customhooks";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { AppButton } from "../button";
import "./AccordionDrawer.css";

const AccordionDrawer = ({ children, accordionLabel, shouldRender }) => {
  const {
    isTruthy: shouldShow,
    setTruthy: setShouldShow,
    setNotTruthy: setShouldNotShow,
  } = useBool();

  return(
    <>
      <div className="accordion-container">
        {shouldRender || shouldShow ?
          <div className="accordion-collapse">
            <AppButton btnCb={setShouldNotShow} classname={"icon-btn"} btnLabel={<CgMathMinus />} />
          </div>
        :
          <div className="accordion-drawer">
            <span>{accordionLabel}</span>
            <AppButton btnCb={setShouldShow} classname={"icon-btn"} btnLabel={<CgMathPlus />} />
          </div>}
      </div>
      {shouldRender || shouldShow ? children : null}
    </>
  )
}

export default AccordionDrawer;

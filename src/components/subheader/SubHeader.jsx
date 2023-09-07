import { useContext, useEffect } from "react";
import { useBool, useScrollListener } from "../../utils/customhooks";
import { BsArrowDownRightSquareFill, BsArrowUpLeftSquareFill } from "react-icons/bs";
import { pageNavContext } from "../../state/contexts";
import "./SubHeader.css";
import SubHeaderLinks from "./SubHeaderLinks";

const SubHeader = () => {
  const {
    isTruthy: isExpanded,
    setTruthy: setIsExpanded,
    setNotTruthy: setIsNotExpanded,
  } = useBool();
  const {
    isTruthy: isFocused,
    setTruthy: setIsFocused,
    setNotTruthy: setIsNotFocused,
  } = useBool();
  const { navLinks } = useContext(pageNavContext);
  const { isScrolling } = useScrollListener();

  const handleMenuClose = () => {
    setIsNotExpanded();
    setIsNotFocused();
  };
  return(
    <>
      {navLinks.length > 0 ?
        <div className="sub-header" onMouseEnter={setIsFocused} onMouseLeave={setIsNotFocused}>
          {!isExpanded && (isScrolling || isFocused) && 
            <div className="contracted">
              <BsArrowDownRightSquareFill fill="#335c67" onClick={setIsExpanded} className="sub-header-icon" />
            </div>}
          {isExpanded && 
            <div className="expanded">
              <SubHeaderLinks navLinks={navLinks} />
              <BsArrowUpLeftSquareFill fill="#335c67" onClick={handleMenuClose} className="sub-header-icon right-corner" />
            </div>}
        </div>
      :
        null}
    </>
  )
}

export default SubHeader;

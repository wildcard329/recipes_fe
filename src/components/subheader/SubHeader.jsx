import { useContext, useEffect } from "react";
import { useBool, useReactRouter, useScrollListener } from "../../utils/customhooks";
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
  const { routerPath } = useReactRouter();
  const { navLinks } = useContext(pageNavContext);
  const { isScrolling } = useScrollListener();

  const handleMenuClose = () => {
    setIsNotExpanded();
    setIsNotFocused();
  };

  useEffect(() => {
    handleMenuClose();
  }, [routerPath]);
  return(
    <>
      {navLinks.length > 0 ?
        <div className="sub-header">
          {!isExpanded && (isScrolling || isFocused ? 
            <div className="contracted" onMouseLeave={setIsNotFocused}>
              <BsArrowDownRightSquareFill fill="#335c67" onClick={setIsExpanded} className="sub-header-icon expanding-icon" />
            </div>
          :
            <div className="contracted-trigger" onDoubleClick={setIsExpanded} onMouseEnter={setIsFocused}></div>  
          )}
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

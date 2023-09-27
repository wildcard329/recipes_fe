import { useContext, useEffect, Fragment } from "react";
import { useBool, useReactRouter, useScrollListener } from "../../utils/customhooks";
import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";
import { pageNavContext } from "../../state/contexts";
import SubHeaderLinks from "./SubHeaderLinks";
import "./SubHeader.css";
import { AppButton } from "../button";

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

  const btnStyleOverRide = {
    maxWidth: '35px'
  };

  useEffect(() => {
    handleMenuClose();
  }, [routerPath, isScrolling]);
  return(
    <>
      {navLinks.length > 0 ?
        <div className="sub-header">
          {!isExpanded && (isScrolling || isFocused ? 
            <div className="contracted" onMouseLeave={setIsNotFocused}>
              <AppButton styleOverRide={btnStyleOverRide} variant="contained" color="accent" classname={"sub-header-btn"} btnCb={setIsExpanded} btnLabel={<BsArrowDownRight className="react-icon" fill="white" />} />
            </div>
          :
            <div className="contracted-trigger" onDoubleClick={setIsExpanded} onMouseEnter={setIsFocused}></div>  
          )}
          {isExpanded && 
            <div className="expanded">
              <SubHeaderLinks navLinks={navLinks} />
              <div className="right-corner">
                <AppButton styleOverRide={btnStyleOverRide} variant="contained" color="accent" classname={"sub-header-btn"} btnCb={setIsNotExpanded} btnLabel={<BsArrowUpLeft className="react-icon" fill="white" />} />
              </div>
            </div>}
        </div>
      :
        null}
    </>
  )
}

export default SubHeader;

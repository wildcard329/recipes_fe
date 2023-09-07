import { useContext } from "react";
import { useBool } from "../../utils/customhooks";
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
  const { navLinks } = useContext(pageNavContext);

  return(
    <>
      {navLinks.length > 0 ?
        <div className="sub-header">
          {!isExpanded && <BsArrowDownRightSquareFill fill="#335c67" onClick={setIsExpanded} className="sub-header-icon" />}
          {isExpanded && 
            <div className="expanded">
              <SubHeaderLinks navLinks={navLinks} />
              <BsArrowUpLeftSquareFill fill="#335c67" onClick={setIsNotExpanded} className="sub-header-icon right-corner" />
            </div>}
        </div>
      :
        null}
    </>
  )
}

export default SubHeader;

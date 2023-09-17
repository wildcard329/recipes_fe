import { useContext, useEffect, useRef } from "react";
import { formContext } from "../../state/contexts";
import "./FormMenu.css";
import FormTab from "./FormTab";

const FormMenu = ({ currentTabId, tabs }) => {
  const formMenuEl = useRef();
  return(
    <ul className="form-tab-menu" ref={formMenuEl}>
      {tabs?.map((tab) => <FormTab label={tab.name} isActive={tab.id === currentTabId} isEnabled={!tab.isLocked} tabId={tab.id} containerEl={formMenuEl} />)}
    </ul>
  )
}

export default FormMenu;

import { useContext } from "react";
import { formContext } from "../../state/contexts";
import "./FormMenu.css";
import FormTab from "./FormTab";

const FormMenu = () => {
  const { tabs, currentTabId } = useContext(formContext);
  return(
    <ul className="form-tab-menu">
      {tabs?.map((tab) => <FormTab label={tab.name} isActive={tab.id === currentTabId} isEnabled={!tab.isLocked} tabId={tab.id} />)}
    </ul>
  )
}

export default FormMenu;

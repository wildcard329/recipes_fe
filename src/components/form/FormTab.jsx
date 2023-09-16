import { useEffect, useContext } from "react";
import { formContext } from "../../state/contexts";
import "./FormTab.css";

const FormTab = ({ label, isEnabled, isActive, tabId }) => {
  useEffect(() => {
    console.log('is active ', tabId, isActive);
  }, [isActive]);
  const { updateTabId } = useContext(formContext);

  return(
    <li>
      <button 
        disabled={isEnabled} 
        onClick={() => isEnabled ? updateTabId(tabId) : null} 
        className={`form-tab-item ${!isEnabled ? 'locked' : isActive ? 'current-tab' : ''}`}
      >
        {label}
      </button>
    </li>
  )
}

export default FormTab;

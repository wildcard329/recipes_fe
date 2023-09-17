import { useEffect, useContext, useRef } from "react";
import { formContext } from "../../state/contexts";
import "./FormTab.css";

const FormTab = ({ label, isEnabled, isActive, tabId, containerEl }) => {
  const tabEl = useRef();

  const scrollToSelf = () => {
    // const containerNode = containerEl.current;
    // const currentActiveNode = tabEl.current;
    // const prevActiveNode = Array.from(containerNode.childNodes).find((node) => parseInt(node.id) === prevTabId)
    // const currentActivePosition = currentActiveNode.getBoundingClientRect().left;
    // const prevActivePosition = prevActiveNode?.getBoundingClientRect().left;
    // console.log(currentActiveNode.getBoundingClientRect().right > prevActiveNode.getBoundingClientRect().right)
    containerEl.current.scrollTo(tabEl.current.getBoundingClientRect().right, 0);
    // if (currentActivePosition > prevActivePosition) {
    //   containerNode.scrollTo(currentActiveNode.left, 0)
    // } else {
    //   containerNode.scrollTo(currentActiveNode.right, 0)
    // }
  };

  useEffect(() => {
    scrollToSelf();
    console.log('is active ', tabId, isActive);
  }, [isActive]);
  const { updateTabId, prevTabId } = useContext(formContext);
  const goToTab = (tabIndex) => {
    console.log('enabled: ', isEnabled);
    if (isEnabled) {
      updateTabId(tabIndex);
    };
  };

  return(
    <li ref={tabEl} id={tabId}>
      <button 
        disabled={!isEnabled} 
        onClick={() => goToTab(tabId)} 
        className={`form-tab-item ${!isEnabled ? 'locked' : isActive ? 'current-tab' : ''}`}
      >
        {label}
      </button>
    </li>
  )
}

export default FormTab;

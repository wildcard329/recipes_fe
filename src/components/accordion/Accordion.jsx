import { AppButton } from "../button";
import "./Accordion.css";

const Accordion = () => {

  return(
    <div>
      <AppButton btnCb={null} btnLabel={"expand all"} />
      <AppButton btnCb={null} btnLabel={"collapse all"} />
    </div>
  )
}

export default Accordion;

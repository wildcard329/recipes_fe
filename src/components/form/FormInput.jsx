import { useRef } from "react";
import { useBool } from "../../utils/customhooks";
import "./FormInput.css";

const FormInput = ({ value, validCondition, validationMessage, inputName, placeHolder, isLongInput=false, inputType, label, handleChangeCb, inputId }) => {
  const {
    isTruthy: hasError,
    setTruthy: setHasError,
    setNotTruthy: setNotHasError,
  } = useBool();
  const inputRef = useRef();

  const handleValidate = () => {
    if (!validCondition) {
      inputRef.current.classList.add('invalid');
      setHasError();
    } else {
      inputRef.current.classList.remove('invalid');
      setNotHasError();
    };
  };

  return(
    <div className="form-input" id={inputId}>
      <label>{label}</label>
      {hasError && 
        <span className="error">{validationMessage}</span>
      }
      {isLongInput ?
        // unable to give error border styling through css, will investigate in the future, but using the ref and/or adding a class does not change the border color  
        <textarea style={hasError ? { borderColor: "#B20000"} : { borderColor: "gray" }} ref={inputRef} value={value} name={inputName} placeholder={placeHolder} onChange={handleChangeCb} onBlur={handleValidate} />
      :
        <input style={hasError ? { borderColor: "#B20000"} : { borderColor: "gray" }} ref={inputRef} value={value} name={inputName} placeholder={placeHolder} type={inputType} onChange={handleChangeCb} onBlur={handleValidate} />
      }
    </div>
  )
}

export default FormInput;
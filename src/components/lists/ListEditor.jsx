import { useState, useRef } from "react"
import { ListDisplay } from ".";
import { useBool } from "../../utils/customhooks";
import { Button } from "@mui/material";

const ListEditor = ({ list, listTitle, isOrderedList=false, isLongInput=false, editorCb, itemValidation, fieldValidation, itemValidationMessage, fieldValidationMessage, showFieldValidationMessage }) => {
  const [item, setItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef();
  const {
    isTruthy: isEditing,
    setTruthy: setIsEditing,
    setNotTruthy: setNotIsEditing,
  } = useBool();
  const {
    isTruthy: hasError,
    setTruthy: setHasError,
    setNotTruthy: setNotHasError,
  } = useBool();

  const handleEditItem = (index) => {
    setItem(list[index]);
    setEditIndex(index);
    setIsEditing();
    inputRef.current.focus();
  };

  const handleDeleteItem = async (index) => {
    await editorCb(list.filter((_, itemIndex) => itemIndex !== index));
    setEditIndex(null);
    setNotIsEditing();
    setItem('');
  };

  const handleError = () => {
    setHasError();
    inputRef.current.classList.add('invalid');
  };

  const handleRemoveError = () => {
    setNotHasError();
    inputRef.current.classList.remove('invalid');
  };

  const handleSuccess = () => {
    setItem('');
    handleRemoveError();
  };

  const handleBlur = () => {
    if (!fieldValidation) {
      handleError();
    } else {
      handleRemoveError();
    };
  };

  const handleAddItem = async () => {
    const isValidEntry = itemValidation(item);
    if (isEditing && isValidEntry) {
      await editorCb(list.map((listItem, index) => index === editIndex ? item : listItem));
      setEditIndex(null);
      setNotIsEditing();
      handleSuccess();
    } else if (isValidEntry) {
      await editorCb([ ...list, item ]);
      handleSuccess();
    } else {
      handleError();
    };
    inputRef.current.focus();
  };

  return(
    <div className="list-input">
      <ListDisplay title={listTitle} data={list} isEditing isOrderedList={isOrderedList} editItemCb={handleEditItem} deleteItemCb={handleDeleteItem} />
      {isLongInput ?
        <>
          <textarea ref={inputRef} style={hasError || showFieldValidationMessage && !fieldValidation ? { borderColor: "#B20000", backgroundColor: "#ffcccb" } : { borderColor: "gray" }} name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" onBlur={handleBlur} />
          <Button variant="outlined" className="editor-btn" onClick={handleAddItem}>
            {isEditing ? 'update' : 'add'} item
          </Button>
        </>
      :
        <div className="input-row">
          <input ref={inputRef} style={hasError || showFieldValidationMessage && !fieldValidation ? { borderColor: "#B20000", backgroundColor: "#ffcccb" } : { borderColor: "gray" }} name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" onBlur={handleBlur} />
          <Button variant="outlined" className="editor-btn" onClick={handleAddItem}>
            {isEditing ? 'update' : 'add'} item
          </Button>
        </div>} 
        {hasError && !fieldValidation || showFieldValidationMessage && !fieldValidation ? <span className="list-editor-error">{fieldValidationMessage}</span> : null}
        {hasError || showFieldValidationMessage && !fieldValidation ? <span className="list-editor-error">{itemValidationMessage}</span> : null
      }
    </div>
  )
}

export default ListEditor;

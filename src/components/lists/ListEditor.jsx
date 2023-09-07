import { useState } from "react"
import { ListDisplay } from ".";
import { AppButton } from "../button";
import { useBool } from "../../utils/customhooks";

const ListEditor = ({ list, listTitle, isOrderedList=false, isLongInput=false, editorCb }) => {
  const [item, setItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const {
    isTruthy: isEditing,
    setTruthy: setIsEditing,
    setNotTruthy: setNotIsEditing,
  } = useBool();

  const handleEditItem = (index) => {
    setItem(list[index]);
    setEditIndex(index);
    setIsEditing();
  };

  const handleDeleteItem = async (index) => {
    await editorCb(list.filter((_, itemIndex) => itemIndex !== index));
    setEditIndex(null);
    setNotIsEditing();
    setItem('');
  };

  const handleAddItem = async () => {
    if (isEditing) {
      await editorCb(list.map((listItem, index) => index === editIndex ? item : listItem));
      setItem('');
      setEditIndex(null);
      setNotIsEditing();
    } else {
      await editorCb([ ...list, item ]);
      setItem('');
    }
  };

  return(
    <div className="list-input">
      <ListDisplay title={listTitle} data={list} isEditing isOrderedList={isOrderedList} editItemCb={handleEditItem} deleteItemCb={handleDeleteItem} />
      {isLongInput ?
        <textarea name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" />
      :
        <input name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" />}
      <AppButton btnLabel={"add item"} classname={"secondary"} btnCb={handleAddItem} />
    </div>
  )
}

export default ListEditor;

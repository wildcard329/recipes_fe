import { useState } from "react"
import { ListDisplay } from ".";
import { AppButton } from "../button";
import { useBool } from "../../utils/customhooks";

const ListEditor = ({ list, listTitle, isOrderedList=false, isLongInput=false, editorCb }) => {
  const [items, setItems] = useState(list || [])
  const [item, setItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const {
    isTruthy: isEditing,
    setTruthy: setIsEditing,
    setNotTruthy: setNotIsEditing,
  } = useBool();

  const handleEditItem = (index) => {
    setItem(items[index]);
    setEditIndex(index);
    setIsEditing();
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, itemIndex) => itemIndex !== index));
    editorCb(items);
    setEditIndex(null);
    setNotIsEditing();
    setItem('');
  };

  const handleAddItem = () => {
    if (isEditing) {
      setItems(items.map((listItem, index) => index === editIndex ? item : listItem));
      setItem('');
      editorCb(items);
      setEditIndex(null);
      setNotIsEditing();
    } else {
      setItems([ ...items, item ]);
      setItem('');
      editorCb(items);
    }
  };

  return(
    <div className="list-input">
      <ListDisplay title={listTitle} data={items} isEditing isOrderedList={isOrderedList} editItemCb={handleEditItem} deleteItemCb={handleDeleteItem} />
      {isLongInput ?
        <textarea name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" />
      :
        <input name="item" value={item} onChange={(e) => setItem(e.target.value)} placeholder="add item" />}
      <AppButton btnLabel={"add item"} classname={"secondary"} btnCb={handleAddItem} />
    </div>
  )
}

export default ListEditor;

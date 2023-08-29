import "./list.css";
import { MdOutlineEdit } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti';

const ListDisplay = ({ title, data, isEditing=false, isOrderedList=false, editItemCb, deleteItemCb }) => 
  <div>
    <h3>{title}</h3>
    {isOrderedList ?
      <ol className="highlight-line ordered-list">
        {data?.map((item, index) => <li>{isEditing && <MdOutlineEdit fill="yellow" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="red" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ol>
    :
      <ul className="highlight-line unordered-list">
        {data?.map((item, index) => <li>{isEditing && <MdOutlineEdit fill="yellow" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="red" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ul>
    }
  </div>

export default ListDisplay;

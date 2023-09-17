import "./list.css";
import { MdOutlineEdit } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti';

const ListDisplay = ({ title, data, isEditing=false, isOrderedList=false, editItemCb, deleteItemCb }) => 
  <div>
    <h3>{title}</h3>
    {isOrderedList ?
      <ol className="highlight-line ordered-list">
        {data?.map((item, index) => <li key={`${item}-${index}`}>{isEditing && <MdOutlineEdit fill="#335c67" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="#335c67" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ol>
    :
      <ul className="highlight-line unordered-list">
        {data?.map((item, index) => <li key={`${item}-${index}`}>{isEditing && <MdOutlineEdit fill="#335c67" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="#335c67" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ul>
    }
  </div>

export default ListDisplay;

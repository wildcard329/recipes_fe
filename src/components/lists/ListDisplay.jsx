import { MdOutlineEdit } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti';
import "./list.css";

const ListDisplay = ({ title, data, isEditing=false, isOrderedList=false, editItemCb, deleteItemCb }) => 
  <div className='list-display'>
    {isEditing ? 
      <label>{title}</label>
    : 
      <h3>{title}</h3>
    }
    {isOrderedList && data?.length > 0 ?
      <ol className="highlight-line ordered-list">
        {data?.map((item, index) => <li key={`${item}-${index}`}>{isEditing && <MdOutlineEdit fill="black" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="black" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ol>
    : data?.length > 0 ?
      <ul className="highlight-line unordered-list">
        {data?.map((item, index) => <li key={`${item}-${index}`}>{isEditing && <MdOutlineEdit fill="black" onClick={() => editItemCb(index)} />}{isEditing && <TiDeleteOutline fill="black" onClick={() => deleteItemCb(index)} />}{item}</li>)}
      </ul>
    : 
      null
    }
  </div>

export default ListDisplay;

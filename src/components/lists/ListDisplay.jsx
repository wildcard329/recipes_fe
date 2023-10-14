import { MdOutlineEdit } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti';
import "./list.css";
import { Button } from '@mui/material';

const ListDisplay = ({ title, data, isEditing=false, isOrderedList=false, editItemCb, deleteItemCb }) => 
  <div className={isEditing ? 'editor-display' : 'list-display'}>
    {isEditing ? 
      <label>{title}</label>
    : 
      <h3>{title}</h3>
    }
    {isOrderedList && data?.length > 0 ?
      <ol className="highlight-line ordered-list">
        {data?.map((item, index) => 
          <li className={isEditing ? "editor-item li-col" : ""} key={`${item}-${index}`}>
            <span className='item-name'>{item}</span>
            {isEditing && 
              <div className='cta-row'>
                <Button onClick={() => editItemCb(index)}>
                  <MdOutlineEdit fill="black" size={30} />
                </Button>
                <Button onClick={() => deleteItemCb(index)}>
                  <TiDeleteOutline fill="black" size={30} />
                </Button>
              </div>
            }
          </li>)}
      </ol>
    : data?.length > 0 ?
      <ul className="highlight-line unordered-list">
        {data?.map((item, index) => 
          <li className={isEditing ? "editor-item" : ""} key={`${item}-${index}`}>
            {item}
            {isEditing && 
              <div className='cta-row'>
                <Button onClick={() => editItemCb(index)}>
                  <MdOutlineEdit fill="black" size={30} />
                </Button>
                <Button onClick={() => deleteItemCb(index)}>
                  <TiDeleteOutline fill="black" size={30} />
                </Button>
              </div>
            }
          </li>)}
      </ul>
    : 
      null
    }
  </div>

export default ListDisplay;

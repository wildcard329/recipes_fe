import "./list.css";

const UnorderedList = ({ title, data }) => 
  <div>
    <h3>{title}</h3>
    <ol className="highlight-line ordered-list">
      {data?.map((item) => <li>{item}</li>)}
    </ol>
  </div>

export default UnorderedList;

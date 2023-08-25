const UnorderedList = ({ title, data }) => 
  <div>
    <h3>{title}</h3>
    <ul className="highlight-line">
      {data?.map((item) => <li>{item}</li>)}
    </ul>
  </div>

export default UnorderedList;

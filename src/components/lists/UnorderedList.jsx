const UnorderedList = ({ title, data }) => 
  <div>
    <h5>{title}</h5>
    <ul>
      {data?.map((item) => <li>{item}</li>)}
    </ul>
  </div>

export default UnorderedList;

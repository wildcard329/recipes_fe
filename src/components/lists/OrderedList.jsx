const UnorderedList = ({ title, data }) => 
  <div>
    <h5>{title}</h5>
    <ol>
      {data?.map((item) => <li>{item}</li>)}
    </ol>
  </div>

export default UnorderedList;

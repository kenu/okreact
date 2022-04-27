import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);
  const { current: a } = useRef(['a']);
  console.log(a);

  function getId(str) {
    const idx = str.lastIndexOf('/');
    return str.substring(idx + 1);
  }

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_SERVER + '/people').then((res) => {
      console.log(res);
      setData(res.data._embedded.people);
    });
  }, [a]);

  const listItems = data.map((item, index) => (
    <>
      <li key={index}>
        <div>{item._links.self.href}</div>
        <Link to={'/update/' + getId(item._links.self.href)}>
          {`${index}: ${item.firstName}, ${item.lastName}`}
        </Link>
      </li>
    </>
  ));

  return (
    <>
      <h1>List!!!</h1>
      <ul>{listItems}</ul>
    </>
  );
};

export default List;

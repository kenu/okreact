import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);
  const { current: a } = useRef(['a']);
  console.log(a);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_SERVER + '/people').then((res) => {
      console.log(res);
      setData(res.data._embedded.people);
    });
  }, [a]);

  const listItems = data.map((item, index) => (
    <>
      <span>{JSON.stringify(item._links.self.href)}</span>
      <li key={index}>{`${index}: ${item.firstName}, ${item.lastName}`}</li>
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

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);
  const { current: a } = useRef(['a']);
  console.log(a);

  useEffect(() => {
    axios.get('http://localhost:8080/people').then((res) => {
      console.log(res);
      setData(res.data._embedded.people);
    });
  }, [a]);

  const listItems = data.map((item, index) => (
    <li key={index}>{`${item.firstName}, ${item.lastName}`}</li>
  ));

  return (
    <>
      <h1>List</h1>
      <ul>{listItems}</ul>
    </>
  );
};

export default List;

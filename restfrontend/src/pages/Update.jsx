import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const [params, setParams] = useState({ firstName: '', lastName: '' });
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_SERVER + '/people/' + id).then((res) => {
      setParams({ firstName: res.data.firstName, lastName: res.data.lastName });
    });
  }, [params.firstName, params.lastName]);
  function handleChange(e) {
    const params = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
    };
    axios
      .put(import.meta.env.VITE_API_SERVER + '/people/' + id, params)
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <>
      <h1>Update</h1>
      <input
        type="text"
        placeholder="firstName"
        id="firstName"
        value={params.firstName}
      />
      <input
        type="text"
        placeholder="lastName"
        id="lastName"
        value={params.lastName}
      />
      <button type="submit" onClick={handleChange}>
        Update
      </button>
    </>
  );
};

export default Update;

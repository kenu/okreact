import { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [params, setParams] = useState({firstName: '', lastName: ''});
  useEffect(() => {
    axios.get('http://localhost:8080/people/1').then((res) => {
      setParams({firstName: res.data.firstName, lastName: res.data.lastName});
    });
  }, [params.firstName, params.lastName]);
  function handleChange(e) {
    const params = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
    };
    axios.put('http://localhost:8080/people/1', params).then((res) => {
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
        onChange={(e) => setParams({...params, firstName: e.target.value})}
      />
      <input
        type="text"
        placeholder="lastName"
        id="lastName"
        value={params.lastName}
        onChange={(e) => setParams({...params, lastName: e.target.value})}
      />
      <button type="submit" onClick={handleChange}>
        Update
      </button>
    </>
  );
};

export default Update;

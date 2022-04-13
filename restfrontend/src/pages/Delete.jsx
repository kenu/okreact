import { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [id, setId] = useState('');
  function handleChange(e) {
    setId(document.getElementById('id').value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios.delete(`http://localhost:8080/people/${id}`).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <div>
      <h1>Delete</h1>
      <input type="text" placeholder="id" id="id" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}> Delete </button>
    </div>
  );
}

export default Delete;

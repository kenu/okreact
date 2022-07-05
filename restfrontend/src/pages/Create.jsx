import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  function handleChange(e) {
    const params = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
    };
    axios
      .post(import.meta.env.VITE_API_SERVER + '/people', params)
      .then((res) => {
        console.log(res.data);
        alert('Created!');
        navigate('/list');
      });
  }
  return (
    <>
      <h1>Create!!!</h1>
      <input type="text" placeholder="firstName" id="firstName" />
      <input type="text" placeholder="lastName" id="lastName" />
      <button type="submit" onClick={handleChange}>
        Submit
      </button>
    </>
  );
};

export default Create;

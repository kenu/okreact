import axios from 'axios';

const Create = () => {
  function handleChange(e) {
    const params = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
    };
    axios.post('http://localhost:8080/people', params).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
      <h1>Create</h1>
      <input type="text" placeholder="firstName" id="firstName" />
      <input type="text" placeholder="lastName" id="lastName" />
      <button type="submit" onClick={handleChange}>
        Submit
      </button>
    </>
  );
};

export default Create;

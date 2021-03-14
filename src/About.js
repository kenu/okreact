import React, { useState, useEffect } from 'react';
import HeaderCommon from './HeaderCommon.js';

function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally((data) => {
        console.log('data', data);
        setLoading(false);
      });
  }, []);

  console.log(loading, error, data);
  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <>
      <HeaderCommon></HeaderCommon>
      <h2>About 2</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default About;

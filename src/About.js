import React from 'react';
import useFetch from 'use-http';
import HeaderCommon from './HeaderCommon.js';

function About() {
  const { isLoading, error, data = [] } = useFetch('/data.json', {}, []);

  console.log(isLoading, error, data);
  if (isLoading) return 'Loading...';
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

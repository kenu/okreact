import { useState } from 'react'

function Section() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>안녕 Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count: {count}
        </button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
    </>
  );
}

export default Section;

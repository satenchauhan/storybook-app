import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_CHRM_API_KEY);
  return (
    <>
      <h2>Vite + React + Storybook + Chronatic</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        This is demo app for Storybook with chromatic
      </p>
    </>
  );
}

export default App;

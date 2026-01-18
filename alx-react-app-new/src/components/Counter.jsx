// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state at 0

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ margin: '5px', padding: '10px 20px' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
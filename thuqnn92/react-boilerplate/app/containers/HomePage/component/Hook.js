import React, { useState } from 'react';
function Hook() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h1>Hook</h1>
      <h1>{Count}</h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          setCount(Count - 1);
        }}
      >
        DOWN
      </button>
    </div>
  );
}
export default Hook;

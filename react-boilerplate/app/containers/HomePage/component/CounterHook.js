import React from 'react';

function CounterHook() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hook</h1>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        decrement
      </button>
    </div>
  );
}
export default CounterHook;

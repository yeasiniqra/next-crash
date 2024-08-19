"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
        <div>
            <h2>Counter: {counter}</h2>
            <button
                className="border rounded p-2 border-black m-2"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
            <button
                className="border rounded p-2 border-black m-2"
                onClick={() => setCounter(counter - 1)}
            >
            -
            </button>
        </div>
  );
};

export default Counter;

"use client"; 
import { useReducer } from 'react';


interface State {
  count: number;
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };


const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Counter App with useReducer</h1>
      <div className="text-2xl mb-4">Count: {state.count}</div>
      <div className="flex">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-4 py-2 mr-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

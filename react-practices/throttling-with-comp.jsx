import {  useRef } from 'react';
import './style.css';

function useThrottle(fn, limit) {
  let flag = true;
  return function () {
    if (!flag) return;

    flag = false;
    fn();

    setTimeout(() => {
      flag = true;
    }, limit);
  };
}

export default function App() {
  const throttle = useRef(useThrottle(() => console.log('clicked'), 3000));
  return (
    <div>
      <h1>Throttling with React compo</h1>
      <button type="button" onClick={() => throttle.current()}>
        Click me
      </button>
    </div>
  );
}
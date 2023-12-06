import { useState } from 'react';


const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = (newState, replace = false) => {
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
    setHistory(prev => [...prev, newState]);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  };

  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;
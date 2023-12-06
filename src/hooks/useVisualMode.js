import { useState } from 'react';


const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);


  const transition = (newState) => {
    setHistory(prev => [...prev, newState]);
  };

  const back = () => { 
    setHistory(prev => [...prev.slice(0, prev.length - 1)]); 
  }


  return { mode: history[history.length - 1], transition, back };

};

export default useVisualMode;
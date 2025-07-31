import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    
    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
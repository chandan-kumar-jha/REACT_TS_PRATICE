import { useEffect, useState } from "react";

function Stale_Closure() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  console.log("Render:", count);

  useEffect(() => {
    if (!start) return;

    console.log("Interval started");

    // const id = setInterval(() => {
    //   console.log("Stale count:", count); // ❌ stale closure
    //   setCount(count + 1); // ❌ always old count
    // }, 1000);

    const id = setInterval(() => {
    setCount((prev) => {
      console.log("Latest count:", prev);
      return prev + 1;
    });
  }, 1000);

    return () => {
      console.log("Cleanup interval");
      clearInterval(id);
    };
  }, [start]); // ❗ count missing

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </div>
  );
}

export default Stale_Closure;
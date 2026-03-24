import { useEffect, useMemo, useState } from "react";

function Stable_Reference() {
  const [count, setCount] = useState(0);

  // ✅ stable object
  const obj = useMemo(() => {
    return { name: "chandan" };
  }, []);

  console.log("Render");

  useEffect(() => {
    console.log("Effect runs only once (stable object)");
  }, [obj]);

  return (
    <div>
        <h1>Stable_Reference Effect runs only once stable object</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Stable_Reference;
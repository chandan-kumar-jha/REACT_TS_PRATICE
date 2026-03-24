import { useEffect, useState } from "react";

function Ref() {
  const [count, setCount] = useState(0);

  // ❗ every render new object
  const obj = { name: "chandan" };

  console.log("Render");

  useEffect(() => {
    console.log("Effect runs every render due to new object");
  }, [obj]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Ref;
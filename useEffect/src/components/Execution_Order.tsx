import { useEffect, useState } from "react";

type counter_data = {
  initial_render?: string;
  count_Value?: number;
  useEffect_render?: string;
  cleanup_render?: string;
};

function Execution_Order({
  initial_render = "i render the component",
  count_Value = 0,
  useEffect_render = "i render useEffect",
  cleanup_render = "i render clean up",
}: counter_data) {

  const [count, setCount] = useState(count_Value);

  // ✅ Render log
  console.log(initial_render, count);

  useEffect(() => {
    console.log(useEffect_render, count);

    // ✅ Cleanup add kiya
    return () => {
      console.log(cleanup_render, count);
    };
  }, [cleanup_render, count, useEffect_render]);

  const handle_click = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>i am components</h1>
      {/* ✅ state use karo, prop nahi */}
      <h2>{count}</h2>
      <button onClick={handle_click}>count increase</button>
    </div>
  );
}

export default Execution_Order;
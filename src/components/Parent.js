import { useMemo, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  console.log("Parent Component Rendered");

  // Normal calculation without memoization
  // console.log("Calculating square...");
  // const squaredValue = count * count;


  //When count changes, squaredValue will be recalculated. 
  // If theme changes, squaredValue will not be recalculated because it is not a dependency.
  const squaredValue = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  return (
    <div className=" w-6/12 flex flex-col gap-4 items-center justify-center text-center border border-blue-500 rounded mt-10 mx-auto p-4">
      <p>Count: {count}</p>
      <p>Squared Value: {squaredValue}</p>

      <button
        className="border border-blue-500 px-4 py-1 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>

      <button
        className="border border-blue-500 px-4 py-1 rounded"
        onClick={() => setTheme("light")}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Parent;

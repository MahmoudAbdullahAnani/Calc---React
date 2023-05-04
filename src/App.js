import React, { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "-", "+", "."];
  const update = (e) => {
    if (
      (ops.includes(e) && calc === "") ||
      (ops.includes(e) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + e);
    if (!ops.includes(e)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + e).toString());
    }
  };
  const createNamburs = () => {
    const digast = [];
    for (let i = 1; i < 10; i++) {
      digast.push(i);
    }
    return digast;
  };
  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-slate-600 pt-3 rounded-lg w-fit">
        <div>
          <div className={`flex justify-end px-3`}>
            <h5 className="text-gray-400 font-serif">
              {calc ? calc : "Enter Number"}
            </h5>
          </div>
          <h4 className="text-black font-bold px-3 text-right">{result}</h4>
        </div>
        <div className="">
          <div className="bg-red-500">
            <button
              className="bg-red-500 p-3 hover:bg-red-600 text-white"
              onClick={() => {
                setCalc(calc.slice(0, -1));
                // update('DEL')
              }}
            >
              DEL
            </button>
            <button
              className="bg-red-400 px-7 p-3 hover:bg-red-600 text-white"
              onClick={() => update("*")}
            >
              *
            </button>
            <button
              className="bg-red-400 p-3 px-7 hover:bg-red-600 text-white"
              onClick={() => update("-")}
            >
              -
            </button>
            <button
              className="bg-red-400 px-7 p-3 hover:bg-red-600 text-white"
              onClick={() => update("+")}
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-3 ">
            {createNamburs().map((btn) => (
              <button
                className="bg-gray-400  p-3 hover:bg-gray-600 text-white"
                onClick={() => update(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          <div className="rounded-lg flex justify-around">
            <button
              className="bg-gray-400 px-28 p-3 hover:bg-gray-600 text-white"
              onClick={() => update(0)}
            >
              {0}
            </button>
            <button
              className="bg-gray-400 px-10 p-3 hover:bg-gray-600 text-white"
              onClick={() => update(".")}
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

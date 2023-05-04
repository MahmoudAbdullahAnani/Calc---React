import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  firstNumber,
  lastNumber,
  outputAtom,
  resultCalc,
  signWatch,
} from "../../Mangemant Numbers/Store";
// import rectangle from "./../../Images/Rectangle 26.png";
function Watch() {
  const [firstNum, setFirtNum] = useRecoilState(firstNumber);
  const [lastNum, setLastNum] = useRecoilState(lastNumber);
  const [signNum, setSignNum] = useRecoilState(signWatch);
  const [result, setResult] = useRecoilState(resultCalc);
const [resetAll,setResetAll]=useState(false)
  const [output, setOutput] = useRecoilState(outputAtom);
  useEffect(() => {
    if (result) {
      const num1 = +firstNum;
      const num2 = +lastNum;
      switch (signNum) {
        case "%":
          setResetAll(false);
          setOutput(num1 % num2);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        case "/":
          setResetAll(false);
          setOutput(num1 / num2);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        case "x":
          setOutput(num1 * num2);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        case "-":
          setResetAll(false);
          setOutput(num1 - num2);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        case "+":
          setResetAll(false);
          setOutput(num1 + num2);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        case "C":
          setOutput(0);
          setResetAll(true);
          setSignNum("");
          setLastNum("");
          setFirtNum("");
          setResult(false);
          break;
        default:
          break;
      }
      console.log(output);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, signNum, output]);
  return (
    <div className="text-right">
      <div className={`bg-white text-right px-2 rounded-lg`}>
        {firstNum || output ? (
          <>
            <div className={`flex justify-end `}>
              <h5 className="text-gray-400 font-serif">{firstNum}</h5>
              <h5 className="text-gray-400 font-serif">
                {signNum !== "C" && signNum}
              </h5>
              <h5 className="text-gray-400 font-serif">{lastNum}</h5>
            </div>
            <h4 className="text-black font-bold">
              {resetAll ? 0: output}
            </h4>
          </>
        ) : (
          "Enter Number"
        )}
      </div>
      <hr className="mt-2 mb-1 rounded-lg" />
    </div>
  );
}

export default Watch;

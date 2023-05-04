import React from "react";
import { firstNumber, lastNumber, signWatch } from "../../Mangemant Numbers/Store";
import { useRecoilState } from "recoil";

function Buttons({ click, color }) {
    const [firstNum, setFirtNum] = useRecoilState(firstNumber);
    const [lastNum, setLastNum] = useRecoilState(lastNumber);
    const [signNum, setSignNum] = useRecoilState(signWatch);
  return (
    <button
      className={`bg-slate-400 hover:bg-slate-500 rounded-lg px-4  ${color} mx-1`}
      onClick={() => setFirtNum(click)}
    >
      {click}
    </button>
  );
}

export default Buttons;

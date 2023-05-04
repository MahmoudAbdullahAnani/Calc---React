import { atom } from "recoil";

const firstNumber = atom({
  key: "firstNumber", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const lastNumber = atom({
  key: "lastNumber", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const signWatch = atom({
  key: "signWatch", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const resultCalc = atom({
  key: "resultCalc", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const outputAtom = atom({
  key: "outputAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export { firstNumber, lastNumber, signWatch, resultCalc, outputAtom };

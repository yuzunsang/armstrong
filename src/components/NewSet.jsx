import { useState } from "react";

export default function NewSet({ onAdd, onInputActivated, setCounter }) {
  const [enteredSet, setEnteredSet] = useState({
    setCounter: setCounter,
    weight: 0,
    rep: 0,
  });

  function handleWeightChange(event) {
    setEnteredSet((prevState) => {
      return {
        ...prevState,
        weight: Number(event.target.value),
      };
    });
  }

  function handleRepChange(event) {
    setEnteredSet((prevState) => {
      return {
        ...prevState,
        rep: Number(event.target.value),
      };
    });
  }

  function handleCompleteClick() {
    // input validation
    if (enteredSet.weight === 0 || enteredSet.rep === 0) return;

    // 상위 컴포넌트로 보냄
    onAdd(enteredSet);
    setEnteredSet({
      setCounter: setCounter,
      weight: 0,
      rep: 0,
    });
  }

  const inputClasses = "w-32 px-2 py-1 rounded-sm bg-stone-200 rounded-lg";

  let inputContent = (
    <div className="flex gap-4">
      <input
        type="number"
        placeholder={setCounter}
        className={inputClasses}
        value={enteredSet.setCounter}
        readOnly
      />
      <input
        type="number"
        className={inputClasses}
        onChange={handleWeightChange}
        value={enteredSet.weight}
      />
      <input
        type="number"
        className={inputClasses}
        onChange={handleRepChange}
        value={enteredSet.rep}
      />
      <button
        className="bg-green-300 text-stone-900 px-4 py-2 ml-10 rounded-md hover:bg-green-400 hover:text-stone-700"
        onClick={handleCompleteClick}
      >
        완료
      </button>
    </div>
  );

  return (
    <div className="flex flex-col justify-between gap-4">
      {onInputActivated && inputContent}
    </div>
  );
}

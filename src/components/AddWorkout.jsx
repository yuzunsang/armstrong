import { useState } from "react";

import Button from "./Button.jsx";
import Sets from "./Sets.jsx";

export default function AddWorkout() {
  const [sets, setSets] = useState([]);
  const [isInputActivated, setIsInputActivated] = useState(true);

  function handleAddSet({ weight, rep }) {
    setSets((prevSets) => {
      const setId = Math.random();
      const prevLen = prevSets.length + 1;

      const newSet = {
        setCounter: prevLen,
        weight: weight,
        rep: rep,
        id: setId,
      };

      return [...prevSets, newSet];
    });

    setIsInputActivated(false);
  }

  function handleDeleteSet(id) {
    setSets((prevSets) => {
      return [...prevSets].filter((set) => set.id !== id);
    });
  }

  function handleInputActivated() {
    setIsInputActivated(true);
  }

  return (
    <>
      <section className="my-4">
        <span className="mr-4">종목 1</span>
        <Button buttonStyle="blue">
          {/* <Timer lapTime={} spanCaption={} /> */}
          쉬는 시간 01 : 23
        </Button>
      </section>
      <section className="my-4">
        <ul className="flex items-center bg-cyan-300 justify-between p-4 rounded-md font-bold">
          <li>세트</li>
          <li>kg</li>
          <li>rep</li>
          <li>✅</li>
        </ul>
      </section>
      <section className="my-4">
        <Sets
          onAdd={handleAddSet}
          onDelete={handleDeleteSet}
          sets={sets}
          onInputActivated={isInputActivated}
        />
      </section>
      <section className="my-4">
        <Button buttonStyle="blue" widthFull onClick={handleInputActivated}>
          세트 추가
        </Button>
      </section>
    </>
  );
}

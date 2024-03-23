import SideBar from "./components/SideBar.jsx";
import Templates from "./components/Templates.jsx";
import NewWorkout from "./components/NewWorkout.jsx";

import { useState, useRef } from "react";

function App() {
  const [workoutState, setWorkoutState] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  // const [refreshTime, setRefreshTime] = useState(0);

  const workoutTimeRef = useRef();
  // const refreshTimeRef = useRef();

  function handleStartWorkout() {
    setWorkoutState(true);

    workoutTimeRef.current = setInterval(() => {
      setWorkoutTime((prevTime) => prevTime + 10);
    }, 10);
  }

  let content;
  if (workoutState) {
    content = <NewWorkout workoutLapTime={workoutTime} />;
  } else {
    content = (
      <>
        <SideBar onStartWorkout={handleStartWorkout} />
        <Templates />
      </>
    );
    clearInterval(workoutTimeRef.current);
  }

  return <main className="h-screen mt-8 flex gap-8">{content}</main>;
}

export default App;

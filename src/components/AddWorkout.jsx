import Button from "./Button.jsx";
import NewSet from "./NewSet.jsx";
// import Timer from "./Timer.jsx";

export default function AddWorkout() {
  function handleAddSet() {
    // set 추가
  }

  return (
    <>
      <p>
        <section className="my-4">
          <span className="mr-4">벤치 프레스(바벨)</span>
          <Button buttonStyle="blue">
            {/* <Timer lapTime={} spanCaption={} /> */}
            쉬는 시간 01 : 23
          </Button>
        </section>
        <section className="my-4">
          <ul className="flex items-center bg-cyan-300 justify-evenly py-2">
            <li>세트</li>
            <li>기존</li>
            <li>kg</li>
            <li>rep</li>
            <li>✅</li>
          </ul>
        </section>
        <section className="my-4">
          <ol>
            {/* 새 세트가 추가될 곳 */}
            {/* <NewSet /> */}
          </ol>
        </section>
        <section>
          <Button buttonStyle="blue" widthFull onClick={handleAddSet}>
            세트 수 추가
          </Button>
        </section>
      </p>
    </>
  );
}

import { useState, useRef } from "react";

import Button from "./Button.jsx";
import AddWorkout from "./AddWorkout.jsx";
import Modal from "./Modal.jsx";
import Timer from "./Timer.jsx";

export default function NewWorkout({ workoutLapTime }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [templateName, setTemplateName] = useState("새 템플릿 1");

  const modal = useRef();

  const newTemplateName = useRef();

  function handleTemplateName() {
    setIsEditingName((prevState) => {
      if (!prevState) return !prevState;
      else {
        handleChangeTemplateName();
        return;
      }
    });
  }

  function handleChangeTemplateName() {
    const enteredTemplateName = newTemplateName.current.value;

    if (enteredTemplateName.trim() === "") {
      modal.current.open();
      return;
    }

    setTemplateName(enteredTemplateName);
  }

  let nameContent = <h1 className="text-xl font-bold">{templateName}</h1>;

  if (isEditingName) {
    nameContent = (
      <input type="text" placeholder={templateName} ref={newTemplateName} />
    );
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="종료">
        <h2 className="text-xl font-bold text-stone-700 my-4">잘못된 입력</h2>
        <p className="text-stone-600 mb-4">값을 입력받지 못했습니다.</p>
        <p className="text-stone-600 mb-4">
          이 필드에는 빈 값을 입력할 수 없습니다.
        </p>
      </Modal>

      <div className="flex flex-col px-10">
        {/* stopwatch modal */}
        <header>
          <div className="flex items-center gap-4">
            {nameContent}
            <menu className="flex items-center gap-4">
              <li>
                <Button buttonStyle="blue" onClick={handleTemplateName}>
                  {!isEditingName ? "✏️" : "수정 완료"}
                </Button>
              </li>
            </menu>
          </div>
        </header>

        <main>
          <Timer lapTime={workoutLapTime} spanCaption="총 진행 시간" />
          <AddWorkout />
        </main>

        <footer className="w-[35rem] mt-16">
          <menu className="flex items-center justify-center gap-10 mb-10">
            <li>
              <Button buttonStyle="blue">종목 추가</Button>
            </li>
            <li>
              <Button buttonStyle="red">워크아웃 취소 및 나가기</Button>
            </li>
          </menu>
          <Button buttonStyle="green" widthFull>
            진행한 워크아웃 저장 및 종료
          </Button>
        </footer>
      </div>
    </>
  );
}

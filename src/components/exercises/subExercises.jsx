import { useMemo, useState } from "react";
import numberGenerator from "../../utils/mathUtils/MathUtils";
import OperationsSimbol from "../../Assets/OperationSimbol";
import OperationsColor from "../../Assets/OperationsColor";
import RandomImage from "../../utils/imgUtils/RandomImage";

export default function SubExercise({ operation, difficult }) {
  const [numbers, setNumbers] = useState(
    numberGenerator({ operation, difficult })
  );
  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  function handleInputChange(e) {
    setAnswer(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const result = numbers[0] - numbers[1];

    if (answer === result.toString()) {
      setAnswerStatus(true);
    } else {
      setAnswerStatus(false);
      setAnswer("");
    }
  };

  const handleNextButtonClick = () => {
    setNumbers(numberGenerator({ operation, difficult }));
    setAnswer("");
    setAnswerStatus("");
  };

  return (
    <div className="grid md:grid-cols-[60%,40%] w-full justify-center items-center h-full md:pb-10">
      <div className="">
        <div className="pb-10">
          <div className="flex justify-center w-full text-5xl py-10 pb-14 md:p-0">
            <h1 className="px-1">{numbers[0]}</h1>
            <h1 className="px-1">{OperationsSimbol(operation)}</h1>
            <h1 className="px-1">{numbers[1]}</h1>
          </div>
          <div className="flex justify-center h-full w-full md:pb-5">
            <form onSubmit={onSubmit} className="flex flex-col md:flex-row">
              <input
                value={answer}
                onChange={handleInputChange}
                type="number"
                placeholder="Ingresar su respuesta"
                disabled={answerStatus}
                className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md"
              />
               {answerStatus === "" || answerStatus === false ? (
                <button
                  className={`px-10 py-2 mt-5 md:my-5 border border-2 border-${OperationsColor(
                    operation
                  )} bg-${OperationsColor(operation)} bg-opacity-60 rounded-md`}
                  type="submit"
                >
                  Revisar respuesta
                </button>
              ) : null}

              {answerStatus === true ? (
                <button
                  className={`px-10 py-2 mt-5 md:my-5 border border-2 border-${OperationsColor(
                    operation
                  )} bg-${OperationsColor(operation)} bg-opacity-60 rounded-md`}
                  type="button"
                  onClick={handleNextButtonClick}
                >
                  Siguiente ejercicio
                </button>
              ) : null}
            </form>
          </div>
          <div className="text-4xl flex justify-center items-center">
            {answerStatus === true && <h1>¡Correcto!</h1>}
            {answerStatus === false && <h2>¡Incorrecto!</h2>}
            {answerStatus === "" && <h2></h2>}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col w-8/12 justify-evenly items-center relative">
        {useMemo(() => <RandomImage answer={answerStatus} />, [answerStatus])}
          <svg
            className={`opacity-50 w-1/2 md:w-[90%] absolute top-50 left-50 -z-10`}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 300 300"
          >
            <path
              fill="#75DDDD"
              d="M24.2 33.67H70.53V61.07H24.2z"
              transform="rotate(-45 47.37 47.368)"
            ></path>
            <path
              fill="#75DDDD"
              d="M232.19 241.66H278.52V269.06H232.19z"
              transform="rotate(-45 255.362 255.356)"
            ></path>
            <path
              fill="#7A28CB"
              d="M9.58 67.17H151.14000000000001V94.57H9.58z"
              transform="rotate(-45 80.36 80.874)"
            ></path>
            <path
              fill="#7A28CB"
              d="M148.59 206.18H290.15V233.58H148.59z"
              transform="rotate(-45 219.37 219.884)"
            ></path>
            <path
              fill="#FC60A8"
              d="M-8.81 101.42H239.07V128.82H-8.81z"
              transform="rotate(-45 115.13 115.132)"
            ></path>
            <path
              fill="#FC60A8"
              d="M60.93 171.17H308.81V198.57H60.93z"
              transform="rotate(-45 184.868 184.875)"
            ></path>
            <path
              fill="#FEEB70"
              d="M-9.95 135.73H308.81V163.13H-9.95z"
              transform="rotate(-45 149.428 149.435)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

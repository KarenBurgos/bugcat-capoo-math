import { useMemo, useState } from "react";
import numberGenerator from "../../utils/mathUtils/MathUtils";
import OperationsSimbol from "../../Assets/OperationSimbol";
import OperationsColor from "../../Assets/OperationsColor"

export default function SubExercise({ operation, difficult }) {
    const numbers = useMemo(() => numberGenerator({ operation, difficult }), [operation, difficult]);
    const [answer, setAnswer] = useState("");
    const [answerStatus, setAnswerStatus] = useState();

    function handleInputChange(e) {
        setAnswer(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const result = (numbers[0] - numbers[1]);

        if (answer === result.toString()) {
            setAnswerStatus(true);
        } else {
            setAnswerStatus(false);
        }
    }

    return (
        <div>
            <div className="flex justify-center w-full items-center text-5xl">
                <h1 className="px-1">{numbers[0]}</h1>
                <h1 className="px-1">{OperationsSimbol(operation)}</h1>
                <h1 className="px-1">{numbers[1]}</h1>
            </div>
            <div className="flex justify-center">
                <form onSubmit={onSubmit}>
                    <input value={answer} onChange={handleInputChange} type="number" placeholder="Ingresar su respuesta" disabled={answerStatus} className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md" />
                    <button
                        className={`px-10 py-2 md:my-5 border border-2 border-${OperationsColor(operation)}  bg-${OperationsColor(operation)} bg-opacity-60 rounded-md`}
                        type="submit"
                    >
                        Revisar respuesta
                    </button>
                </form>
            </div>
            <div className="text-4xl flex justify-center items-center">
            {
                    answerStatus === true ?
                        <h1>¡Correcto!</h1>
                        : answerStatus === false &&
                        <h2>¡Incorrecto!</h2>
            }
            </div>

        </div>
    )
}
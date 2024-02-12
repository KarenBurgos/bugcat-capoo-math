import { useMemo, useState } from "react";
import numberGenerator from "../../utils/mathUtils/MathUtils";
import OperationsSimbol from "../../Assets/OperationSimbol";
import OperationsColor from "../../Assets/OperationsColor"

export default function DivExercise({ operation, difficult }) {
    const numbers = useMemo(() => numberGenerator({ operation, difficult }), [operation, difficult]);
    const [quotient, setQuotient] = useState("");
    const [quotientStatus, setQuotientStatus] = useState();
    const [remainder, setRemainder] = useState("");
    const [remainderStatus, setRemainderStatus] = useState();
    

    function handleQuotientChange(e) {
        setQuotient(e.target.value);
    }

    function handleRemainderChange(e) {
        setRemainder(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(quotient)
        console.log(remainder)
        const resultQuotient = Math.floor(numbers[0] / numbers[1]);
        const remainderResult = (numbers[0] % numbers[1]);
        console.log(resultQuotient)
        console.log(remainderResult)

        if (quotient === resultQuotient.toString()) {
            setQuotientStatus(true);
            console.log("1")
        } else {
            setQuotientStatus(false);
        }

        if (remainder === remainderResult.toString()) {
            setRemainderStatus(true);
            console.log("1")
        } else {
            setRemainderStatus(false);
            console.log("1")
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
                    <input value={quotient} onChange={handleQuotientChange} type="number" placeholder="Ingresar el cociente" disabled={quotientStatus} className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md" />
                    <input value={remainder} onChange={handleRemainderChange} type="number" placeholder="Ingresar el residuo" disabled={remainderStatus} className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md" />
                    
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
                    quotientStatus == true ?
                        <h1>¡El cociente es correcto!</h1>
                        : !quotientStatus == false &&
                        <h2>El cociente es incorrecto!</h2>
                }
                {
                    remainderStatus == true ?
                        <h1>¡El residuo es correcto!</h1>
                        : !quotientStatus == false &&
                        <h2>El residuo es incorrecto!</h2>
                }
            </div>

        </div>
    )
}
import { useMemo, useState } from "react";
import numberGenerator from "../../utils/mathUtils/MathUtils";
import OperationsSimbol from "../../Assets/OperationSimbol";
import OperationsColor from "../../Assets/OperationsColor"
import BackgroundLines from "../BackgroundLines";
import HomeImg from "../../Assets/img/Home.gif"

export default function AddExercise({ operation, difficult }) {
    const numbers = useMemo(() => numberGenerator({ operation, difficult }), [operation, difficult]);
    const [answer, setAnswer] = useState("");
    const [answerStatus, setAnswerStatus] = useState();

    function handleInputChange(e) {
        setAnswer(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const result = (numbers[0] + numbers[1]);

        if (answer === result.toString()) {
            setAnswerStatus(true);
        } else {
            setAnswerStatus(false);
        }
    }
    return (
        <div className="grid grid-cols-2 h-full justify-center items-center border border-4 border-gray-500">
            <div className="h-full w-full">
                <div className="flex justify-center w-full items-center text-5xl">
                    <h1 className="px-1">{numbers[0]}</h1>
                    <h1 className="px-1">{OperationsSimbol(operation)}</h1>
                    <h1 className="px-1">{numbers[1]}</h1>
                </div>
                <div className="flex justify-center h-full w-full">
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
            <div className="h-full w-full">
                <div className="flex flex-col w-1/2 justify-evenly items-center relative">
                    <img src={HomeImg} alt="home gif" className="w-10/12 md:w-1/2" />
                    <BackgroundLines full={true} />
                </div>
            </div>
        </div>
    )

}


// import { useLoaderData } from "react-router-dom";
// import Banner from "../components/Banner";
// import OperationsColor from "../Assets/OperationsColor";
// import numberGenerator from "../utils/mathUtils/MathUtils";
// import OperationsSimbol from "../Assets/OperationSimbol";
// import { useEffect, useMemo, useState } from "react";

// export async function loader({ params }) {
//     return (params)
// }

// function Exercise() {
//     const params = useLoaderData();
//     const numbers = useMemo(() => numberGenerator(params), [params.difficult]);
//     const [answer, setAnswer] = useState("");
//     const [remainder, setRemainder] = useState("");
//     const [answerStatus, setAnswerStatus] = useState();
//     const [inputStatus, setInputStatus] = useState(false);
//     const [inputRemainder, setInputRemainder] = useState(false);
//     const [remainderStatus, setRemainderStatus] = useState(false);

//     useEffect(() => {
//         if (params.operation === "División") {
//             setInputRemainder(true);
//         }
//     }, []);

//     function handleInputChange(e) {
//         setAnswer(e.target.value);
//     }

//     function handleRemainderInput(e) {
//         setRemainder(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const result = eval(numbers[0] + OperationsSimbol(params.operation) + numbers[1]);

//         if (params.operation === "División") {
//             const quotient = Math.floor(numbers[0] / numbers[1]);
//             const remainderResult = numbers[0] % numbers[1];
//             console.log( result)

//             if (answer === quotient.toString() && remainder === remainderResult.toString()) {
//                 setAnswerStatus("correct");
//                 setInputStatus(true);
//                 setRemainderStatus(true);
//             } else {
//                 setAnswerStatus("Incorrecto");
//                 setInputStatus(false);
//                 setRemainderStatus(false);
//             }
//         } else {
//             if (answer === result.toString()) {
//                 setAnswerStatus("correct");
//                 setInputStatus(true);
//             } else {
//                 setAnswerStatus("Incorrecto");
//                 setInputStatus(false);
//             }
//         }
//     };

//     return (
//         <div>
//             <Banner difficult={params.difficult} difficultcolor={OperationsColor(params.operation)} />

//             <div className="flex justify-center w-full items-center text-5xl">
//                 <h1 className="px-1">{numbers[0]}</h1>
//                 <h1 className="px-1">{OperationsSimbol(params.operation)}</h1>
//                 <h1 className="px-1">{numbers[1]}</h1>
//             </div>
//             <div className="flex justify-center">
//                 <form onSubmit={onSubmit}>
//                     <input value={answer} onChange={handleInputChange} type="number" placeholder="Ingresar su respuesta" disabled={inputStatus} className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md" />
//                     {inputRemainder &&
//                         <input value={remainder} onChange={handleRemainderInput} type="number" placeholder="Ingresar su respuesta" disabled={remainderStatus} className="px-10 py-2 md:my-5 border border-2 border-customBlack rounded-md" />
//                     }
//                     <button
//                         className={`px-10 py-2 md:my-5 border border-2 border-${OperationsColor(params.operation)}  bg-${OperationsColor(params.operation)} bg-opacity-60 rounded-md`}
//                         type="submit"
//                     >
//                         Revisar respuesta
//                     </button>
//                 </form>
//             </div>
//             <div className="text-4xl flex justify-center items-center">
//                 {
//                     answerStatus === 'correct' ?
//                         <h1>¡Correcto!</h1>
//                         : answerStatus === 'Incorrecto' &&
//                         <h2>¡Incorrecto!</h2>
//                 }
//             </div>

//         </div>
//     )
// }

// export default Exercise;


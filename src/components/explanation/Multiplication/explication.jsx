import StepNumber from "../stepNumber";
import Container from "../container";
import Arrow from "../../../Assets/rightArrow.svg"
import explanation1 from "../../../Assets/img/candies-green.png"
import explanation2 from "../../../Assets/img/candies-purple.png"
import explanation3 from "../../../Assets/img/candies-yellow.png"

//suma
export default function Explication() {
    return (
        <div className="pl-2 pr-16 md:py-10 md:px-20 grid grid-cols-[15%,85%] md:flex items-start text-justify">
            <StepNumber color="#b78ae3" />

            <div className="grid ">
                <div>
                    <p className="py-4 font-bold text-2xl">La multiplicación significa sumar una misma cantidad varias veces</p>
                    <div className="flex flex-col ">
                        <p className="py-4 text-xl">Si tenemos 3 botes con tres caramelos en cada uno y queremos saber cuántos caramelos tenemos en total, tendríamos que sumar 3 cuatro veces. En lugar de esto utilizamos las tablas de multiplicar para saber el resultado </p>
                        <div className=" md:flex items-center justify-center">
                            <div className="md:flex">   
                                <div className="grid grid-cols-3 py-5 md:p-0">
                                    <img className="w-max-full" src={explanation1} />
                                    <img className="w-max-full" src={explanation2} />
                                    <img className="w-max-full" src={explanation3} />
                                </div>
                                <div className="flex justify-center items-center md:px-10">
                                    <p className="text-5xl pr-10">=</p>
                                    <p className="whitespace-nowrap">3+3+3 = 9</p>
                                </div>
                            </div>
                            <div className="min-[1220px]:px-10 flex justify-center">
                                <embed src={ Arrow } className="h-full w-max-full rotate-90 my-10 md:rotate-0 min-[1200px]:m-0" />
                            </div>
                            <div className="flex  justify-center">
                                <table className="border border-gray-300 border-dashed text-2xl flex justify-center">
                                    <tbody>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">3</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">3</td>
                                        </tr>
                                        <tr className="border border-t-4 border-gray-700">
                                            <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">9</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 className="p-5">x</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
import StepNumber from "../stepNumber";
import Container from "../container";
import Arrow from "../../../Assets/rightArrow.svg"
import explanation1 from "../../../Assets/img/candies-green.png"
import explanation2 from "../../../Assets/img/candies-purple.png"
import explanation3 from "../../../Assets/img/candies-yellow.png"

//suma
export default function Explication() {
    return (
        <div className="md:py-10 md:px-20 flex items-start">
            <StepNumber color="#9B5ED8" />

            <div className="grid w-full">
                <div>
                    <p className="py-4 font-bold text-2xl">La multiplicación significa sumar una misma cantidad varias veces</p>
                    <div className="flex flex-col">
                        <p className="py-4">Si tenemos 3 botes con tres caramelos en cada uno y queremos saber cuántos caramelos tenemos en total, tendríamos que sumar 3 cuatro veces. En lugar de esto utilizamos las tablas de multiplicar para saber el resultado </p>
                        <div className="flex items-center">
                            <>
                                <img className="h-32 w-32" src={explanation1} />
                                <img className="h-32 w-32" src={explanation2} />
                                <img className="h-32 w-32" src={explanation3} />    
                            </>
                            <>
                                <p className="text-5xl px-20">=</p>
                                <p>3+3+3 = 9</p>
                            </>
                            
                            <embed src={Arrow} className="px-20" />
                            <div className="flex">
                            <table className="border border-gray-300 border-dashed text-2xl">
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
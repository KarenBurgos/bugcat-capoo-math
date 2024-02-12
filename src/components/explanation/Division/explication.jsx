import StepNumber from "../stepNumber";
import candyJar from "../../../Assets/img/divExplanation1.png"
import divisionComponentes from "../../../Assets/img/divisiocomponents.png"
import divExplanationResult from "../../../Assets/img/divExplanation.png"

//div
export default function Explication() {
    return (
        <div className="md:py-10 md:px-20 flex items-start">
            <StepNumber color="#98E6E6" />
            <div className="flex flex-col w-full text-xl">
                <p className="py-4 font-bold text-2xl">La división significa repartir entre partes o grupos iguales.</p>



                <p>La división tiene las siguientes partes:</p>
                <section id="division-parts" className="py-5 md:grid grid-cols-[30%,70%]" >
                    <img src={divisionComponentes} alt="partes en que se compone la división"/>

                    <div className="md:pl-20 flex flex-col justify-between">
                        <p><span className="font-semibold text-blue pr-2">Dividendo:</span>es el número que vamos a dividir. La cantidad que queremos repartir</p>
                        <p><span className="font-semibold text-yellow-medium pr-2">Divisor:</span>es el número por el que se divide. O las partes en las que queremos dividir la cantidad inicial.</p>
                        <p><span className="font-semibold text-purple pr-2">Cociente:</span>es el resultado de la división, o la cantidad que debemos dar a cada uno</p>
                        <p><span className="font-semibold text-pink pr-2">Residuo:</span>Es la cantidad que nos sobra y que no podemos repartir.</p> 
                    </div>
                </section>

                <h2 className="py-5">Realicemos el siguiente ejemplo:</h2>

                <section id="division-example" className="flex items-center">
                    <img className="h-32 w-32" src={candyJar} />
                    <p className="py-4">Si tenemos 9 dulces y queremos repartirlo entre 3 personas utilizamos la division para calcular cuantos dulces debe recibir cada uno</p>
                </section>
                <section id="division-explanation">
                    <p>En este caso los 9 dulces son el dividendo que es la cantidad que vamos a repartir, 3 el divisor, que son las partes en las que vamos a dividir los 12 dulces</p>
                    <table>
                        <tr>
                            <td className="px-5 py-2">9</td> 
                            <td className="px-5 py-2" style={{ borderBottom: "2px solid  rgb(55 65 81)",  borderLeft: "2px solid  rgb(55 65 81)" }}>3</td> 
                        </tr>
                    </table>

                    <p>Para calcular el cociente tenemos que buscar un número que multiplicado por el divisor, el cual es 3, nos de el dividendo que es 9. Revisamos la tabla de multiplicar de el 3 y esto nos indica que el cociente es 3</p>

                    <div>
                        <p>3 x 1 = 3</p>
                        <p>3 x 1 = 6</p>
                        <p className="text-blue-medium">3 x 1 = 9</p>
                    </div>
                    <p>Eso quiere decir que debemos dar 3 dulces a cada persona</p>
                    <img src={divExplanationResult} alt="resultado" />
                </section>


            </div>
        </div>
    )
}
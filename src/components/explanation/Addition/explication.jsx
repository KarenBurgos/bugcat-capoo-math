import Title from "../../Title";
import StepNumber from "../stepNumber";
import additionImg from "../../../Assets/img/Suma.png";
import BackgroundLines from "../../BackgroundLines";
import dog from "../../../Assets/img/addExplanation.gif";
import Container from "../container";
import { ArrowAdd } from "../../../components/HoverArrow/Arrows";

//suma
export default function Explication() {
  return (
    <div className="md:py-10 md:px-20 flex items-start w-full}">
      <StepNumber color="#FEEB70" />

      <div className="grid md:grid-cols-[80%,20%] justify-evenly items-center w-full}">
        <div className="">
          <p className="py-4 font-bold text-2xl">Sumar significa agregar</p>
          <div className="">
            <p className="py-4 pr-2">
              Si hay 3 perros jugando y llegan 2 mas En total tendremos 5 perros{" "}
            </p>
            <div className="flex">
              <div className="flex text-2xl items-center">
                <div className="flex">
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                </div>
                <p className="px-5">+</p>
                <div className="flex">
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                </div>
                <div className="flex items-center  text-2xl">
                  <p className="px-5">=</p>
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                  <img className="h-20 w-20" src={dog} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-evenly text-2xl">
          <ArrowAdd true />
          <div className="flex w-full">
            <table className="border border-gray-300 border-dashed">
              <tbody>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    3
                  </td>
                </tr>
                <tr>
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    2
                  </td>
                </tr>
                <tr className="border border-t-4 border-gray-700">
                  <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-amber-400">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
            <h1 className="p-5">+</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

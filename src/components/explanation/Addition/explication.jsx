import StepNumber from "../stepNumber";
import dog from "../../../Assets/img/addExplanation.gif";
import Arrow from "../../../Assets/rightArrow.svg";
import Container from "../container";

//suma
export default function Explication() {
  return (
    <Container color="#FEEB70">
      <div className="flex items-start justify-center">
        <div className="grid w-full">
          <div>
            <p className="font-bold text-2xl">Sumar significa agregar</p>
            <div className="">
              <p className="py-4 pr-2 text-xl">
                Si hay 3 perros jugando y llegan 2 mas En total tendremos 5 perros
                ( 3 + 2 = 5)
              </p>
              <div className="flex">
                <div className="min-[1220px]:flex text-2xl items-center">
                  <div className="flex">
                    <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                    <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                    <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                  </div>
                  <p className="px-5">+</p>
                  <div className="flex">
                    <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                    <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                  </div>
                  <div className="grid md:flex items-center  text-2xl">
                    <p className="px-5">=</p>
                    <div className="flex">
                      <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                      <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                      <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                      <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                      <img className="h-16 w-16 md:h-20 md:w-20" src={dog} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly text-2xl">
            <embed
              src={Arrow}
              className="rotate-90 pt-[15%] md:py-10"
            />
            <div className="flex w-full items-center justify-center md:pl-5">
              <table className="border border-gray-300 border-dashed">
                <tbody>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 text-amber-400">
                      3
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 text-amber-400">
                      2
                    </td>
                  </tr>
                  <tr className="border border-t-4 border-gray-700">
                    <td className="border border-2 border-gray-400 border-dashed px-7 py-4 md:px-10 md:py-5 text-amber-400">
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
    </Container>
  );
}

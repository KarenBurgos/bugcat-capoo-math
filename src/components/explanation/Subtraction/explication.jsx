import StepNumber from "../stepNumber";
import Arrow from "../../../Assets/rightArrow.svg";
import explanation1 from "../../../Assets/img/restaExplicación1.png";
import explanation2 from "../../../Assets/img/restaExplicación2.png";
import explanation3 from "../../../Assets/img/restaExplicación3.png";
import Container from "../container";

//suma
export default function Explication() {
  return (
    <Container color="#FD88BE">
      <div className="flex justify-center items-start ">
        <div className="grid text-xl md:grid-cols-[70%,30%] w-full items-center">
          <div>
            <p className="py-4 font-bold text-2xl">
              Restar significa quitar o disminuir
            </p>
            <div className="md:flex items-end">
              <p className="pb-2">Si tenemos 3 sandias </p>
              <img className="size-10/12 md:h-1/2 md:w-1/2" src={explanation1} />
            </div>
            <div className="md:flex items-end">
              <p className="pb-2">y nos comemos 2 </p>
              <img className="size-10/12 md:h-1/2 md:w-1/2" src={explanation2} />
            </div>
            <div className="md:flex items-center pt-10">
              <p>No quedara solo una sandia </p>
              <img className="h-24 md:h-20 md:w-16" src={explanation3} />
            </div>
          </div>
          <div className="grid md:flex w-full items-center justify-center text-2xl">
            <embed src={Arrow} className="rotate-90 py-5 md:rotate-0 md:p-0" />
      
            <div className="flex justify-center w-full">
              <table className="border border-gray-300 border-dashed">
                <tbody>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                      3
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                      2
                    </td>
                  </tr>
                  <tr className="border border-t-4 border-gray-700">
                    <td className="border border-2 border-gray-400 border-dashed px-10 py-5 text-pink">
                      1
                    </td>
                  </tr>
                </tbody>
              </table>
              <h1 className="p-5">-</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

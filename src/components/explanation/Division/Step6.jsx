import Title from "../../Title";
import StepNumber from "../stepNumber";
import divImg from "../../../Assets/img/div.png";
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg";

export default function step6() {
  return (
    <div>
      <Container img={divImg} step="" color="#98E6E6">
        <h2 className="py-4 text-2xl font-bold">Caso especial 2 </h2>
        <p>
          Si al iniciar a dividir el dividendo es menor que el divisor tomamos
          el siguiente número para realizar la operación
        </p>
        <div className="flex w-full items-center">
          <p className="whitespace-nowrap">Por ejemplo 150 ÷ 5</p>
          <div className="ml-5 w-full">
            <ShowDivisionParts />
          </div>
        </div>
        <p className="my-5">
          El divisor es un solo dígito asi que tomamos un solo digito del
          dividendo
        </p>
        <table className="">
          <tr>
            <td className="px-5 py-1 pl-7">
              <span className="text-blue-medium">1</span> 50
            </td>
            <td
              className="px-5 py-1 text-blue-medium"
              style={{
                borderBottom: "2px solid  rgb(55 65 81)",
                borderLeft: "2px solid  rgb(55 65 81)",
              }}
            >
              5
            </td>
          </tr>
        </table>
        <p className="my-5">
          Pero 1 es menor que 5 asi que tomamos el siguiente número para poder
          dividir, ahora dividimos entre 15:
        </p>

        <section className="grid md:flex items-center">
          <table className="grid justify-center">
            <tr>
              <td className="px-5 py-1 pl-7">
                <span className="text-blue-medium">15</span>0
              </td>
              <td
                className="px-5 py-1 text-blue-medium"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                5
              </td>
            </tr>
          </table>
          <div className="px-10 flex justify-center my-10 md:m-0">
            <embed src={Arrow} className=" rotate-90 md:rotate-0" />
          </div>
          <div className="grid justify-center">
            <p className="py-2">5 x 1 = 5</p>
            <p className="py-2">5 x 2 = 10</p>
            <p className="py-2 text-blue-medium">5 x 3 = 15</p>
          </div>
          <div className="px-10 flex justify-center my-10 md:m-0">
            <embed src={Arrow} className=" rotate-90 md:rotate-0" />
          </div>
          <table className="grid justify-center">
            <tr>
              <td className="px-5 py-1 pl-7">
                <span className="">15</span>0
              </td>
              <td
                className="px-5 py-1"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                5
              </td>
            </tr>
            <tr>
              <td className="px-5 underline decoration-black">
                <span className="text-customBlack">-</span>15
              </td>
              <td className="px-5 text-blue-medium">3</td>
            </tr>
            <tr>
              <td className="px-5 pl-8 py-1 ">0</td>
              <td className="px-5 pl-7 py-1"></td>
            </tr>
          </table>
        </section>

        <h2 className="py-5 text-2xl font-bold">Caso especial 3 </h2>
        <p className="italic">Cualquier numero dividido entre 0 es 0.</p>
        <p className="py-5">
          En este ejemplo al bajar el siguiente numero nos queda la division de
          0 ÷ 5, y ya que no tenemos otro númeor que podamos bajar colocamos 0
          en el cociente
        </p>

        <section className="grid md:flex items-center">
          <table className="grid justify-center">
            <tr>
              <td className="px-5 py-1 pl-7">
                <span className="">15</span>0
              </td>
              <td
                className="px-5 py-1"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                5
              </td>
            </tr>
            <tr>
              <td className="px-5 underline decoration-black">
                <span className="text-customBlack">-</span>15
              </td>
              <td className="px-5 text-blue-medium">30</td>
            </tr>
            <tr>
              <td className="px-5 pl-8 py-1 text-blue-medium">00</td>
              <td className="px-5 pl-7 py-1"></td>
            </tr>
          </table>
          <div className="px-10 flex justify-center my-10 md:m-0">
            <embed src={Arrow} className=" rotate-90 md:rotate-0" />
          </div>
          <div className="grid md:flex justify-center">
            <p>La respuesta quedaria:</p>
            <p className="text-blue-medium md:px-2">Cociente= 31, residuo= 0</p>
          </div>
        </section>
      </Container>
    </div>
  );
}

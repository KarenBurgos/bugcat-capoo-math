import divImg from "../../../Assets/img/div.png";
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg";

export default function step4() {
  return (
    <div>
      <Container img={divImg} step="4" color="#98E6E6">
        <section>
          <p>
            Buscamos un número que multiplicado por el dividendo que es 2 nos de
            2, en este caso es 1. Colocamos el 1 en el cociente y el resultado
            de 2 x 1 debajo del divisor y restamos
          </p>
        </section>
        <section className="my-10 grid grid-cols-2 md:grid-cols-[30%,70%] w-full">
          <table className="table-auto flex flex-col justify-start">
            <tr>
              <td className="px-5 py-1">
                <span className="pl-2 pr-1">8</span>2
              </td>
              <td
                className="px-5 py-1 text-blue-medium"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                2
              </td>
            </tr>
            <tr>
              <td className="px-5 underline decoration-black">
                <span className="text-customBlack">-</span>8
              </td>
              <td className="px-5">4 2</td>
            </tr>
            <tr>
              <td className="px-5 pl-7 py-1 text-blue-medium">- 0 2</td>
              <td className="px-5 pl-7 py-1 text-blue-medium"></td>
            </tr>
            <tr>
              <td className="px-5 pl-10 py-1 text-blue-medium underline decoration-black">
                0 2{" "}
              </td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="px-5 pl-14 py-1"> 0 </td>
              <td className=""></td>
            </tr>
          </table>
          <ShowDivisionParts />
        </section>
        <section>
          <p>
            Ya que no nos quedan mas números en el divisor por bajar el
            resultado seria el siguiente
          </p>
          <div className="my-10 grid md:flex justify-center md:items-center md:justify-start">
            <table className="mb-16 mb:m-0">
              <tr>
                <td className="px-5 py-1">
                  <span className="pl-2 pr-1">8</span>2
                </td>
                <td
                  className="px-5 py-1"
                  style={{
                    borderBottom: "2px solid  rgb(55 65 81)",
                    borderLeft: "2px solid  rgb(55 65 81)",
                  }}
                >
                  2
                </td>
              </tr>
              <tr>
                <td className="px-5 underline decoration-black">
                  <span className="text-customBlack">-</span>8
                </td>
                <td className="px-5 text-blue-medium">4 2</td>
              </tr>
              <tr>
                <td className="px-5 pl-7 py-1">- 0 2</td>
                <td className="px-5 pl-7 py-1"></td>
              </tr>
              <tr>
                <td className="px-5 pl-10 py-1 underline decoration-black">
                  {" "}
                  0 2{" "}
                </td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="px-5 pl-14 py-1 text-blue-medium"> 0 </td>
                <td className=""></td>
              </tr>
            </table>
            <div className="rotate-90 md:rotate-0 items-center">
              <embed src={Arrow} className="px-10" />
            </div>
            <div>
              <p className="text-blue-medium">cociente = 42, residuo = 0</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

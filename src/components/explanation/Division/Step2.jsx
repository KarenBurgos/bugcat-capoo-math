import divImg from "../../../Assets/img/div.png";
import Container from "../container";
import ShowDivisionParts from "./divisionParts";
import Arrow from "../../../Assets/rightArrow.svg";

export default function step2() {
  return (
    <div>
      <Container img={divImg} step="2" color="#98E6E6">
        <section>
          <p className="py-4">
            Si el divisor es un solo digito tomamos un solo dígito del dividendo
          </p>
        </section>

        <section className="flex w-full">
          <table className="text-2xl">
            <tr>
              <td className="px-5 py-2">
                <span className="text-blue-medium">8</span>2
              </td>
              <td
                className="px-5 py-2 text-blue-medium"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                2
              </td>
            </tr>
          </table>
          <div className="md:pl-10 w-full">
            <ShowDivisionParts />
          </div>
        </section>

        <section className="bg-yellow-dark bg-opacity-20 my-10 px-7 py-6 md:p-10 rounded rounded-lg ">
          <p>
            Si el divisor fueran dos o mas digitos divimos con la misma cantidad
            de digitos en el dividendo. Por ejemplo 240 ÷ 12 el dividor que es
            12 tiene 2 dígitos asi que del dividendo tomamos tambien dos, osea
            24{" "}
          </p>
          <table className="mt-5 flex justify-center md:justify-start text-2xl">
            <tr>
              <td className="px-5 py-2">
                <span className="text-blue-medium">24</span>0
              </td>
              <td
                className="px-5 py-2 text-blue-medium"
                style={{
                  borderBottom: "2px solid  rgb(55 65 81)",
                  borderLeft: "2px solid  rgb(55 65 81)",
                }}
              >
                12
              </td>
            </tr>
          </table>
        </section>

        <p>
          Ahora buscamos un número que multiplicado por el divisor (2) nos de el
          dividendo (8). En este caso es 4, ya que 2 x{" "}
          <span className="text-amber-500">4</span> = 8. Lo colocamos en el
          cociente y el resultado de la multiplicación lo colocamos debajo del
          número que queremos dividir
        </p>
        <div className="grid md:flex my-10 text-2xl justify-center md:justify-start">
          <div className="grid justify-center md:justify-start">
            <p>2 x 1 = 2</p>
            <p>2 x 2 = 4</p>
            <p>2 x 3 = 6</p>
            <p className="text-blue-medium">
              2 x <span className="text-amber-500">4</span> = 8
            </p>
          </div>
          <div>
            <embed
              src={Arrow}
              className="px-10 rotate-90 my-10 md:rotate-0 md:m-0"
            />
          </div>
          <div>
            <table className="text-2xl">
              <tr>
                <td className="px-5 py-1">
                  <span className="text-blue-medium">8</span>2
                </td>
                <td
                  className="px-5 md:py-1 text-blue-medium"
                  style={{
                    borderBottom: "2px solid  rgb(55 65 81)",
                    borderLeft: "2px solid  rgb(55 65 81)",
                  }}
                >
                  2
                </td>
              </tr>
              <tr>
                <td className="px-5  text-blue-medium">8</td>
                <td className="px-5  text-blue-medium">4</td>
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

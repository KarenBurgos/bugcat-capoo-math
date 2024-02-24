import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Title from "../../components/header/Title";
import OperationsColor from "../../Assets/OperationsColor";
import SubTitle from "../../components/header/SubTitle";

export async function loader({ params }) {
  return params.operation;
}

function LayoutOperation() {
  const operation = useLoaderData();
  const location = useLocation();
  var operationText = operation

  console.log(location.path)
  console.log(operation)
  console.log(operationText)
  if (operation === "Multiplicacion")
    operationText = "Multiplicación"
  if (operation === "Division")
    operationText = "División"

  return (
    <div className="grid grid-rows-[20vh,80vh] md:grid-rows-[25vh,75vh] md:items-center">
      <div>
        <Title
          text={operationText}
          color={OperationsColor(operation)[0]}
          backButton={true}
        >
          {location.pathname == `/dificultad/${operation}` && (
            <SubTitle text={"Escoje la dificultad"} />
          )}
        </Title>
      </div>
      <div className="md:h-[75vh] w-full flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutOperation;

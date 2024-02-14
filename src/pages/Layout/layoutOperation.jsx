import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Title from "../../components/Title";
import OperationsColor from "../../Assets/OperationsColor";
import { SoundProvider } from "../../components/Sound";
import SubTitle from "../../components/SubTitle";
import Banner from "../../components/Banner";

export async function loader({ params }) {
  return params.operation;
}

function LayoutOperation() {
  const operation = useLoaderData();
  const location = useLocation();

  return (
    <div className="grid grid-rows-[20vh,80vh] md:grid-rows-[25vh,75vh] items-center">
      <div>
        <Title
          text={operation}
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

import {
  Outlet,
  useLoaderData
} from "react-router-dom";
import Menu from "../../components/menu/Menu";

export async function loader({ params }) {
  return params;
}

export default function LayoutMenuExplanation() {
  const params = useLoaderData();
  let operation = params.operation;

  if (operation == "Multiplicacion") {
    operation = "Multiplicación";
  } else if (operation == "Division") {
    operation = "División";
  }
 
  return (
    <div className="relative h-screen w-screen">
      <div className="h-full grid grid-rows-[10%,90%] items-center md:grid-rows-[30vh,70vh] justify-center">
        <Menu operation={operation}/>
        <div class="h-full w-ful justify-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

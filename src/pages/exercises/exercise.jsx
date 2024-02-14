import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import AddExercise from "../../components/exercises/addExercise";
import SubExercise from "../../components/exercises/subExercises";
import MultExercise from "../../components/exercises/multExercises";
import DivExercise from "../../components/exercises/divExercises";
import Banner from "../../components/Banner";
import OperationsColor from "../../Assets/OperationsColor";

export async function loader({ params }) {
  return params;
}

function Exercise() {
  const params = useLoaderData();
  const operation = params.operation;
  const difficult = params.difficult;

  // Determina qué componente de ejercicio mostrar según el tipo de operación
  const ExerciseComponent = () => {
    switch (params.operation) {
      case "Suma":
        return <AddExercise operation={operation} difficult={difficult} />;
      case "Resta":
        return <SubExercise operation={operation} difficult={difficult} />;
      case "Multiplicación":
        return <MultExercise operation={operation} difficult={difficult} />;
      case "División":
        return <DivExercise operation={operation} difficult={difficult} />;
      default:
        return null;
    }
  };

  return (
    <div className="md:h-full w-full">
      <section className="flex flex-col h-full">
        <div className="">
          <Banner
            difficult={params.difficult}
            difficultcolor={OperationsColor(params.operation)[0]}
          />
        </div>

        <div className="md:flex justify-center items-center h-full w-full">
          <ExerciseComponent />
        </div>
      </section>
    </div>
  );
}

export default Exercise;

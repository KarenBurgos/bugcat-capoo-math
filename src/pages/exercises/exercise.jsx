import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import AddExercise from "../../components/exercises/addExercise"
import SubExercise from "../../components/exercises/subExercises";
import MultExercise from "../../components/exercises/multExercises";
import DivExercise from "../../components/exercises/divExercises";
import Banner from "../../components/Banner"
import OperationsColor from "../../Assets/OperationsColor"

export async function loader({ params }) {
  return params;
}

function Exercise() {
  const params = useLoaderData();
  const operation = params.operation
  const difficult = params.difficult

  // Determina qué componente de ejercicio mostrar según el tipo de operación
  const ExerciseComponent = () => {
    switch (params.operation) {
      case "Suma":
        return <div className="border border-4 border-green-600"><AddExercise operation={operation} difficult={difficult} /></div>
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
    <div className="border border-4 h-full border-red-700">
      <Banner
        difficult={params.difficult}
        difficultcolor={OperationsColor(params.operation)[0]}
      />
      <div className="  border border-4 border-yellow-medium">

        <ExerciseComponent />
      
      <Outlet />
      </div>
    </div>
  );
}

export default Exercise;
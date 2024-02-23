import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LearnAddition from "./add/learnAddition";
import LearnSubtraction from "./subtraction/learnSubtraction";
import LearnMultiplication from "./multiplication/learnMultiplication";
import LearnDivision from "./division/learnDivision";
import PaginationAddition from "../../components/explanation/Addition/pagination";
import PaginationSubtraction from "../../components/explanation/Subtraction/pagination";
import PaginationMultiplication from "../../components/explanation/Multiplication/pagination";
import PaginationDivision from "../../components/explanation/Division/pagination";


export async function loader({ params }) {
  return params;
}

function Learn() {
  const params = useLoaderData();
  const operation = params.operation;
  const page = params.page;
  const [currentPage, setCurrentPage] = useState(page);

  {useMemo(
    () => (
      setCurrentPage(page)
    ),
    [operation],
  )}
  console.log(page)
  console.log(currentPage)

  const OperationComponent = () => {
    return (
      <div class="md:h-full w-full grid grid-rows-[80vh,10vh] md:grid-rows-[80%,20%] grid-cols-1 justify-between">
        <div className="overflow-hidden overflow-y-auto"> {/*Si la explicacion sobrepasa su espacio colocar un scroll*/}
          {operation === "Suma" && <LearnAddition page={page} currentPage={currentPage} />}
          {operation === "Resta" && <LearnSubtraction page={page} currentPage={currentPage} />}
          {operation === "Multiplicacion" && <LearnMultiplication page={page} currentPage={currentPage} />}
          {operation === "Division" && <LearnDivision page={page} currentPage={currentPage} />}
        </div>
        <div className="flex justify-center items-center w-full"> {/*Paginación de cada operación*/}
          {operation === "Suma" && <PaginationAddition page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
          {operation === "Resta" && <PaginationSubtraction page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
          {operation === "Multiplicacion" && <PaginationMultiplication page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
          {operation === "Division" && <PaginationDivision page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </div>
      </div>
    );
  };

  return (
    <div className="md:h-full w-full">
      <OperationComponent />
    </div>
  );
}

export default Learn;

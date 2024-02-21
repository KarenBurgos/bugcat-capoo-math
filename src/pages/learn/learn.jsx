import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Step1 from "../../components/explanation/Addition/Step1";
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

  const OperationComponent = () => {
    switch (operation) {
      case "Suma":
        return (
          <div class="h-full w-full grid grid-rows-[80%,10%] md:grid-rows-[80%,20%] grid-cols-1 justify-between">
            <div className="overflow-hidden overflow-y-auto h-full">
              <LearnAddition page={page} currentPage={currentPage} />
            </div>
            <div className="flex justify-center items-center w-full">
              <PaginationAddition
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        );
      case "Resta":
        return (
          <div class="h-full w-full grid grid-rows-[80%,10%] md:grid-rows-[80%,20%] grid-cols-1 justify-between">
            <div className="overflow-hidden overflow-y-auto h-full">
              <LearnSubtraction page={page} currentPage={currentPage} />
            </div>
            <div className="flex justify-center items-center w-full">
              <PaginationSubtraction
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        );
      case "Multiplicacion":
        return (
          <div class="h-full w-full grid grid-rows-[80%,10%] md:grid-rows-[80%,20%] grid-cols-1 justify-between">
            <div className="overflow-hidden overflow-y-auto">
              <LearnMultiplication page={page} currentPage={currentPage} />
            </div>
            <div className="flex justify-center items-center w-full">
              <PaginationMultiplication
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        );
      case "Division":
        return (
          <div class="h-full w-full grid grid-rows-[80%,10%] md:grid-rows-[80%,20%] grid-cols-1 justify-between">
            <div className="overflow-hidden overflow-y-auto">
              <LearnDivision page={page} currentPage={currentPage} />
            </div>
            <div className="flex justify-center items-center w-full">
              <PaginationDivision
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full">
      <OperationComponent />
    </div>
  );
}

export default Learn;

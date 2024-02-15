import React, { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Step1 from "../../components/explanation/Addition/Step1";
import LearnAddition from "./add/learnAddition";
import LearnSubtraction from "./subtraction/learnSubtraction";
import LearnMultiplication from "./multiplication/learnMultiplication";
import LearnDivision from "./division/learnDivision";
import PaginationAddition from "../../components/explanation/Addition/pagination";
import PaginationSubtraction from "../../components/explanation/Subtraction/pagination"
import PaginationMultiplication from "../../components/explanation/Multiplication/pagination"
import PaginationDivision from "../../components/explanation/Division/pagination"


export async function loader({ params }) {
  return params;
}

function Learn() {
  const params = useLoaderData();
  const operation = params.operation
  const page= params.page

  const OperationComponent = () => {
    switch (operation) {
      case "Suma":
        return (
          <div class="h-full w-full grid grid-rows-[80%,20%] justify-between ">
            <div className="overflow-hidden overflow-y-auto ">
            {/*  */}
              
                <LearnAddition page={page} />
            </div>
              <div className="flex justify-center items-center w-full">
                <PaginationAddition page={page}/>
              </div>
          </div>
        );
      case "Resta":
        return (
          <div class="h-full grid grid-rows-[90%,10%]">
            <LearnSubtraction page={page} />
            <PaginationSubtraction page={page}/>
          </div>
        );
      case "Multiplicacion":
        return (
          <div class="h-full grid grid-rows-[90%,10%]">
            <LearnMultiplication page={page} />
            <PaginationMultiplication page={page}/>
          </div>
        );
      case "Division":
        return (
          <div class="h-full grid grid-rows-[90%,10%]">
            <LearnDivision page={page} />
            <PaginationDivision page={page}/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full">
      <OperationComponent/>
    </div>
  );
}

export default Learn;
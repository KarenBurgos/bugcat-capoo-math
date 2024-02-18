import { useLocation } from "react-router";
import Explication from "../../../components/explanation/Subtraction/explication";
import Step1 from "../../../components/explanation/Subtraction/step1";
import Step2 from "../../../components/explanation/Subtraction/step2";
import Step3 from "../../../components/explanation/Subtraction/step3";
import Step4 from "../../../components/explanation/Subtraction/step4";
import Step5 from "../../../components/explanation/Subtraction/step5";
import Step6 from "../../../components/explanation/Subtraction/step6";

export default function LearnSubtraction({  page, currentPage }) {
    const location = useLocation();
    const path = location.pathname
    return (
    <div className="h-full">
        {page === "Explicacion" && <Explication />}
        {page === "1" && <Step1 />}
        {page === "2" && <Step2 />}
        {page === "3" && <Step3 />}
        {page === "4" && <Step4 />}
        {page === "5" && <Step5 />}
        {page === "6" && <Step6 />}
    </div>
    )
}
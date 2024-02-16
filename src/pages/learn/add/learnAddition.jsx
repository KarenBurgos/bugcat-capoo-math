import Explication from "../../../components/explanation/Addition/explication";
import Step1 from "../../../components/explanation/Addition/Step1";
import Step2 from "../../../components/explanation/Addition/Step2";
import Step3 from "../../../components/explanation/Addition/Step3";
import Step4 from "../../../components/explanation/Addition/step4";

export default function LearnAddition({ page, currentPage }) {
    return (
    <div >
        {currentPage === "Explicacion" && <Explication />}
        {currentPage === 1 && <Step1 />}
        {currentPage === 2 && <Step2 />}
        {currentPage === 3 && <Step3 />}
        {currentPage === 4 && <Step4 />}
    </div>
    )
}
import Explication from "../../../components/explanation/Addition/explication";
import Step1 from "../../../components/explanation/Addition/Step1";
import Step2 from "../../../components/explanation/Addition/Step2";
import Step3 from "../../../components/explanation/Addition/Step3";
import Step4 from "../../../components/explanation/Addition/step4";

export default function LearnAddition({ page }) {
    return (
    <div className="overflow-y-auto">
        {page === "Explicacion" && <Explication />}
        {page === "1" && <Step1 />}
        {page === "2" && <Step2 />}
        {page === "3" && <Step3 />}
        {page === "4" && <Step4 />}
    </div>
    )
}
import Explication from "../../../components/explanation/Subtraction/explication";
import Step1 from "../../../components/explanation/Subtraction/step1";
import Step2 from "../../../components/explanation/Subtraction/step2";
import Step3 from "../../../components/explanation/Subtraction/step3";
import Step41 from "../../../components/explanation/Subtraction/step4-1";
import Step42 from "../../../components/explanation/Subtraction/step4-2";
import Step51 from "../../../components/explanation/Subtraction/step5-1";
import Step52 from "../../../components/explanation/Subtraction/step5-2";
import Step6 from "../../../components/explanation/Subtraction/step6";

export default function LearnSubtraction({ page }) {
    return (
    <div className="overflow-y-auto">
        {page === "Explicacion" && <Explication />}
        {page === "1" && <Step1 />}
        {page === "2" && <Step2 />}
        {page === "3" && <Step3 />}
        {page === "4-1" && <Step41 />}
        {page === "4-2" && <Step42 />}
        {page === "5-1" && <Step51 />}
        {page === "5-2" && <Step52 />}
        {page === "6" && <Step6 />}
    </div>
    )
}
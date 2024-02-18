import { useLocation } from "react-router-dom";
import Explication from "../../../components/explanation/Addition/explication";
import Step1 from "../../../components/explanation/Addition/Step1";
import Step2 from "../../../components/explanation/Addition/Step2";
import Step3 from "../../../components/explanation/Addition/Step3";
import Step4 from "../../../components/explanation/Addition/step4";
 
export default function LearnAddition({ page, currentPage }) {
    const location = useLocation();
    const path = location.pathname
    return (
    <div className="h-full">
        {path === "/aprender/Suma/Explicacion" && <Explication />}
        {path === "/aprender/Suma/1" && <Step1 />}
        {path === "/aprender/Suma/2" && <Step2 />}
        {path === "/aprender/Suma/3" && <Step3 />}
        {path === "/aprender/Suma/4" && <Step4 />}
    </div>
    )
}
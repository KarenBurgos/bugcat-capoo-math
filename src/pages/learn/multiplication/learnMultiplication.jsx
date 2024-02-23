import Explication from "../../../components/explanation/Multiplication/explication";
import Step1 from "../../../components/explanation/Multiplication/step1";
import Step2 from "../../../components/explanation/Multiplication/step2";
import Step3 from "../../../components/explanation/Multiplication/step3";
import Step4 from "../../../components/explanation/Multiplication/step4";
import Step5 from "../../../components/explanation/Multiplication/step5";
import Step6 from "../../../components/explanation/Multiplication/step6";
import Step7 from "../../../components/explanation/Multiplication/step7";

export default function LearnMultiplication({ page }) {
  return (
    <div>
      {page === "Explicacion" && <Explication />}
      {page === "1" && <Step1 />}
      {page === "2" && <Step2 />}
      {page === "3" && <Step3 />}
      {page === "4" && <Step4 />}
      {page === "5" && <Step5 />}
      {page === "6" && <Step6 />}
      {page === "7" && <Step7 />}
    </div>
  );
}

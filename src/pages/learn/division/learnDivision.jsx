import Explication from "../../../components/explanation/Division/explication";
import Step1 from "../../../components/explanation/Division/Step1";
import Step2 from "../../../components/explanation/Division/Step2";
import Step3 from "../../../components/explanation/Division/Step3";
import Step4 from "../../../components/explanation/Division/Step4";
import Step5 from "../../../components/explanation/Division/Step5";
import Step6 from "../../../components/explanation/Division/Step6";
import Step7 from "../../../components/explanation/Division/Step7";
import Step8 from "../../../components/explanation/Division/Step8";

export default function LearnDivision({ page }) {
  return (
    <div className="h-full">
      {page === "Explicacion" && <Explication />}
      {page === "1" && <Step1 />}
      {page === "2" && <Step2 />}
      {page === "3" && <Step3 />}
      {page === "4" && <Step4 />}
      {page === "5" && <Step5 />}
      {page === "6" && <Step6 />}
      {page === "7" && <Step7 />}
      {page === "8" && <Step8 />}
    </div>
  );
}

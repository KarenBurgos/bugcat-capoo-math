import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  const navigation = useNavigate();

  function goBack() {
    navigation(-1);
  }

  return (
    <div
      onClick={goBack}
      className="absolute z-10 md:pt-2 px-8 hover:cursor-pointer"
    >
      <FaArrowLeftLong className="w-10 h-10 md:h-20 md:w-14" />
    </div>
  );
}

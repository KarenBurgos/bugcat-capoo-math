import CompletedImg from "../../../Assets/img/div.gif";
import BackgroundLines from "../../BackgroundLines";

//suma
export default function Step7() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-full">
      <p className="text-3xl">¡Completado!</p>
      <div className="flex items-center relative h-full">
        <img className="h-[40vh] md:h-[50vh]" src={CompletedImg} />
        <BackgroundLines full={true} />
      </div>
    </div>
  );
}

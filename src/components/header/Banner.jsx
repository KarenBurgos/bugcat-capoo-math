import SubTitle from "./SubTitle";

export default function Banner({ difficult, difficultcolor }) {

  return (
    <div
      className={`bg-${difficultcolor} bg-opacity-60 py-5 md:mx-20 md:my-5 rounded important`}
    >
      <SubTitle text={difficult} />
    </div>
  );
}

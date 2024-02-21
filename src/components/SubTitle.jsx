export default function SubTitle({ text, color }) {
  return <h2 className={`md:text-3xl text-center ${color}`}>{text}</h2>;
}

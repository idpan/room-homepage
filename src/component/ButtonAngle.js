export default function ButtonAngle(props) {
  return (
    <button className="w-16 h-16 lg:h-28 lg:w-28 bg-black hover:bg-[#454545] inline-flex justify-center items-center  " onClick={props.onClick}>
      {props.children}
    </button>
  );
}

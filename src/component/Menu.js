export default function Menu(props) {
  return (
    <li>
      <a className="text-slate-800 md:text-white peer" href="home">
        {props.children}
      </a>
      <hr className="border-t-2 border-t-white w-5 mt-2 mx-auto hidden peer-hover:block" />
    </li>
  );
}

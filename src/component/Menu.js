export default function Menu(props) {
  return (
    <li>
      <a className="text-slate-800 md:text-white peer md:text-xl" href={props.href}>
        {props.children}
      </a>
      <hr className=" border-t-2 border-t-white w-5 mt-2 mx-auto hidden md:block opacity-0 md:peer-hover:opacity-100" />
    </li>
  );
}

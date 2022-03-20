import Menu from "./Menu";
export default function Navbar(props) {
  return (
    <nav className="grid grid-cols-3 md:flex md:justify-start items-start   fixed justify-between gap-10 right-0 left-0 pt-16 ">
      <input className="peer hidden" type="checkbox" id="navbar" />
      <div className="pl-10">
        <label htmlFor="navbar" className="md:hidden cursor-pointer">
          <img src="/images/icon-hamburger.svg" alt="" />
        </label>
      </div>
      <div className="ml-10 pt-1">
        <a href="#home">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </div>

      <div className="flex h-0 md:h-fit md:opacity-100 md:static md:bg-transparent peer-checked:h-32 peer-checked:opacity-100  transition-opacity ease-in duration-300  opacity-0   items-center justify-between fixed left-0 top-0 right-0 px-8 bg-white ">
        <label htmlFor="navbar" className="sm:hidden cursor-pointer">
          <img src="/images/icon-close.svg" alt="close-icon" className="pointer" />
        </label>

        <ul className="flex gap-14 right-9 font-bold">
          <Menu>home</Menu>
          <Menu>shop</Menu>
          <Menu>about</Menu>
          <Menu>contact</Menu>
        </ul>
      </div>
    </nav>
  );
}

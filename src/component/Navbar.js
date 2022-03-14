export default function Navbar(props) {
  return (
    <nav className="flex sm:justify-start items-center gap-10  fixed justify-between right-0 left-0 pt-10 px-7">
      <input className="peer hidden" type="checkbox" id="navbar" />
      <label htmlFor="navbar" className="sm:hidden cursor-pointer">
        <img src="/images/icon-hamburger.svg" alt="" />
      </label>
      <div className="ml-10">
        <a href="#home">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </div>

      <div className="sm:hidden "></div>

      <div className="flex h-0 sm:h-fit sm:opacity-100 sm:static sm:bg-transparent peer-checked:h-32 peer-checked:opacity-100  transition-opacity ease-in duration-300  opacity-0   items-center justify-between fixed left-0 top-0 right-0 px-8 bg-white ">
        <label htmlFor="navbar" className="sm:hidden cursor-pointer">
          <img src="/images/icon-close.svg" alt="close-icon" className="pointer" />
        </label>

        <ul className="flex gap-14 right-9 font-bold">
          <li>
            <a className="text-white" href="home">
              home
            </a>
          </li>
          <li>
            <a className="text-white" href="shop">
              shop
            </a>
          </li>
          <li>
            <a className="text-white" href="about">
              about
            </a>
          </li>
          <li>
            <a className="text-white" href="contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

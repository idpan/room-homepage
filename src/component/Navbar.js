export default function Navbar(props) {
  return (
    <nav>
      <div className="hamburger-menu">
        <img src="/images/icon-hamburger.svg" alt="" />
      </div>
      <div>
        <a href="#home">
          <img src="/images/logo.svg" alt="hero" />
        </a>
      </div>
      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

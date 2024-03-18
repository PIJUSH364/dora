import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menus = () => (
    <Fragment>
      <ul>
        <li className="current">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-btn">

        <a href="#contact" className="btn">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Hire Me
          </button>
        </a>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      <header className="header desktop-menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#home">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
            </div>
            {/* Nav */}
            <nav className="nav">{menus()}</nav>
          </div>
        </div>
      </header>
      <header className={`header mobileNav `}>
        <div className={`container ${toggle ? "active" : ""}`}>
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#home">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
              {/* Toggle */}
              <div className="toggle" onClick={() => setToggle(!toggle)}>
                <span />
                <span />
                <span />
              </div>
            </div>
            {/* Nav */}
            <nav className="nav" style={{ display: toggle ? "block" : "none" }}>
              {menus()}
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

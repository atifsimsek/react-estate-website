import { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const gethMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <header className="h-wrapper ">
      <div className="h-container flexCenter innerWidth paddings">
        <img alt="logo" width={100} src="./logo.png " />
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="h-menu flexCenter" style={gethMenuStyles(menuOpen)}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button className="button">
              <a href="#">Contact</a>
            </button>
          </div>

          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="menu-icon"
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </header>
  );
};

export default Header;

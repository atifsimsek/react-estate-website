import "./header.css";
const Header = () => {
  return (
    <header className="h-wrapper ">
      <div className="h-container flexCenter innerWidth paddings">
        <img alt="logo" width={100} src="./logo.png " />
        <div className="h-menu flexCenter">
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

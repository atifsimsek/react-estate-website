import { HiLocationMarker } from "react-icons/hi";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="hero-des flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="stats flexCenter">
            <div className="flexColCenter stat">
              <span>
                <span>9000</span>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <span>2000</span>
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <span>28</span>
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

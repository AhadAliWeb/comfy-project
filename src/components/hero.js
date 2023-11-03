import bcg1 from "../assets/hero-bcg.jpeg";
import bcg2 from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-text-title">
            Design your <br />
            Comfort Zone
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            consectetur hic! Molestiae quod ex ipsa dicta aliquam qui voluptatum
            veniam repellendus blanditiis esse. Nihil, quibusdam
          </p>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </div>
        <div className="hero-images">
          <img src={bcg1} alt="" className="hero-img-1" />
          <img src={bcg2} alt="" className="hero-img-2" />
        </div>
      </section>
    </div>
  );
};
export default hero;

import { NavLink } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p>The one-stop shop to buy a look for your metaverse character</p>
        <NavLink to="/products">
          <button>Browse All</button>
        </NavLink>
      </div>
      <div>
      <img
          src="https://i.postimg.cc/x8GD3DNQ/Hero-Image.webp"
          alt="three models wearing three different looks"
        />
      </div>
    </div>
  );
};

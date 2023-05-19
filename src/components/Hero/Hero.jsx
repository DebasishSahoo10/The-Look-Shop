import {NavLink} from 'react-router-dom'
import "./Hero.css"

export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p>The one-stop shop to buy a look for your metaverse character</p>
        <NavLink to="/products" state={{gender:""}}><button>Browse All</button></NavLink>
      </div>
      <div>
        <img
          src="https://images2.imgbox.com/a4/f7/HExEl48M_o.png"
          alt=""
        />
      </div>
    </div>
  );
};

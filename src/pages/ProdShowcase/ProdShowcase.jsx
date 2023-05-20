import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useParams, NavLink } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo/Logo";
import "./ProdShowcase.css";

export const ProdShowcase = () => {
  const { state, dispatch } = useContext(DataContext);
  const { prodID } = useParams();
  const [prod, setProd] = useState({});
  useEffect(() => {
    setProd(state.products.find((item) => item.id === prodID));
  }, [state.products, prodID]);
  return (
    <>
      <Logo />
      <Nav />
      <div className="prod-card-holder">
        <div className="prod-card">
          <img src={prod.img} alt="" />
          <div className="product-card-details">
            <p>{prod.name}</p>
            <p>{prod.details}</p>
            <p>{prod.price} $</p>
            <p>{prod.rating} ⭐</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {state.cart.some((item) => item.id === prod.id) ? (
                <NavLink to="/cart">
                  <button>Go to Cart</button>
                </NavLink>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "MOVE_TO_CART", payload: prod })
                  }
                >
                  Move to Cart
                </button>
              )}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod })
                }
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

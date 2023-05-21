import { useContext } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { DataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
import "./Wishlist.css";
import { cartHandler, wishlisItemRemoval } from "../../utils/clickHandlers";
import { AuthContext } from "../../contexts/AuthContext";

export const Wishlist = () => {
  const { state, dispatch } = useContext(DataContext)
  const {authToken} = useContext(AuthContext)
  const moveToCartHandler = (item, authToken, dispatch) => {
    cartHandler(item, authToken, dispatch)
    wishlisItemRemoval(item, authToken, dispatch)
  }
  return (
    <div>
      <Logo />
      <Nav />
      {state.wishlist.length===0 && <h2 className="wishlist-h2">Your Wishlist Is Empty</h2>}
      <div className="wishlist">
        {state.wishlist.length > 0 && (
          <>
            {state.wishlist.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="" width={"150px"} />
                  <div className="product-card-details">
                    <NavLink to={`/products/${item.id}`}>
                      <p>{item.name}</p>
                    </NavLink>
                    <p>{item.price} $</p>
                    <p>{item.rating} ⭐</p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                    >
                      {state.cart.some((prod) => prod.id === item.id) ? (
                        <NavLink to="/cart">
                          <button>Go to Cart</button>
                        </NavLink>
                      ) : (
                        <button
                          onClick={() =>moveToCartHandler(item, authToken, dispatch)}
                        >
                          Move to Cart
                        </button>
                      )}
                      <button
                        onClick={() =>wishlisItemRemoval(item, authToken, dispatch)}
                      >
                        Remove from Wishlist
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

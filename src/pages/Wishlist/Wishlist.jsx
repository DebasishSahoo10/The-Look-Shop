import { useContext } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { DataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
import "./Wishlist.css";

export const Wishlist = () => {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div>
      <Logo />
      <Nav />
      <div className="wishlist">
        {state.wishlist.length === 0 ? (
          <h2>Your Wishlist Is Empty</h2>
        ) : (
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
                          onClick={() =>
                            dispatch({ type: "MOVE_TO_CART", payload: item })
                          }
                        >
                          Move to Cart
                        </button>
                      )}
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item,
                          })
                        }
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

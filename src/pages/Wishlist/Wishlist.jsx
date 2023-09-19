import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { NavLink } from "react-router-dom";
import "./Wishlist.css";
import { moveToCartHandler, wishlisItemRemoval } from "../../utils/clickHandlers";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const authToken = auth.authToken
  
  return (
    <div>
      <Logo />
      <Nav />
      {data.wishlist.length===0 && <h2 className="wishlist-h2">Your Wishlist Is Empty</h2>}
      <div className="wishlist">
        {data.wishlist.length > 0 && (
          <>
            {data.wishlist.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="" width={"150px"} />
                  <div className="product-list_card-details">
                    <NavLink to={`/products/${item.id}`}>
                      <p>{item.name}</p>
                    </NavLink>
                    <p>{item.price} $</p>
                    <p>{item.rating} ⭐</p>
                    <div className="wishlist-btn-container">
                      {data.cart.some((prod) => prod.id === item.id) ? (
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
export default Wishlist;
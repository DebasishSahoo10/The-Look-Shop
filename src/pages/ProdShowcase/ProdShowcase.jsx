import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo/Logo";
import "./ProdShowcase.css";
import '../Cart/Cart.css'
import { AddToCart } from "../../components/ProductList/AddToCart";
import { AddToWishlist } from "../../components/ProductList/AddToWishlist";

const ProdShowcase = () => {
  const { state } = useContext(DataContext);
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
          <div className="product-list_card-details">
            <p>{prod.name}</p>
            <p>{prod.details}</p>
            <p>{prod.price} $</p>
            <p>{prod.rating} ⭐</p>
            <div className="cart-btn-container">
              <AddToCart item={prod}/>
              <AddToWishlist item={prod}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProdShowcase;
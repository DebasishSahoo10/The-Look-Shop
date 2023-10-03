import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo/Logo";
import "./ProdShowcase.css";
import '../Cart/Cart.css'
import { AddToCart } from "../../components/ProductList/AddToCart";
import { AddToWishlist } from "../../components/ProductList/AddToWishlist";
import { useSelector } from "react-redux";

const ProdShowcase = () => {
  const data = useSelector(state => state.data)
  const { prodID } = useParams();
  const [prod, setProd] = useState({});
  useEffect(() => {
    setProd(data.products.find((item) => item.id === prodID));
  }, [data.products, prodID]);
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
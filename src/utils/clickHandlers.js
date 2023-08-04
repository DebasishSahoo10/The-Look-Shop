/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const cartHandler = (item, authToken, dispatch, isToast=true) => {
  (async () => {
    try {
      const cartCall = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        body: JSON.stringify({ product: item }),
      });
      const newCart = await cartCall.json();
      dispatch({ type: "SET_CART", payload: newCart.cart });
    } catch (err) {
      console.log(err);
    }
  })();
  if (isToast) {
    toast("➕ Added to Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }
};

export const cartItemRemoval = (item, authToken, dispatch, isToast=true) => {
  (async () => {
    try {
      const cartCall = await fetch("/api/user/cart/" + item._id, {
        method: "DELETE",
        headers: {
          authorization: authToken,
        },
      });
      const newCart = await cartCall.json();
      dispatch({ type: "SET_CART", payload: newCart.cart });
    } catch (err) {
      console.log(err);
    }
  })();
  if (isToast) {
    toast("➖ Removed from Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }
};

export const wishlistHandler = (item, authToken, dispatch, isToast=true) => {
  (async () => {
    try {
      const wishlistCall = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        body: JSON.stringify({ product: item }),
      });
      const newWishlist = await wishlistCall.json();
      dispatch({ type: "SET_WISHLIST", payload: newWishlist.wishlist });
    } catch (err) {
      console.log(err);
    }
  })();
  if (isToast) {
    toast("❤️ Added to Wishlist", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }
};

export const wishlisItemRemoval = (item, authToken, dispatch, isToast=true) => {
  (async () => {
    try {
      const wishlistCall = await fetch("/api/user/wishlist/" + item._id, {
        method: "DELETE",
        headers: {
          authorization: authToken,
        },
      });
      const newWishlist = await wishlistCall.json();
      dispatch({ type: "SET_WISHLIST", payload: newWishlist.wishlist });
    } catch (err) {
      console.log(err);
    }
  })();
  if (isToast) {
    toast("💔 Removed from Wishlist", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }
};

export const cartItemIncrement = (item, authToken, dispatch) => {
  (async () => {
    try {
      const incrementCall = await fetch("/api/user/cart/" + item._id, {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        body: JSON.stringify({ action: { type: "increment" } }),
      });
      const newQTY = await incrementCall.json();
      dispatch({ type: "SET_CART", payload: newQTY.cart });
    } catch (err) {
      console.log(err);
    }
  })();
};

export const cartItemDecrement = (item, authToken, dispatch) => {
  (async () => {
    try {
      const decrementCall = await fetch("/api/user/cart/" + item._id, {
        method: "POST",
        headers: {
          authorization: authToken,
        },
        body: JSON.stringify({ action: { type: "decrement" } }),
      });
      const newQTY = await decrementCall.json();
      dispatch({ type: "SET_CART", payload: newQTY.cart });
    } catch (err) {
      console.log(err);
    }
  })();
};

export const moveToCartHandler = (item, authToken, dispatch) => {
  cartHandler(item, authToken, dispatch, false)
  wishlisItemRemoval(item, authToken, dispatch, false)
  toast("🌟 Moved to Cart", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });
}

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export const handleCheckout = async (cartAmt, cart) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res) {
      toast.error("Razorpay failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_YlWEnLVnFzUw1y",
      amount: cartAmt * 80 * 100,
      currency: "INR",
      name: "THE LOOK SHOP",
      description: "Thank you for shopping with us",
      image: 'https://i.postimg.cc/rwQyqXd4/No3.webp',
      handler: function (response) {
        const orderData = {
          orderProducts: [...cart],
          amount: cartAmt,
          paymentId: response.razorpay_payment_id,
          userEmail: `testemail@email.com`,
        };
        toast.success(`Payment of Rs. ${cartAmt} is Succesful !`);
      },
      prefill: {
        name: `User Name`,
        email: `testemail@email.com`,
        contact: "9658508656",
      },
      theme: {
        color: "#d0f032",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
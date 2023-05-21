export const cartHandler = (item, authToken, dispatch) => {
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
};

export const cartItemRemoval = (item, authToken, dispatch) => {
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
};

export const wishlistHandler = (item, authToken, dispatch) => {
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
};

export const wishlisItemRemoval = (item, authToken, dispatch) => {
  (async () => {
    try {
      const wishlistCall = await fetch("/api/user/wishlist/" + item._id, {
        method: "DELETE",
        headers: {
          authorization: authToken,
        }
      });
      const newWishlist = await wishlistCall.json();
      dispatch({ type: "SET_WISHLIST", payload: newWishlist.wishlist });
    } catch (err) {
      console.log(err);
    }
  })();
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

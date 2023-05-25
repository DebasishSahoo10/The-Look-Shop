import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";

import "./App.css";
import Landing from "./pages/Landing";
import { RequiresAuth } from "./components/RequiresAuth";
import { LoadingFallback } from "./components/LoadingFallback";
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const ProdShowcase = lazy(() => import("./pages/ProdShowcase/ProdShowcase"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingFallback/>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:prodID" element={<ProdShowcase />} />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

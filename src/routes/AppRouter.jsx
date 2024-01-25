import { Route, Routes } from "react-router-dom"
import Home from "../views/home/Home"
import Products from "../views/products/Products"
import Layout from "../components/layout/Layout"
import Auth from "../views/auth/Auth"
import Product from "../views/product/Product"
import Checkout from "../views/chekout/Chekout"
import Profile from "../views/profile/Profile"
import About from "../views/about/about"
import NotFoundPage from "../views/notFoundPage/NotFoundPage"
import TermsAndConditios from "../views/terms/TermsAndConditions"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/terms" element={<TermsAndConditios/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Contact from "../Pages/Contact/Contact"
import Layout from "../Pages/Layout"

import PaymentOptions from "../Pages/PaymentOptions"
import Returns from "../Pages/PrivacyPolicies"
import PrivacyPolicies from "../Pages/Returns"
import Shop from "../Pages/Shop/Shop"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import CategoriesProduct from "../Pages/CategoriesProduct/CategoriesProduct"
import ElectroniCategory from "../Pages/ElectronicCategory/ElectroniCategory"
import WomensClothesCategory from "../Pages/WomenClothesCategory/WomenClothesCategory"
import MensClothesCategory from "../Pages/MensClothesCategory/MensClothesCategory"
import JeweleryCategory from "../Pages/JeweleryCategory/JeweleryCategory"
import Cart from "../Pages/Cart/Cart"



function Routing() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} ></Route>
                    <Route path="/home" element={<Home />} ></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/singleproduct/:id/:category" element={<SingleProduct />} ></Route>
                    <Route path="/contact" element={<Contact />} ></Route>
                    <Route path="/Cart" element={<Cart/>}></Route>
                    <Route path="/categoriesproduct/:category" element={<CategoriesProduct />} ></Route>
                    <Route path="/paymentoptions" element={<PaymentOptions />} ></Route>
                    <Route path="/returns" element={<Returns />} ></Route>
                    <Route path="/privacypolicies" element={<PrivacyPolicies />} ></Route>
                    <Route path="/ElectroniCategory" element={<ElectroniCategory />} ></Route>
                    <Route path="/JeweleryCategory" element={<JeweleryCategory />} ></Route>
                    <Route path="/MensClothesCategory" element={<MensClothesCategory />} ></Route>
                    <Route path="/WomensClothesCategory" element={<WomensClothesCategory />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )

}
export default Routing
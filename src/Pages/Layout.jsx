import { Outlet } from "react-router-dom"
import Navbar from "/src/components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function Layout(){
    return(
        <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
       

    )
}

export default Layout
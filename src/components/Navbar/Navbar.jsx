import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Navbar.css'
import Logo from '/image/Meubel House_Logos-05.png'
import carticon from '/image/ant-design--shopping-cart-outlined.svg'
import Sidebarcart from '../../src/Sidebarcart/Sidebarcart'



function Navbar() {

    const [showSidebarcart, setShowSidebarcart] = useState(false)

    function ShowSidebarcart() {
        setShowSidebarcart(true)
    }

    function hiddenSidebarcart() {
        let Finalresult = !showSidebarcart
        setShowSidebarcart(Finalresult)

    }
    function scrollWin() {
        window.scrollTo(0, 0);
    }


    return (
        <header>
            {showSidebarcart == true ? (
                <Sidebarcart
                    hiddenSidebarcart={hiddenSidebarcart} >

                </Sidebarcart>

            ) : null}


            <nav className="navbar">

                <div className='logo'>
                    <img src={Logo} alt="" />
                    <span id='logotext'>Shopingo</span>

                </div>


                <div className='nav'> 
                    <ul id='links'>
                        <li>
                            <Link to="/home" id='link' onClick={scrollWin} >Home</Link>

                        </li>

                        <li>
                            <Link to="/shop" id='link' className='link2' onClick={scrollWin}>Shop</Link>
                        </li>

                        <li>

                            <Link to="/contact" id='link' className='link3' onClick={scrollWin}>Contact</Link>

                        </li>





                    </ul>

               

                        <Link>  <img src={carticon} alt="carticon" id='iconcart' onClick={ShowSidebarcart} /></Link>
                 


                </div>






            </nav>
        </header>


    )
}

export default Navbar


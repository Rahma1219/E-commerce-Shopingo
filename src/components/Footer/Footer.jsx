import './Footer.css'
import iconQuality from '/image/Group.png'
import iconWarranty from '/image/guarantee.png'
import iconShiping from '/image/shipping.png'
import iconCussuport from '/image/customer-support.png'
import { Link } from 'react-router-dom'

function scrollWin() {
    window.scrollTo(0, 0);
  }


function Footer() {
    return (
        <div className='footer'>
            
            <div className='footerpart1'>
                <div className='div'>
                    <img src={iconQuality} alt="" />
                    <div className='text'>
                        <label>High Quality</label>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='div'>
                    <img src={iconWarranty} alt="" />
                    <div className='text'>
                        <label>Warranty Protection</label>
                        <p>Over 2 years</p>
                    </div>

                </div>
                <div className='div'>
                    <img src={iconShiping} alt="" />
                    <div className='text'>
                        <label>Free Shipping</label>
                        <p>Order over 150 $</p>
                    </div>

                </div>
                <div className='div'>
                    <img src={iconCussuport} alt="" />
                    <div className='text'>
                        <label>24 / 7 Support</label>
                        <p>Dedicated support</p>
                    </div>

                </div>

            </div>

            <div className='footerpart2'>

                <div>
                    <h3 id='titlefooter' >Shopingo.</h3>
                    <p id='para1'>400 University Drive Suite 200 Coral
                        Gables,<br />
                        FL 33134 USA</p>

                </div>

                <div className='links'>


                    <ul >
                        <h4>Links</h4>
                        <li>
                            <Link to="/home" id='link'  onClick={scrollWin}>Home</Link>

                        </li>

                        <li>
                            <Link to="/shop" id='link' onClick={scrollWin} >Shop</Link>
                        </li>


                        <li>

                            <Link to="/contact" id='link'  onClick={scrollWin}>Contact</Link>

                        </li>
                    </ul>
                </div>

                <div className='links2'>


                    <ul >
                        <h4>Help</h4>
                        <li>
                            <Link to="/paymentoptions" id='link' onClick={scrollWin} >Payment Options</Link>

                        </li>

                        <li>
                            <Link to="/returns" id='link' onClick={scrollWin} >Returns</Link>
                        </li>

                        <li>
                            <Link to="/privacypolicies" id='link' onClick={scrollWin} >Privacy Policies</Link>
                        </li>


                    </ul>
                </div>

            </div>

            <hr />
            <h5 id='endtext'>2023 Shopingo. All rights reverved</h5>


        </div>

    )
}
export default Footer
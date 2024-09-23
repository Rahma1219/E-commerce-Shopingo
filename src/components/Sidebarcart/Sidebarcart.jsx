import './Sidebarcart.css'
import iconclose from '../../../public/image/Group2.png'
import { useEffect, useState } from 'react'
import iconclose2 from '../../../public/image/icon-park-solid--close-one.svg'
import useCartStore from '../../Store/CartStore'
import { Link } from 'react-router-dom'


function Sidebarcart({ hiddenSidebarcart }) {


    const { Cart, removefromCart } = useCartStore((state) => ({
        Cart: state.Cart,
        removefromCart: state.removefromCart
    }))

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                setProduct(result)


            })
    }, [])



    return (

        <>


            <div id="bg3">
                <div className='Sidebar'>
                    <div className='headsidbar'>
                        <h3>Shopping Cart</h3>
                        <img src={iconclose} alt="" className='iconclose' onClick={hiddenSidebarcart} />
                    </div>
                    <hr className='hr' />
                    <div className='productinsidebar'>
                        {Cart.map((product) => (

                            <>
                                <div key={product.id} >
                                    <div className="product">
                                        <div>
                                            <img src={product.image} alt="" className='imgproduct' />
                                        </div>

                                        <div className='info2'>
                                            <p>{product.title}</p>
                                            <div className='calcprice'>
                                                <span>1 x </span>
                                                <span id='price'>$ {product.price} </span>

                                            </div>

                                        </div>
                                        <div>
                                            <button className='iconclose2'
                                                onClick={() => removefromCart(product.id)}>
                                                <img src={iconclose2} alt="" />
                                            </button>

                                        </div>
                                    </div>



                                </div>

                            </>
                        )


                        )}


                    </div>



                    <div className='sidebarfooter'>
                        <div className='subtotalsidbar'>
                            <p>Subtotal</p>
                     
                            <div id='price' >
                                ${" "}
                                {
                                    Cart.reduce((total, cartitem) => {
                                        const item = Cart.find((i) => i.id === cartitem.id);
                                        return total + (item?.price || 0) * 1;
                                    }, 0)
                                }
                            </div>
                        </div>
                        <div>
                                <hr className='hr3' />

                        </div>
                    
                        <Link to={`/Cart`} >
                            <div className='cartbtn'>
                                <button className='btncart' onClick={hiddenSidebarcart}>Cart</button>
                            </div>

                        </Link>

                    </div >


                </div>
            </div>
        </>

    )
}
export default Sidebarcart
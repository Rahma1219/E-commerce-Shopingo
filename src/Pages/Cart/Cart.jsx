import { useEffect, useState } from 'react'
import modules from './Cart.module.css'
import icondelete from '../../../public/image/ant-design--delete-filled.svg'
import useCartStore from '../../Store/CartStore'
import mainimg from '../../../public/image/bg.png'
import mainimg2 from '../../../public/image/bg2.png'
import Logo from '../../../public/image/Meubel House_Logos-05.png'
import arrowicon from '../../../public/image/weui--arrow-filled.svg'

function Cart() {
    const [cartdata, setCartData] = useState([])

    const { Cart, removefromCart } = useCartStore((state) => ({
        Cart: state.Cart,
        removefromCart: state.removefromCart
    }))

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                setCartData(result)


            })
    }, [])



    return (
        <>
        <section className={modules.section}>
        <div className={modules.image}>
                <img src={mainimg} alt="" className={modules.mainimg} />
                <img src={mainimg2} alt="" className={modules.mainimg2} />
                <div className={modules.over}>
                    <img src={Logo} alt="" />
                    <h1 className={modules.currentpage}>Cart</h1>
                    <div className={modules.textimg}>
                        <h2>Home</h2>
                        <img src={arrowicon} alt="" />
                        <h2 className={modules.text1} >Cart</h2>
                    </div>

                </div>
            </div>

            <div className={modules.Cartsec}>
                <div>
                    <div className={modules.leftsec}>
                        <div className={modules.t1}>
                            <p>Product</p>
                            <p className={modules.p1}>Price</p>
                        </div>


                        <div className={modules.t2}>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>


                    </div>




                    {Cart.map((products) => {
                        return (
                            <div key={products.id} className={modules.productinfo} >

                                <div className={modules.product}>
                                    <img src={products.image} alt="" className={modules.productimg} />
                                    <span>{products.title}</span>
                                    <p className={modules.price}> $ {products.price}</p>
                                </div>




                                <div className={modules.t4}>

                                    <span className={modules.quntity}>1</span>
                                    <span className={modules.p3}> ${products.price}</span>

                                </div>
                                

                                <div>
                                    <img src={icondelete} alt="" onClick={() => removefromCart(products.id)}  className={modules.iconimg}/>
                                </div>



                            </div>
                        )
                    })}

                </div>


                {/* in small screen        */}

                <div className={modules.smallscreen} >

                    <div className={modules.p2}>
                        {Cart.map((products) => {
                            return (
                                <div key={products.id} className={modules.productinfo2} >
                                    <div className={modules.t32}>
                                        <div className={modules.product2}>
                                            <p>Product</p>
                                            <span>{products.title}</span>
                                            <img src={products.image} alt="" className={modules.productimg2} />
                                        </div>

                                        <div className={modules.flex}>
                                            <p>Price</p>
                                            <label> ${products.price}</label>
                                        </div>



                                    </div>


                                    <div className={modules.t42}>
                                        <div className={modules.flex}>
                                            <p>Quantity</p>
                                            <p>1</p>
                                        </div>



                                        <img src={icondelete} alt="" onClick={() => removefromCart(products.id)} className={modules.icond} />
                                    </div>



                                </div>
                            )
                        })}</div>

                </div>




                <div className={modules.rightsec}>

                    <h2>Cart Totals</h2>
                    <div className={modules.total}>
                        <p>Total</p>
                        <div className={modules.totalprice}>
                            ${" "}
                            {
                                Cart.reduce((total, cartitem) => {
                                    const item = Cart.find((i) => i.id === cartitem.id);
                                    return total + (item?.price || 0) * 1;
                                }, 0)
                            }
                        </div>
                    </div>

                    <button>Check Out</button>



                </div>

            </div>
        </section>
           
        </>
    )
}
export default Cart
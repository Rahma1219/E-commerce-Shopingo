import React, { useEffect, useState } from 'react'
import modules from './Shop.module.css'
import mainimg from '../../../public/image/bg.png'
import mainimg2 from '../../../public/image/bg2.png'
import arrowicon from '../../../public/image/weui--arrow-filled.svg'
import Pagination from '../../components/Pagination/Pagination';
import Logo from '../../../public/image/Meubel House_Logos-05.png'
import { Link, useParams } from 'react-router-dom'
import useCartStore from '../../Store/CartStore';
function Shop() {

    const addToCart = useCartStore((state) => state.addToCart)

    const items = 8;
    const [allproducts, setAllProducts] = useState([])

    const [current, setCurrent] = useState(1)

    const NbPage = Math.ceil(allproducts.length / items);

    const Startindex = (current - 1) * items;
    const Endindex = Startindex + items;

    const currentcards = allproducts.slice(Startindex, Endindex)

    //Pagination


    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                setAllProducts(result)
     

            })
    }, [])



    return (
        <>
        <section className={modules.shopsec}>
        <div className={modules.image}>
                <img src={mainimg} alt="" className={modules.mainimg} />
                <img src={mainimg2} alt="" className={modules.mainimg2} />
                <div className={modules.over}>
                    <img src={Logo} alt=""  />
                    <h1 className={modules.currentpage}>Shop</h1>
                    <div className={modules.textimg}>
                        <h2>Home</h2>
                        <img src={arrowicon} alt="" />
                        <h2 className={modules.text1} >Shop</h2>
                    </div>

                </div>
            </div>


            <section className={modules.section}  >

                {currentcards.map((allproducts) => {
                    return (

                        <>

                            <div className={modules.card}  >
                                <div className={modules.cardimg}>
                                    <img src={allproducts.image} alt="" />
                                    <div className={modules.overlay}>
                                        <button className={modules.addtocart}
                                            onClick={() => addToCart(allproducts)}>Add to cart</button>
                                    </div>


                                </div>
                                <Link to={`/singleproduct/${allproducts.id}/${allproducts.category}`}
                                    className={modules.Link}>
                                    <div className={modules.info}>
                                        <p className={modules.categorytext}>{allproducts.category}</p>
                                        <br />
                                        <h5 className={modules.title} >{allproducts.title}</h5>
                                        <br />
                                        <p className={modules.price}>${allproducts.price}</p>

                                    </div>
                                </Link>

                            </div>



                        </>
                    )

                })}


                {currentcards.map((allproducts) => {
                    return (

                        <>

                            <div className={modules.card} >
                                <div className={modules.cardimg}>
                                    <img src={allproducts.image} alt="" />
                                    <div className={modules.overlay}>
                                        <button onClick={() => addToCart(allproducts)}
                                            className={modules.addtocart}>Add to cart</button>
                                    </div>


                                </div>
                                <Link to={`/singleproduct/${allproducts.id}/${allproducts.category}`}
                                    className={modules.Link}>
                                    <div className={modules.info}>
                                        <p className={modules.categorytext}>{allproducts.category}</p>

                                        <br />
                                        {/* <p className={modules.description}>{item.description}</p>
                                    <br />   */}
                                        <h5 className={modules.title} >{allproducts.title}</h5>
                                        <br />
                                        <p className={modules.price}>${allproducts.price}</p>

                                    </div>
                                </Link >
                            </div>



                        </>

                    )

                })}

            </section >


            <Pagination
                NbPage={NbPage}
                setCurrent={setCurrent}>


            </Pagination>


        </section>
           
        </>

    )
}


export default Shop
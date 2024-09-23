import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import modules from './SingleProduct.module.css'
import arrowicon from '../../../public/image/weui--arrow-filled.svg'
import iconfacebook from '../../../public/image/ic--baseline-facebook.svg'
import iconlinkedin from '../../../public/image/prime--linkedin.svg'
import icontwitter from '../../../public/image/ant-design--twitter-circle-filled.svg'
import stars from '../../../public/image/Group 88 (1).png'
import useCartStore from "../../Store/CartStore"






function SingleProduct() {

    const { id } = useParams()
    // const {inc,dec,count}= useStore();
    // console.log(id)

    const [singleproduct, setSingleProduct] = useState([])
    const [count, setCount] = useState(1);

    const addToCart = useCartStore((state) => state.addToCart)


    function Add() {
        let newValue = count + 1
        setCount(newValue)
    }
    function Minus() {
        let newValue = count - 1
        setCount(newValue)
        if (count <= 1) setCount(1)
    }

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(result => {
                setSingleProduct(result)
                // setLoading(false)

            })
    }, [])

    return (
        <>
            <section className={modules.sec}>
                <div className={modules.header}>
                    <div className={modules.headertext}>
                        <h2>Home</h2>
                        <img src={arrowicon} alt="" />
                        <h2>Shop</h2>
                        <img src={arrowicon} alt="" />
                        <div className={modules.verticalline}></div>

                        <p>{singleproduct.title}</p>

                    </div>
                </div>

                <section className={modules.singleproductpage}>
                    <img src={singleproduct.image} alt="" className={modules.image} />

                    <div className={modules.part2} >
                        <div className={modules.info}>
                            {/* <p className={modules.category}>{singleproduct.category}</p> */}
                            <h1 className={modules.title}>{singleproduct.title}</h1>
                            <p className={modules.price}>${singleproduct.price}</p>
                        </div>

                        <div className={modules.starsec} >
                            <img src={stars} alt="" className={modules.iconstar} />
                            <div className={modules.verticalline}></div>
                            <p>5 Customer Review</p>

                        </div>

                        <div className={modules.sizesec}>
                            <p>Size</p>
                            <div className={modules.size}>
                                <button>L</button>
                                <button>XL</button>
                                <button>XS</button>
                            </div>


                        </div>
                        <div className={modules.colorsec}>
                            <p>Color</p>
                            <div className={modules.color}>
                                <button className={modules.color1}></button>
                                <button className={modules.color2}></button>
                                <button className={modules.color3}></button>
                            </div>

                        </div>

                        <div className={modules.btnsec} >
                            <div className={modules.counter}>
                                <button onClick={Minus}>-</button>
                                <label>{count}</label>
                                <button onClick={Add}>+</button>
                            </div>

                            <div className={modules.addtocatr}>
                                <button onClick={() => addToCart(singleproduct)}>Add To Cart</button>
                            </div>


                        </div>

                        <hr className={modules.hr} />
                        <div className={modules.text}>
                            <div className={modules.inforow}>
                                <span className={modules.label}>SKU</span>
                                <span className={modules.colon}>:</span>
                                <span className={modules.word}>SS001</span>
                            </div>
                            <div className={modules.inforow}>
                                <span className={modules.label}>Category</span>
                                <span className={modules.colon}>:</span>
                                <span className={modules.word}>{singleproduct.category}</span>
                            </div>
                            <div className={modules.inforow}>
                                <span className={modules.label}>Share</span>
                                <span className={modules.colon}>:</span>
                                <span className={modules.icons}>
                                    <a href=""><img src={iconfacebook} alt="" /></a>
                                    <a href=""><img src={iconlinkedin} alt="" /></a>
                                    <a href=""><img src={icontwitter} alt="" /></a></span>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className={modules.hr2} />
                <div className={modules.sec2} >
                    <h1>Description</h1>
                    <p className={modules.description}>{singleproduct.description}</p>

                </div>

            </section>


        </>



    )
}
export default SingleProduct
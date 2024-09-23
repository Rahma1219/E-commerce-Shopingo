import React, { useEffect, useState } from 'react'
import modules from './Home.module.css'
import mainimg from '/image/Image.png'
import mainimg2 from '/image/Image2.png'
import electronicimg from '/image/2ac38bd7-f473-4048-b862-3deac6592b55.jpeg'
import jeweleryimg from '/image/935d97c0-ce18-4f65-8d89-843c4ed42da1.jpeg'
import menimg from '/image/Casual Beige Linen Men Suits Single Breasted Slim Fit Notch Lapel Blazer with Pants High Quality 2 Piece Wedding Costume Homme f - Beige _ XL.jpeg'
import womenimg from '/image/bb3cc27a-427b-4f25-8052-749d8f9860ec.jpeg'
import { Link } from 'react-router-dom'
function Home() {

    const [categories, setCategories] = useState([

    ])

   
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res => res.json())
            .then(result => {
                setCategories(result)


            })
    }, [])


    return (
        <div className={modules.sec1}>
            <img src={mainimg} alt="" className={modules.img} />
            <img src={mainimg2} alt="" className={modules.img2} />
            <h1>Categories</h1>


            <div className={modules.sec2}>
                <div className={modules.categoryimg}>

                    <Link to={`/ElectroniCategory/#electronic`} className={modules.link2}>
                        <img src={electronicimg} alt="" />
                    </Link>
                    <Link to={`/JeweleryCategory/#jewelery`} className={modules.link2}>
                        <img src={jeweleryimg} alt="" />
                    </Link>
                    <Link to={`/MensClothesCategory/#men's clothing`} className={modules.link2}>
                        <img src={menimg} alt="" />
                    </Link>
                    <Link to={`/WomensClothesCategory/#women's clothing`} className={modules.link2}>
                        <img src={womenimg} alt="" />
                    </Link>
                </div>
            </div>

            
            <div className={modules.namecategory}>
                <ul>
                    {categories.map((category, index) => (
                        <Link to={`/categoriesproduct/${category}`} className={modules.link2}>
                            <li key={index}>{category}</li>
                        </Link>

                    ))}
                </ul>
            </div>


        </div>









    )
}
export default Home
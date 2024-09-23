import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import modules from './JeweleryCategory.module.css'
import useCartStore from "../../Store/CartStore"


function JeweleryCategory() {

  const { category } = useParams()


  const [products, setProducts] = useState([])
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then(res => res.json())
      .then(result => {
        setProducts(result)

      })
  }, [])
  return (
    <>
    <section className={modules.section}>
    {products.map((item) => {
        return (
         
              <div>
            <div className={modules.card}  >
              <div className={modules.cardimg}>
                <img src={item.image} alt="" />
                <div className={modules.overlay}>
                  <button className={modules.addtocart} onClick={()=>addToCart(item)}>Add to cart</button>
                </div>
                

              </div>
              <Link to={`/singleproduct/${item.id}/${item.category}`} className={modules.Link}>
              <div className={modules.info}>
                <p className={modules.categorytext}>{item.category}</p>
                <br />
                <h5 className={modules.title} >{item.title}</h5>
                <br />
                <p className={modules.price}>${item.price}</p>         
              </div> 
                 </Link>
           
            </div>


          </div>
      
      

        )
      })
      }

    </section>
    
    </>





  )
}
export default JeweleryCategory
import { useEffect, useState } from "react"
// import Home from "../Home/Home"
import { Link, useParams } from "react-router-dom"
import modules from './CategoriesProduct.module.css'


function CategoriesProduct() {

  const { category } = useParams()
  // console.log(id)

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
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
          <Link to={`/singleproduct/${item.id}/${item.category}`} className={modules.Link}>
              <div>
            <div className={modules.card}  >
              <div className={modules.cardimg}>
                <img src={item.image} alt="" />
                <button className={modules.addtocart}>Add to cart</button>

              </div>

              <div className={modules.info}>
                <p className={modules.categorytext}>{item.category}</p>
                <br />
                <h5 className={modules.title} >{item.title}</h5>
                <br />
                <p className={modules.price}>${item.price}</p>
            

              </div>
            </div>


          </div>
          </Link>
      

        )
      })
      }

    </section>
    
    </>





  )
}
export default CategoriesProduct
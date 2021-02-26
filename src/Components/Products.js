import React, { useEffect } from 'react'

const Products = () => {

// const [products, setProducts] = React.useState([])

useEffect(()=>{
    const getAllProducts = async () => {
          try{
              const res = await fetch('http://localhost:3000/products')
              const json = await res.json()
              console.log('all products - json', json)
          } catch (error){
              console.error(
              );
          }
        }
        getAllProducts()
        },[])


    return(
        <div>
            <h2>Products</h2>
            <ul>
                <li>{[0].name}</li>
            </ul>
        </div>
    )
}

export default Products
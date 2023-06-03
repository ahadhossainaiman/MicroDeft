import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductDetails from './productDetails';


const Product = () => {
    const[product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log(product.products)
    const handleAddProduct=()=>{

    }

    const handleDelectProduct = (id)=>{
        const filterProduct = product.products.filter(item=>console.log(item))
    }
    return (
        <>
             {
                product?.products?.map(p=><ProductDetails product={p} handleDelectProduct={handleDelectProduct}></ProductDetails>)
            }
        </>
    );
}

export default Product;

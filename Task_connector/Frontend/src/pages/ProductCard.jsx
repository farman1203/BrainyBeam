import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Header from "./Header";

const ProductCard = () => {
  const [product, setProduct] = useState([
    {
      _id:"1",
      proimage:"https://ik.imagekit.io/qfnjexcqu/image_RxnFEBwlz.jpg",
      proname:"shoes",
      prodescription:"shoes for men",
      proprice:"499",
    }
  ]);

  useEffect(()=>{

    axios.get('http://localhost:3000/posts')
    .then((res)=>{
        console.log(res.data);
        setProduct(res.data.posts)
    })
    
  },[])
  
  return (
    <div className="card">
      {product.map((item) => (
        <div className="card-item" key={item._id}>
          <img
            src={item.proimage}
            alt={item.proname}
            className="card-img"
          />

          <div className="card-body">
            <h2>{item.proname}</h2>
            <p>{item.prodescription}</p>
            <h3>₹{item.proprice}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
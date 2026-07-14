import React, { useState } from "react";
import axios from "axios";


const AddProduct = () => {
  const [product, setProduct] = useState({
    proimage: null,
    proname: "",
    prodescription: "",
    proprice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    setProduct({
      ...product,
      proimage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("proimage", product.proimage);
    formData.append("proname", product.proname);
    formData.append("prodescription", product.prodescription);
    formData.append("proprice", product.proprice);

    try {
      const res = await axios.post(
        "http://localhost:3000/product",
        formData
      );

      alert("Product Added Successfully!");
      console.log(res.data);

      setProduct({
        proimage: null,
        proname: "",
        prodescription: "",
        proprice: "",
      });

      e.target.reset();
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          type="file"
          name="proimage"
          onChange={handleImage}
          required
        />

        <input
          type="text"
          name="proname"
          placeholder="Product Name"
          value={product.proname}
          onChange={handleChange}
          required
        />

        <textarea
          name="prodescription"
          placeholder="Product Description"
          rows="4"
          value={product.prodescription}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="proprice"
          placeholder="Product Price"
          value={product.proprice}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
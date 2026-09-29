import React from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const VendorProducts = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      category: "Fruits",
      price: "₹120",
      stock: 50,
    },
    {
      id: 2,
      name: "Organic Milk",
      category: "Dairy",
      price: "₹65",
      stock: 30,
    },
    {
      id: 3,
      name: "Basmati Rice",
      category: "Grocery",
      price: "₹180",
      stock: 20,
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: "₹40",
      stock: 45,
    },
  ];

  return (
    <div className="vendor-products">
      <div className="products-header">
        <div>
          <h2>My Products</h2>
          <p>Manage your store products</p>
        </div>

        <button className="add-product-btn">
          <FiPlus />
          Add Product
        </button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>

                <td>
                  <span
                    className={
                      product.stock < 25
                        ? "low-stock"
                        : "stock"
                    }
                  >
                    {product.stock}
                  </span>
                </td>

                <td>
                  <button className="edit-btn">
                    <FiEdit />
                  </button>

                  <button className="delete-btn">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorProducts;
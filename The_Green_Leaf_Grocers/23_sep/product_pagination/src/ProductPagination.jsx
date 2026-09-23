import React, { useState } from "react";

const ProductsPagination = () => {
    const products = [
        { id: 1, name: "Fresh Apples", price: "₹120" },
        { id: 2, name: "Organic Milk", price: "₹65" },
        { id: 3, name: "Basmati Rice", price: "₹180" },
        { id: 4, name: "Fresh Tomatoes", price: "₹40" },
        { id: 5, name: "Potatoes", price: "₹50" },
        { id: 6, name: "Green Vegetables", price: "₹80" },
        { id: 7, name: "Fresh Bread", price: "₹45" },
        { id: 8, name: "Orange Juice", price: "₹90" },
        { id: 9, name: "Bananas", price: "₹60" },
        { id: 10, name: "Cooking Oil", price: "₹150" },
        { id: 11, name: "Wheat Flour", price: "₹70" },
        { id: 12, name: "Sugar", price: "₹45" },
    ];

    const productsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );

    return (
        <div className="pagination-page">
            <h2>Our Products</h2>
            <p>Fresh products for your daily needs</p>

            <div className="product-grid">
                {currentProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            🛒
                        </div>

                        <h3>{product.name}</h3>

                        <p className="price">
                            {product.price}
                        </p>

                        <button>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button
                    onClick={() =>
                        setCurrentPage(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from(
                    { length: totalPages },
                    (_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? "active-page" : ""}
                            onClick={() =>
                                setCurrentPage(index + 1)
                            }
                        >
                            {index + 1}
                        </button>
                    )
                )}

                <button
                    onClick={() =>
                        setCurrentPage(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPagination;
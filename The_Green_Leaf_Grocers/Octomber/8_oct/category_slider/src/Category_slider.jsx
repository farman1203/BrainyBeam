import React from "react";
import {
    FiChevronLeft,
    FiChevronRight,
    FiCoffee,
    FiShoppingBag,
    FiPackage
} from "react-icons/fi";
import { FaApple } from "react-icons/fa";

const categories = [
    {
        id: 1,
        name: "Fruits",
        icon: <FaApple />
    },
    {
        id: 2,
        name: "Vegetables",
        icon: <FiPackage />
    },
    {
        id: 3,
        name: "Dairy",
        icon: <FiCoffee />
    },
    {
        id: 4,
        name: "Groceries",
        icon: <FiShoppingBag />
    },
    {
        id: 5,
        name: "Bakery",
        icon: <FiPackage />
    },
    {
        id: 6,
        name: "Beverages",
        icon: <FiCoffee />
    },
    {
        id: 7,
        name: "Snacks",
        icon: <FiShoppingBag />
    },
    {
        id: 8,
        name: "Organic",
        icon: <FaApple />
    },
    {
        id: 8,
        name: "Organic",
        icon: <FaApple />
    }
];

const CategorySlider = () => {

    const scrollLeft = () => {
        document
            .getElementById("category-slider")
            .scrollBy({
                left: -250,
                behavior: "smooth"
            });
    };

    const scrollRight = () => {
        document
            .getElementById("category-slider")
            .scrollBy({
                left: 250,
                behavior: "smooth"
            });
    };

    return (
        <section className="category-section">

            <div className="category-heading">
                <div>
                    <h2>Shop by Category</h2>
                    <p>Choose your favorite grocery category</p>
                </div>

                <div className="category-arrows">

                    <button onClick={scrollLeft}>
                        <FiChevronLeft />
                    </button>

                    <button onClick={scrollRight}>
                        <FiChevronRight />
                    </button>

                </div>
            </div>

            <div
                className="category-slider"
                id="category-slider"
            >

                {categories.map((category) => (
                    <div
                        className="category-card"
                        key={category.id}
                    >

                        <div className="category-icon">
                            {category.icon}
                        </div>

                        <h3>{category.name}</h3>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default CategorySlider;
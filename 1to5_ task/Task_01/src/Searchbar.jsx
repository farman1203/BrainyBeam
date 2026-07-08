import React, { useState } from 'react'

const Searchbar = () => {
    const [search, setSearch] = useState("");

    const foods = [
        "Pizza",
        "Burger",
        "Pasta",
        "Sandwich",
        "Biryani",
        "Apple",
        "Mango",
        "Noodles",
        "Fries",
        "Paneer Tikka",
    ]

    const filtersearch = foods.filter((food) =>
        food.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1>🍔 Searchable Food List</h1>

            <input
                type="text"
                placeholder="Search food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filtersearch.length > 0 ? (
                    filtersearch.map((foods, index) => (
                        <li key={index}>{foods}</li>
                    ))
                ) : (
                    <p>No food found</p>
                )}
            </ul>
        </div>
    )
}

export default Searchbar

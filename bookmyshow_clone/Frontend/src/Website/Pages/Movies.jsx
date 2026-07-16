import React, { useState } from 'react'
import Header from '../Components/Header'

const Movies = () => {

    const [data, setData] = useState([])


    return (
        <div>
            <Header/>
             {/* crousel */}
            <div className="container">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to={2} /> */}
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778912523150_sardarweb.jpg" alt="Los Angeles" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1782988193693_thedramaweb.jpg" alt=" Chicago" className="d-block w-100" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            {/* {
                data.map(() => {

                })
            } */}
        </div>
        </div>
    )
}

export default Movies

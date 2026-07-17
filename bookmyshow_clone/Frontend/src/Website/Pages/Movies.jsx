import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then((res) => {
                console.log(res.data);
                setData(res.data.movie)
            })
    }, [])


    return (
        <div className='clr'>
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
            </div>



            <div className="movie-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2>Filters</h2>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Languages</h3>
                            <span>Clear</span>
                        </div>

                        <div className="tags">
                            <button>English</button>
                            <button>Hindi</button>
                            <button>Gujarati</button>
                            <button>Tamil</button>
                            <button>Malayalam</button>
                            <button>Telugu</button>
                            <button>Kannada</button>
                            <button>Punjabi</button>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Genres</h3>
                            <span>Clear</span>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Format</h3>
                            <span>Clear</span>
                        </div>
                    </div>

                    <button className="cinema-btn">
                        Browse by Cinemas
                    </button>
                </aside>

                {/* Content */}
                <main className="content">
                    <h1>Movies In Ahmedabad</h1>

                    <div className="chips">
                        <span>English</span>
                        <span>Hindi</span>
                        <span>Gujarati</span>
                        <span>Tamil</span>
                        <span>Malayalam</span>
                        <span>Telugu</span>
                        <span>Kannada</span>
                        <span>Punjabi</span>
                    </div>

                    <div className="banner">
                        <h2 style={{ fontSize: 'x-large' }}>Coming Soon</h2>
                        <a href="/">Explore Upcoming Movies →</a>
                    </div>

                    <div className="movies">
                        {
                            data.map((item) => (
                                <div className="movie">
                                    <img
                                        src={item.image}
                                        
                                        alt="Movie Poster"
                                        />
                                    <h5>{item.name}</h5>
                                    <p>{item.language}</p>
                                </div>
                        ))
                        }

                    </div>
                </main>
            </div>

        </div>



    )
}

export default Movies

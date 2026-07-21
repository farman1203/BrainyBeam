import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then((res) => {
                setMovie(res.data.movie)
            })
    }, [])

    return (
        <div className='home'>

            {/* crousel */}
            <div className="container">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to={2} /> */}
                    </div>

                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active ">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1783002551142_webshowcasebannercomp.jpg" alt="Los Angeles" className="d-block rounded-3 w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1782988193693_thedramaweb.jpg" alt=" Chicago" className="d-block rounded-3 w-100" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>

                {/* movies poster */}
                <div>
                    <div className='flex'>
                        <p>Recommended Movies</p>
                        <Link to='/movie'>See all</Link>
                    </div>

                    <div className='row'>
                        {
                            movie.slice(0, 5).map((item) => (
                                <div className="col-2 m-3 p-0 hvr">
                                    <div className="card" style={{ width: '100%' }}>
                                        <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src={item.image} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-text">{item.action}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <img className='p-3 ' style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
                </div>

                <div>
                    <div className='flex mt-5'>
                        <p>The Best of live Event</p>
                    </div>

                    <div className='row'>
                        <div className="col-2 m-3 p-0 hvr">
                            <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" alt="" />
                        </div>
                        <div className="col-2 m-3 p-0 hvr">
                            <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTAgRXZlbnRz,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/amusement-parks-banner-desktop-collection-202503251132.png" alt="" />
                        </div>
                        <div className="col-2 m-3 p-0 hvr">
                            <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png" alt="" />
                        </div>
                        <div className="col-2 m-3 p-0 hvr">
                            <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-banner-desktop-collection-202503251132.png" alt="" />
                        </div>
                        <div className="col-2 m-3 p-0 hvr">
                            <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className='mt-5'>
                    <img style={{ width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt />
                </div>
                <div className='top'>
                    <h3>Premieres</h3>
                    <p>Brand new realease every friday</p>
                </div>

                <div className='premier '>
                    <div className='col-2'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00480914-luezcqbrmx-portrait.jpg" alt="" />
                        <h4>Obsession</h4>
                        <p>English</p>
                    </div>
                    <div className='col-2'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00013821-aenbdsjmra-portrait.jpg" alt="" />
                        <h4>Snitch</h4>
                        <p>English</p>
                    </div>
                    <div className='col-2'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00480914-luezcqbrmx-portrait.jpg" alt="" />
                        <h5>Obsession(preview)</h5>
                        <p>English</p>
                    </div>
                    <div className='col-2'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00500740-pubklvrklf-portrait.jpg" alt="" />
                        <h4>Boss(2025)</h4>
                        <p>English</p>
                    </div>
                    <div className='col-2'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00505845-yuhcqmwcle-portrait.jpg" alt="" />
                        <h4>undertone</h4>
                        <p>English</p>
                    </div>
                </div>


                <div className='flex mt-5'>
                    <p>Your Music Studio</p>
                </div>
                <div className='row'>
                    {
                        movie.slice(5, 10).map((item) => (
                            <div className="col-2 m-3 p-0 hvr">
                                <div className="card" style={{ width: '100%' }}>
                                    <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src={item.image} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.action}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>




            </div>
        </div>
    )
}

export default Home

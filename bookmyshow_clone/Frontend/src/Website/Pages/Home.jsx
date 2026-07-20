import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778912523150_sardarweb.jpg" alt="Los Angeles" className="d-block rounded-3 w-100" />
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
                        <div className="col-2 m-3 p-0 hvr">
                            <div className="card" style={{ width: '100%' }}>
                                <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyNy4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00452553-ahtvqhdary-portrait.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Dhamaal 4</h4>
                                    <p className="card-text">Adventure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2  p-0 hvr m-3">
                            <div className="card " style={{ width: '100%' }}>
                                <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjc3SysgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00452034-qrgdyxqlhb-portrait.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">The odyssey</h4>
                                    <p className="card-text">Action/Adventure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2  p-0 hvr  m-3">
                            <div className="card " style={{ width: '100%' }}>
                                <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA1Ni4ySysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369379-faqwzaebqc-portrait.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h6 className="card-title font-dark">Welcome to the jungle</h6>
                                    <p className="card-text">Action/Comedy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2  p-0 hvr  m-3">
                            <div className="card " style={{ width: '100%' }}>
                                <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAyOC41SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403805-cxrwswcesf-portrait.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Alpha</h4>
                                    <p className="card-text">Action</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 p-0 hvr   m-3">
                            <div className="card " style={{ width: '100%' }}>
                                <img className="card-img-top image-fluid" style={{ height: '380px', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxNS43SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00496605-fvycsspxld-portrait.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Evil dead burn</h4>
                                    <p className="card-text">Horror</p>
                                </div>
                            </div>
                        </div>
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





            </div>
        </div>
    )
}

export default Home

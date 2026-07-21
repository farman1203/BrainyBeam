import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ChevronDown } from 'lucide-react';


const Events = () => {

    return (
        <div className='clr'>
            <div className="movie-container mt-5">

                <aside className="sidebar">
                    <h2>Filters</h2>
                    <div id="accordion">

                        <div class="card">
                            <div class="card-header">
                                <a class="btn" className='card-header1' data-bs-toggle="collapse" href="#collapseOne">
                                    <h5><ChevronDown />Categories</h5>
                                    <span>Clear</span>
                                </a>
                            </div>
                            <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <div className="card1">
                                        <div className="tags">
                                            <button>Workshop</button>
                                            <button>Comedy Show</button>
                                            <button>Music Show</button>
                                            <button>performance</button>
                                            <button>Kids</button>
                                            <button>talks</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <a class="collapsed btn" className='card-header1' data-bs-toggle="collapse" href="#collapseTwo">
                                    <h5><ChevronDown />Date</h5>
                                    <span>Clear</span>
                                </a>
                            </div>
                            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <div className="card1">
                                        <div className="tags">
                                            <button>Today</button>
                                            <button>Tomorrow</button>
                                            <button>This weekend</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <a class="collapsed btn" className='card-header1' data-bs-toggle="collapse" href="#collapseThree">
                                    <h5><ChevronDown />Language</h5>
                                    <span>Clear</span>
                                </a>
                            </div>
                            <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <div className="card1">
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
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="cinema-btn">
                        Browse by Cinemas
                    </button>
                </aside>

                <main className="content">
                    <h1>Events In Ahmedabad</h1>

                    <div className="chips">
                        <span>Workshop</span>
                        <span>Comedy shows</span>
                        <span>Music shows</span>
                        <span>Performance</span>
                        <span>Meetups</span>
                        <span>Conference</span>
                        <span>Kids</span>
                        <span>Talks</span>
                    </div>

                    <div className="banner">
                        <h2 style={{ fontSize: 'x-large' }}>Coming Soon</h2>
                        <a href="#">Explore Upcoming Movies →</a>
                    </div>

                    <div className="movies">
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00484420-hphvzdylmz-portrait.jpg" alt="image" />
                            <h5>Khushiyan by Laksh Maheshwari</h5>
                            <h6>HK Mall:Ahmedabad</h6>
                            <p>Spoken word</p>
                            <p>₹499 onwards</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNiBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00411750-ylxfjsesjy-portrait.jpg" alt="image" />
                            <h5>The amit khuva show</h5>
                            <h6>Misty studio</h6>
                            <p>Stand up comedy</p>
                            <p>₹249 onwards</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA5IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00461755-wuauknvmft-portrait.jpg" alt="image" />
                            <h5>Allow me:A standup comedy show</h5>
                            <h6>HK Mall:Ahmedabad</h6>
                            <p>Stand up comedy</p>
                            <p>₹799 onwards</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00484684-qllypyphuh-portrait.jpg" alt="image" />
                            <h5>Clay Flower Bouquet</h5>
                            <h6>Team hortons:Ahmedabad</h6>
                            <p>Arts and Craft</p>
                            <p>₹799</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IFNlcA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00420747-qflezxfmpb-portrait.jpg" alt="image" />
                            <h5>chirag panjvani live</h5>
                            <h6>Mehdi Nawaz Jung hall:Ahmedabad</h6>
                            <p>Stand up comedy</p>
                            <p>₹499 onwards</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00503588-kxgjkpmsdu-portrait.jpg" alt="image" />
                            <h5>Jamming night</h5>
                            <h6>Titanuam city center</h6>
                            <p>club gigs</p>
                            <p>₹349 onwards</p>
                        </div>
                        <div className="movie">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMyBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00470582-gpwnsbpjbw-portrait.jpg" alt="image" />
                            <h5>SEVEN ELEVEN</h5>
                            <h6>Sproute cafe    </h6>
                            <p>Stand up comedy</p>
                            <p>₹100 onwards</p>
                        </div>

                    </div>

                </main>
            </div>

        </div>



    )
}

export default Events

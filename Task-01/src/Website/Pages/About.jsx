import React from 'react'

const About = () => {
    return (
        <div>
            {/*====== ABOUT PART START ======*/}
            <section id="about" className="about_area pt-130 pb-130">
                <div className="about_wrapper">
                    <div className="about_image bg_cover" style={{ backgroundImage: 'url(assets/images/about_image.jpg)' }} /> {/* about image */}
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="about_content">
                                    <div className="section_title">
                                        <h3 className="title">About Us <br /> TraveLand in <span>Numbers</span></h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna aliqyam era sed diam voluptua. At vero eos et accusam etjusto duo dolres etea reb. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                    </div> {/* section title */}
                                    <a href="javascript:void(0)" className="main-btn">Read More</a>
                                </div> {/* about content */}
                                <div className="about_counter d-flex flex-wrap">
                                    <div className="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                        <div className="counter_wrapper">
                                            <span className="counter">534</span>
                                            <p>Trips Done</p>
                                        </div> {/* single wrapper */}
                                    </div> {/* single counter */}
                                    <div className="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                        <div className="counter_wrapper">
                                            <span className="counter">424</span>
                                            <p>Corporate Clients</p>
                                        </div> {/* single wrapper */}
                                    </div> {/* single counter */}
                                    <div className="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                        <div className="counter_wrapper">
                                            <span className="counter">35</span>
                                            <p>Visited Countries</p>
                                        </div> {/* single wrapper */}
                                    </div> {/* single counter */}
                                    <div className="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="1.1s">
                                        <div className="counter_wrapper">
                                            <span className="counter">15</span>
                                            <p>Team Members</p>
                                        </div> {/* single wrapper */}
                                    </div> {/* single counter */}
                                </div> {/* about_counter */}
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                </div> {/* about wrapper */}
            </section>
            {/*====== ABOUT PART ENDS ======*/}


        </div>
    )
}

export default About

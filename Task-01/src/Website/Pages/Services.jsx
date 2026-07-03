import React from 'react'

const Services = () => {
    return (
        <div>
            <section id="services" className="services_area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Service We Provide</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row pb-150">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div className="services_icon">
                                    <i className="lni lni-apartment" />
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Hotel Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div> {/* single service */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.4s">
                                <div className="services_icon">
                                    <i className="lni lni-plane" />
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Flight Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div> {/* single service */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.6s">
                                <div className="services_icon">
                                    <i className="lni lni-ship" />
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Ship Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div> {/* single service */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                <div className="services_icon">
                                    <i className="lni lni-car-alt" />
                                </div>
                                <div className="services_content">
                                    <h4 className="title">Car Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod.</p>
                                </div>
                            </div> {/* single service */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>


        </div>
    )
}

export default Services

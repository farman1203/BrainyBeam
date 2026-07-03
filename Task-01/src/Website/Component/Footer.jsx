import React from 'react'

const Footer = () => {
    return (
        <div>
            {/*====== FOOTER PART START ======*/}
            <section id="footer" className="footer_area">
                <div className="footer_widget pt-50 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                                <div className="footer_about mt-50">
                                    <a href="#"><img src="assets/images/logo.svg" alt="logo" /></a>
                                    <p>Lorem ipsum dolor sifsddt amet, conse tetur sadipscing elitr, sed diam onumy eirmod tempor invidunt ut labore et dolore magna aliquya.</p>
                                   
                                </div> {/* footer about */}
                            </div>
                            <div className="col-lg-4 col-md-12 order-md-3 order-lg-2">
                                <div className="footer_link_wrapper d-flex flex-wrap">
                                    <div className="footer_link mt-45">
                                        <h4 className="footer_title">Quick Link</h4>
                                        <ul className="link">
                                            <li><a href="javascript:void(0)">Home</a></li>
                                            <li><a href="javascript:void(0)">About</a></li>
                                            <li><a href="javascript:void(0)">Trip Pacakge</a></li>
                                            <li><a href="javascript:void(0)">Services</a></li>
                                            <li><a href="javascript:void(0)">Gallery</a></li>
                                        </ul>
                                    </div> {/* footer link */}
                                    <div className="footer_link mt-45">
                                        <h4 className="footer_title">Support</h4>
                                        <ul className="link">
                                            <li><a href="javascript:void(0)">Customer Support</a></li>
                                            <li><a href="javascript:void(0)">Privacy &amp; Policy</a></li>
                                            <li><a href="javascript:void(0)">Terms &amp; Condition</a></li>
                                            <li><a href="javascript:void(0)">Forum</a></li>
                                            <li><a href="javascript:void(0)">Tour Guide</a></li>
                                        </ul>
                                    </div> {/* footer link */}
                                </div> {/* footer link wrapper */}
                            </div>
                            <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
                                <div className="footer_subscribe mt-45">
                                    <h4 className="footer_title">Subscribe Newsletter</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam.</p>
                                    <div className="subscribe_form">
                                        <form action="#">
                                            <input type="text" placeholder="Enter email" />
                                            <button><i className="lni lni-arrow-right" /></button>
                                        </form>
                                    </div>
                                </div> {/* footer subscribe */}
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                    <p className="text-center mt-90">Designed and Developed by <a href="https://uideck.com/" target="_blank">UIdeck</a> <br /> Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                </div> {/* footer widget */}
            </section>
            {/*====== FOOTER PART ENDS ======*/}

        </div>
    )
}

export default Footer

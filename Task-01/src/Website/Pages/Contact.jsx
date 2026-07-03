import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact_area pt-120 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Get in Touch</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="contact_form">
                        <form action="assets/contact.php" method="POST" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="single_form">
                                        <select id="country" name="country">
                                            <option value={0} selected disabled>Select Trip</option>
                                            <option value={1}>Trip 1</option>
                                            <option value={2}>Trip 2</option>
                                            <option value={3}>Trip 3</option>
                                            <option value={4}>Trip 4</option>
                                            <option value={5}>Trip 5</option>
                                        </select>
                                    </div> {/* single form */}
                                </div>
                                <div className="col-lg-12">
                                    <div className="single_form">
                                        <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
                                    </div> {/* single form */}
                                </div>
                                <div className="col-lg-12">
                                    <div className="single_form">
                                        <button type="submit" className="main-btn">Send Message</button>
                                    </div> {/* single form */}
                                </div>
                            </div> {/* row */}
                            <p className="form-message pt-30" />
                        </form>
                    </div> {/* row */}
                </div> {/* container */}
            </section>


        </div>
    )
}

export default Contact

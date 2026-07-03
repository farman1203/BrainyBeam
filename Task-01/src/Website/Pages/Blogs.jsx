import React from 'react'

const Blogs = () => {
    return (
        <div>
            <section id="blog" className="blog_area pt-120 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center pb-25">
                                <h3 className="title">Recent Blog Post</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianum eirmod tempor invidunt ut labore et dolore magna </p>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single_blog mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-1.jpg" alt="blog" />
                                </div>
                                <div className="blog_content">
                                    <div className="blog_meta">
                                        <ul>
                                            <li>Posted by: <a href="javascript:void(0)">Michle Smith</a></li>
                                            <li>14 June 2023</li>
                                        </ul>
                                    </div>
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod tempor invidunt ut labore et dolore magn aaliq yam erat, sed diam voluptua.</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn aaliq yam erat, sed diam voluptua. At vero eos et accusam et justo dolores  ea rebum Stet clita kasd gubergren sea.</p>
                                </div>
                            </div> {/* single blog */}
                        </div>
                        <div className="col-lg-6">
                            <div className="single_blog d-sm-flex mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-2.jpg" alt="blog" />
                                </div>
                                <div className="blog_content blog_content_2 media-body">
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod temporinvi unt ut labore et dolore</a></h4>
                                    <p>Lorem ipsum dolor sit ametcon setetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <a href="javascript:void(0)" className="more">Read More</a>
                                </div>
                            </div> {/* single blog */}
                            <div className="single_blog d-sm-flex mt-30">
                                <div className="blog_image">
                                    <img src="assets/images/blog-3.jpg" alt="blog" />
                                </div>
                                <div className="blog_content blog_content_2 media-body">
                                    <h4 className="blog_title"><a href="javascript:void(0)">Tonumy eirmod temporinvi unt ut labore et dolore</a></h4>
                                    <p>Lorem ipsum dolor sit ametcon setetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <a href="javascript:void(0)" className="more">Read More</a>
                                </div>
                            </div> {/* single blog */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>

        </div>
    )
}

export default Blogs

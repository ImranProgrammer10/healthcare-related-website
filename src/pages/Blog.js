import React from 'react';
import { Link } from 'react-router-dom';
import './css/blog.css';

const Blog = () => {
    return (
        <section class="space">
            <div class="container container-custom">
                <div class="row">
                    <div class="col-md-8">
                        <form action="#">
                            <div class="blog-list">
                                <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img.jpg" class="img-fluid" alt="#" />
                                <div class="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div class="blog-text-wrap">
                                    <div class="blog-comment-top">
                                        <p><i class="far fa-user"></i>Jhone Doe <span>|</span> <i class="far fa-user"></i>Jhone Doe</p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <Link to="#" class="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                            <div class="blog-list">
                                <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img-full1.jpg" class="img-fluid" alt="#" />
                                <div class="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div class="blog-text-wrap">
                                    <div class="blog-comment-top">
                                        <p><i class="far fa-user"></i>Jhone Doe <span>|</span> <i class="far fa-user"></i>Jhone Doe</p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <Link to="#" class="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                            <div class="blog-list">
                                <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img-full1.jpg" class="img-fluid" alt="#" />
                                <div class="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div class="blog-text-wrap">
                                    <div class="blog-comment-top">
                                        <p><i class="far fa-user"></i>Jhone Doe <span>|</span> <i class="far fa-user"></i>Jhone Doe</p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <Link to="#" class="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <div class="blog-sidebar">
                            <div class="blog-sidebar_heading">
                                <h4>Search</h4>
                            </div>
                            <div class="blog-sidebar_wrap">
                                <div class="blog-sidebar_content blog-sidebar_search">
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search here" id="exampleFormControlInput1" />
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="blog-sidebar">
                            <div class="blog-sidebar_heading">
                                <h4>Popular Posts</h4>
                            </div>
                            <div class="blog-sidebar_wrap">
                                <div class="blog-sidebar_content">
                                    <Link to="#" class="thumbnail-wrap">
                                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/thambnail-1.jpg" alt="#" />
                                        <div class="thumbnail-hover">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>
                                    </Link>
                                    <div class="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                                <div class="blog-sidebar_content">
                                    <Link to="#" class="thumbnail-wrap">
                                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/thambnail-2.jpg" alt="#" />
                                        <div class="thumbnail-hover">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>
                                    </Link>
                                    <div class="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                                <div class="blog-sidebar_content">
                                    <Link to="#" class="thumbnail-wrap">
                                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/thambnail-3.jpg" alt="#" />
                                        <div class="thumbnail-hover">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>
                                    </Link>
                                    <div class="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-sidebar">
                            <div class="blog-sidebar_heading">
                                <h4>Categories</h4>
                            </div>
                            <div class="blog-sidebar_wrap">
                                <ul class="blog-sidebar_category">
                                    <li><Link to="#">Dental Care</Link> <span>15</span></li>
                                    <li><Link to="#">Eye Care</Link> <span>11</span></li>
                                    <li><Link to="#">Allergic Issue</Link> <span>6</span></li>
                                    <li><Link to="#">Cardiology</Link> <span>9</span></li>
                                    <li><Link to="#">Neurology Sargery</Link> <span>8</span></li>
                                    <li><Link t0="#">Allergic Issue</Link> <span>1</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-sidebar">
                            <div class="blog-sidebar_heading">
                                <h4>Tags</h4>
                            </div>
                            <div class="blog-sidebar_wrap">
                                <ul class="blog-sidebar_tags">
                                    <li><Link to="#">Medical</Link></li>
                                    <li><Link to="#">Health</Link></li>
                                    <li><Link to="#">Doctor</Link></li>
                                    <li><Link to="#">Health Lifestyle</Link></li>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Eye Care</Link></li>
                                    <li><Link to="#">Allergic</Link></li>
                                    <li><Link to="#">Diagnosis</Link></li>
                                    <li><Link to="#">Rehabitation</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="blog-join_us">
                            <div class="blog-join_us-content">
                                <h6>AD BANNER</h6>
                                <h3>JOIN US</h3>
                                <p>Lorem ipsum dolor sit amet conse</p>
                                <Link to="#" class="btn btn-dark">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
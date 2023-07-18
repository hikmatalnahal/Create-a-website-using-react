import React from 'react';
import '../css/latestnews.css';
import h1 from "../imgHome/1.png";
import h22 from "../imgHome/22.png";
import h23 from "../imgHome/23.png";
import h24 from "../imgHome/24.png";
import h25 from "../imgHome/25.png";
import h26 from "../imgHome/26.png";
import fb from "../imgHome/footer/fb.png";
import is from "../imgHome/footer/is.png";
import tw from "../imgHome/footer/tw.png";
import i1 from "../imgHome/footer/i1.png";
import i2 from "../imgHome/footer/i2.png";
import i3 from "../imgHome/footer/i3.png";

class Letestnews extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,800;1,900&family=Roboto:ital,wght@0,100;0,400;0,900;1,700;1,900&display=swap"
                    rel="stylesheet" />
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <div class="header">
                    <div class="container">
                        <div class="nav-left">
                            <div class="img-logo">
                                <img decoding="async" class="logo" src={h1} />
                            </div>
                        </div>
                        <div class="nav-right">
                            <div class="right-link">
                                <a href="./" class="homa-active">Home</a>
                                <a href="./about">About</a>
                                <a href="./services"> Services</a>
                                <a href="./latestnews">Latest News</a>
                                <a href="./ConactUs">Conat Us</a>
                                <a href="#" class="support">support </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="img-banner">
                        <div class="heading">
                            <h1 class="black">Latest News</h1>
                            <p>Follow us for the latest news and articles
                            </p>
                        </div>
                        <img src={h22} alt="balls image" class="balls-img" />
                    </div>
                </div>

                <div class="portfolio" id="portfolio">
                    <div class="container">
                        <ul class="navbar2">
                            <li><a href="#home" class="homa-active">ALL</a></li>
                            <li><a href="#movies">Digital Marketing</a></li>
                            <li><a href="#coming">Website development</a></li>
                            <li><a href="#newsletter">software</a></li>
                        </ul>
                        <div class="portfolio-content">
                            <div class="card2">
                                <a href="./latest2"><img src={h23} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h24} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li >Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h25} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>
                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h26} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li >Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h23} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h24} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}> Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h25} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>
                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h26} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h23} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>
                            <div class="card2">
                                <a href="./latest2"><img src={h24} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>
                                </div>
                            </div>
                            <div class="card2">
                                <a href="./ latest2"><img src={h25} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>UI/UX</li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>
                                </div>
                            </div>
                            <div class="card2">
                                <a href="./ latest2"><img src={h26} alt="" /></a>
                                <div class="info">
                                    <h4>Blog Title</h4>
                                    <li>Digital Marketing </li>
                                    <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                    <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>


                <div className="footer">
                    <div className="footer-container">
                        <section className="top-part">
                            <p className="ready-started">Ready to get started?</p>
                            <button className="footer-btn">Get Started</button>
                        </section>
                        <div className="middle-part">
                            <div className="middle-flex">
                                <p>
                                    Subscribe to our newsletter
                                </p>
                                <div className="footer-input">
                                    <input type="text" name="email" id="footer-input" placeholder="Email address" />
                                    <div className="footer-input-icon"> <i className="fa-solid fa-angle-right"></i></div>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>Home</li>
                                    <li>About US</li>
                                    <li>Services</li>
                                    <li>Latest News</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Help</li>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <div className="contact-widgett">
                                    <img src={i1} alt="phone" />
                                    <h5>Address:</h5>
                                    <p>28 Division St, New York, NY 10002, USA</p>
                                </div>
                                <div className="contact-widgett">
                                    <img src={i2} alt="phone" />
                                    <h5>Email:</h5>
                                    <p>Startnext@Gmail.Com</p>
                                </div>
                                <div className="contact-widgett">
                                    <img src={i3} alt="phone" />
                                    <h5>Phone:</h5>
                                    <p>+ (321) 984 75413545</p>
                                </div>
                            </div>
                        </div>
                        <div className="lower-part">
                            <div className="flex-footer">
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div className="flex-footer2">
                                <img src={fb} alt="" />
                                <img src={is} alt="" />
                                <img src={tw} alt="" />
                            </div>
                        </div>
                        <div className="footer-bottom" >
                            <p className="footer-bottom-p">© 2023 Techreif. All Rights Reserved</p>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default Letestnews;

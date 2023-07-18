import React from 'react';
import '../css/about.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import h1 from "../imgHome/1.png";
import h11 from "../imgHome/11.png";
import h12 from "../imgHome/12.png";
import h13 from "../imgHome/13.png";
import h22 from "../imgHome/22.png";
import h27 from "../imgHome/about1.png";
import h28 from "../imgHome/about2.png";
import h29 from "../imgHome/about2.png";
import h30 from "../imgHome/about4.png";
import fb from "../imgHome/footer/fb.png";
import is from "../imgHome/footer/is.png";
import tw from "../imgHome/footer/tw.png";
import i1 from "../imgHome/footer/i1.png";
import i2 from "../imgHome/footer/i2.png";
import i3 from "../imgHome/footer/i3.png";
import h32 from "../imgHome/Frame.png";

class About extends React.Component {
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />

                <div class="header">
                    <div class="container">
                        <div class="nav-left">
                            <div class="img-logo">
                                <img decoding="async" class="logo" src={h1} />
                            </div>
                        </div>
                        <div class="nav-right">
                            <div class="right-link">
                                <a href="./">حHome</a>
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
                            <h1 class="black">About US</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                            </p>
                        </div>
                        <img src={h22} alt="balls image" class="balls-img" />
                    </div>
                </div>


                <div class="container">
                    <div class="description">
                        <img src={h32} alt="people looking for something!" class="people-svg" />
                        <div class="desc-flex">
                            <h3 class="about-title">About The Company</h3>
                            <div class="descr">
                                <h2 class="hero-heading">Secure <span class="red-txt" style={{ color: 'lightgreen' }}>IT
                                    Solutions</span>for a more secure environment</h2>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>






                <div class="portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="special-heading">Our Awesome Team</h2>
                        <p>you can see our projects</p>
                        <div class="portfolio-content">
                            <div class="card2">
                                <img src={h27} alt="" />
                                <div class="info">
                                    <h4>Project name</h4>
                                    <li>UI/UX</li>
                                    <li style={{ listStyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>

                                </div>
                            </div>
                            <div class="card2">
                                <img src={h28} alt="" />
                                <div class="info">
                                    <h4>Project name</h4>
                                    <li>Digital Marketing</li>
                                    <li style={{ listStyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                </div>
                            </div>
                            <div class="card2">
                                <img src={h29} alt="" />
                                <div class="info">
                                    <h4>Project name</h4>
                                    <li>Digital Marketing</li>
                                    <li style={{ listStyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>

                                </div>
                            </div>
                            <div class="card2">
                                <img src={h30} alt="" />
                                <div class="info">
                                    <h4>Project name</h4>
                                    <li>Digital Marketing</li>
                                    <li style={{ listStyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>







                <div class="containe">
                    <div id="Images" class="image">
                        <div class="h1-image">
                            <h1>Happy customer</h1>
                            <h4>Clients' reviews</h4>
                        </div>

                        <div className="coming-container2">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                //   navigation
                                Pagination={{ clickable: true }}
                            >
                                <SwiperSlide className="our-com">
                                    <img src={h11} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                                <SwiperSlide className="our-com">
                                    <img src={h12} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                                <SwiperSlide className="our-com">
                                    <img src={h13} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                                <SwiperSlide className="our-com">
                                    <img src={h11} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                                <SwiperSlide className="our-com">
                                    <img src={h12} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                                <SwiperSlide className="our-com">
                                    <img src={h13} alt="" className="img" />
                                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                    <span className="material-symbols-outlined">grade</span>
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="company-facts grey">
                        <div class="h1-image">
                            <h1>COMPANY FACTS</h1>
                            <p>The service we offer is specifically designed <br />
                                We are proud of our design team</p>
                        </div>
                        <div class="widget-cards">
                            <div class="widget-card">
                                <p class="number">1000+</p>
                                <p>Completed Projects</p>
                            </div>
                            <div class="widget-card">
                                <p class="number">10k</p>
                                <p>Completed Projects</p>
                            </div>
                            <div class="widget-card">
                                <p class="number">15k</p>
                                <p>Completed Projects</p>
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

export default About;
import React from 'react';
import '../css/latestnews.css';
import h1 from "../imgHome/1.png";
import h3 from "../imgHome/3.jpg";
import h4 from "../imgHome/4.png";
import h5 from "../imgHome/5.png";
import h6 from "../imgHome/6.png";
import h22 from "../imgHome/22.png";
import fb from "../imgHome/footer/fb.png";
import is from "../imgHome/footer/is.png";
import tw from "../imgHome/footer/tw.png";
import i1 from "../imgHome/footer/i1.png";
import i2 from "../imgHome/footer/i2.png";
import i3 from "../imgHome/footer/i3.png";

class Services extends React.Component {
    toggleInfo(e) {
        const customText = e.target.parentNode.querySelector('.custom-text');
        const buttonText = e.target.parentNode.querySelector('.read-more-button');

        if (customText.style.display === 'none') {
            customText.style.display = 'block';
            buttonText.textContent = 'Learn Less <';
        } else {
            customText.style.display = "none";
            buttonText.textContent = "Learn More > ";
        }
    }
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
                

                <div className="header">
                    <div className="container">
                        <div className="nav-left">
                            <div className="img-logo">
                                <img decoding="async" className="logo" src={h1} alt="Logo" />
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="right-link">
                                <a href="./" className="homa-active">Home</a>
                                <a href="./about">About</a>
                                <a href="./services">Services</a>
                                <a href="./latestnews">Latest News</a>
                                <a href="./ConactUs">Contact Us</a>
                                <a href="#" className="support">Support</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="img-banner">
                        <div class="heading">
                            <h1 class="black">our services</h1>
                            <p>The service we offer is specifically designed
                                <br />to meet your needs.
                            </p>
                        </div>
                        <img src={h22} alt="balls image" class="balls-img" />
                    </div>
                </div>




                <div class="portfolio" id="portfolio">
                    <div class="container">
                        <div class="portfolio-content">
                            <div class="card">
                                <img src={h3} alt="" />
                                <div class="info">
                                    <h4>Graphic Design & Branding</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <li>Brand Guidelines</li>
                                    <li>Brand Identity</li>
                                    <li>Color Pallete</li>
                                    <li>Social Media Designs</li>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>                   </div>
                            </div>

                            <div class="card">
                                <img src={h4} alt="" />
                                <div class="info">
                                    <h4>Software</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <li>Setting up CRM</li>
                                    <li>Software recommendation for a specific business type</li>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>

                                </div>
                            </div>

                            <div class="card">
                                <img src={h5} alt="" />
                                <div class="info">
                                    <h4>Website Development & Design</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <li>Wordpress Development</li>
                                    <li>Ecommerce</li>
                                    <li>Website Hosting</li>
                                    <li>UI Design</li>
                                    <li>Copywriting</li>
                                    <li> Speed Optimization</li>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
                                </div>
                            </div>

                            <div class="card">
                                <img src={h6} alt="" />
                                <div class="info">
                                    <h4>Digital Marketing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <li>Google Ads</li>
                                    <li>Facebook Ads</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Influencer Marketing</li>
                                    <li>Google Ads</li>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
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

export default Services;













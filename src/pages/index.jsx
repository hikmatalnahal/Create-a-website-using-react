import React from 'react';
import '../css/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import h1 from "../imgHome/1.png";
import h2 from "../imgHome/2.jpg";
import h3 from "../imgHome/3.jpg";
import h4 from "../imgHome/4.png";
import h5 from "../imgHome/5.png";
import h7 from "../imgHome/7.png";
import h11 from "../imgHome/11.png";
import h12 from "../imgHome/12.png";
import h13 from "../imgHome/13.png";
import h14 from "../imgHome/14.jpg";
import h15 from "../imgHome/15.png";
import h16 from "../imgHome/16.png";
import h17 from "../imgHome/17.png";
import h18 from "../imgHome/18.png";
import h19 from "../imgHome/19.png";
import h20 from "../imgHome/20.png";
import fb from "../imgHome/footer/fb.png";
import is from "../imgHome/footer/is.png";
import tw from "../imgHome/footer/tw.png";
import i1 from "../imgHome/footer/i1.png";
import i2 from "../imgHome/footer/i2.png";
import i3 from "../imgHome/footer/i3.png";
class Index extends React.Component {
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />



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

                <div className="services" id="services">
                    <div className="container">
                        <div className="services-content">
                            <div className="col">
                                <div className="srv">
                                    <div className="text">
                                        <h1>Secure <span style={{ color: '#ff6262' }}>IT Solutions</span> for a more secure environment</h1>
                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                        <input type="submit" value="Submit" className="btn" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image image-column">
                                        <img src={h2} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="special-heading">Our Services</h2>
                        <p>The service we offer is specifically designed to meet your needs.</p>
                        <div className="portfolio-content">
                            <div className="card">
                                <img src={h3} alt="Image" />
                                <div className="info">
                                    <h4>Graphic Design & Branding</h4>
                                    <ul>
                                        <li>Brand Guidelines</li>
                                        <li>Brand Identity</li>
                                        <li>Color Palette</li>
                                        <li>Social Media Designs</li>
                                        <li>Printables</li>
                                    </ul>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={h4} alt="Image" />
                                <div className="info">
                                    <h4>Software</h4>
                                    <ul>
                                        <li>Setting up CRM</li>
                                        <li>Software recommendation for a specific business type</li>
                                    </ul>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={h5} alt="Image" />
                                <div className="info">
                                    <h4>Website Development & Design</h4>
                                    <ul>
                                        <li>Wordpress Development</li>
                                        <li>Ecommerce</li>
                                        <li>Website Hosting</li>
                                        <li>UI Design</li>
                                        <li>Copywriting</li>
                                        <li>Speed Optimization</li>
                                    </ul>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={h7} alt="Image" />
                                <div className="info">
                                    <h4>Digital Marketing</h4>
                                    <ul>
                                        <li>Google Ads</li>
                                        <li>Facebook Ads</li>
                                        <li>Search Engine Optimization</li>
                                        <li>Influencer Marketing</li>
                                    </ul>
                                    <p className="custom-text" style={{ display: 'none' }}>This is my additional text.</p>
                                    <button className="read-more-button" onClick={(e) => this.toggleInfo(e)}>Learn More <span className="arrow-icon">&gt;</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div id="Images2" className="image2">
                        <div className="h1-image2">
                            <h1>COMPANY FACTS</h1>
                            <h4>The service we offer is specifically designed <br /> We are proud of our design team</h4>
                        </div>
                        <div className="our-com2">
                            <img src={h14} alt="" width="150px" height="150px" className="img2" />
                            <h1>1000 +</h1>
                            <p className="p1">awards won</p>
                        </div>
                        <div className="our-com2">
                            <img src={h15} alt="" width="120px" height="150px" className="img2" />
                            <h1>50K +</h1>
                            <p className="p1">Happy Customers</p>
                        </div>
                        <div className="our-com2">
                            <img src={h16} alt="" width="150px" height="140px" className="img2" />
                            <h1>20 +</h1>
                            <p className="p1">Completed projects</p>
                        </div>
                    </div>
                </div>

                <div className="containe">
                    <div id="Images" className="image">
                        <div className="h1-image">
                            <h1>Happy customer</h1>
                            <h4>We are proud of our design team</h4>
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

                <div className="container">
                    <div className="h1-image">
                        <h1>Frequently asked questions</h1>
                        <h4>The service we offer is specifically designed<br /> We are proud of our design team</h4>
                    </div>
                    <div className="accordions">
                        <div className="accordion">
                            <div className="header">
                                <h5>Amet minim mollit non deserunt ullamco</h5>
                                <p className="showAcc"><i className="fa-regular fa-plus"></i></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion">
                            <div className="header">
                                <h5>Amet minim mollit non deserunt ullamco</h5>
                                <p className="showAcc"><i className="fa-regular fa-plus"></i></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion">
                            <div className="header">
                                <h5>Amet minim mollit non deserunt ullamco</h5>
                                <p className="showAcc"> <i className="fa-regular fa-plus"></i></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion">
                            <div className="header">
                                <h5>Amet minim mollit non deserunt ullamco</h5>
                                <p className="showAcc"> <i className="fa-regular fa-plus"></i></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion">
                            <div className="header">
                                <h5>Amet minim mollit non deserunt ullamco</h5>
                                <p className="showAcc"><i className="fa-regular fa-plus"></i></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>
                </div>

                <div className="portfolio2" id="portfolio2">
                    <div className="container">
                        <h2 className="special-heading2">This just happened</h2>
                        <p>Amet minim mollit non deserunt ullamco est<br /> sit aliqua dolor do amet sint.</p>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            // navigation
                            Pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h20} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h19} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h18} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h20} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h19} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box-img">
                                    <img src={h18} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div>
                            </SwiperSlide>

                        </Swiper>


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

export default Index;
import React from 'react';
import '../css/home.css';
import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import h18 from "../imgHome/18.png";
import h19 from "../imgHome/19.png";
import h20 from "../imgHome/20.png";
import Boximg from '../components/Main/boximg';
import Ourcom2 from '../components/Main/ourcom2';

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

                <Navpages />

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
                        {/* <div className="our-com2">
                            <img src={h14} alt="" width="150px" height="150px" className="img2" />
                            <h1>1000 +</h1>
                            <p className="p1">awards won</p>
                        </div> */}
                        <Ourcom2 image={h14} title=" 1000 +" Content="awards won" />
                        <Ourcom2 image={h15} title="50K +" Content="Happy Customers" />
                        <Ourcom2 image={h16} title="20 +" Content="Completed projects" />
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
                                data-pagination={{ clickable: true }}
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
                            data-pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                {/* <div className="box-img">
                                    <img src={h20} alt="" />
                                    <h3>Techreif is is transforming and scaling businesses successfully through services</h3>
                                    <span>Techreif Oct 20, 2022</span>
                                </div> */}
                                <Boximg image={h20} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Boximg image={h19} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Boximg image={h18} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Boximg image={h20} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Boximg image={h19} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Boximg image={h18} title="Techreif is is transforming and scaling businesses successfully through services" Techreif="Techreif Oct 20, 2022" />
                            </SwiperSlide>

                        </Swiper>


                    </div>
                </div>


                <Footerpage />
            </div>

        );
    }
}

export default Index;
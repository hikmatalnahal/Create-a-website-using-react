
import { Swiper, SwiperSlide } from 'swiper/react';
import h11 from "../imgHome/11.png";
import h12 from "../imgHome/12.png";
import h13 from "../imgHome/13.png";
import h22 from "../imgHome/22.png";
import h27 from "../imgHome/about1.png";
import h28 from "../imgHome/about2.png";
import h29 from "../imgHome/about3.png";
import h30 from "../imgHome/about4.png";
import h32 from "../imgHome/Frame.png";
import Widgetcard from '../components/About/widget-card';
import Card from '../components/About/card2';
const Aboutpages = () => {
    return (
        <>

            <div className="container">
                <div className="img-banner">
                    <div className="heading">
                        <h1 className="black">About US</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                        </p>
                    </div>
                    <img src={h22} alt="balls image" className="balls-img" />
                </div>
            </div>
            <div className="container">
                <div className="description">
                    <img src={h32} alt="people looking for something!" className="people-svg" />
                    <div className="desc-flex">
                        <h3 className="about-title">About The Company</h3>
                        <div className="descr">
                            <h2 className="hero-heading">Secure <span className="red-txt" style={{ color: 'lightgreen' }}>IT
                                Solutions</span>for a more secure environment</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <h2 className="special-heading">Our Awesome Team</h2>
                    <p>you can see our projects</p>
                    <div className="portfolio-content">
                        {/* <div className="card2">
                            <img src={h27} alt="" />
                            <div className="info">
                                <h4>Project name</h4>
                                <li>UI/UX</li>
                                <li style={{ listStyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>

                            </div>
                        </div> */}
                        <Card image={h27} Project="Project name" titel="UI/UX" conact="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                        <Card image={h28} Project="Project name" titel="Digital Marketing" conact="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                        <Card image={h29} Project="Project name" titel="UI/UX" conact="Lorem ipsum dolor sit amet, consectetur adipiscing" />
                        <Card image={h30} Project="Project name" titel="Digital Marketing" conact="Lorem ipsum dolor sit amet, consectetur adipiscing" />

                    </div>

                </div>
            </div>
            <div className="containe">
                <div id="Images" className="image">
                    <div className="h1-image">
                        <h1>Happy customer</h1>
                        <h4>Clients' reviews</h4>
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
                <div className="company-facts grey">
                    <div className="h1-image">
                        <h1>COMPANY FACTS</h1>
                        <p>The service we offer is specifically designed <br />
                            We are proud of our design team</p>
                    </div>
                    <div className="widget-cards">
                        {/* <div className="widget-card">
                            <p className="number">1000+</p>
                            <p>Completed Projects</p>
                        </div> */}
                        <Widgetcard tilte="1000+" Projects="Completed Projects" />
                        <Widgetcard tilte="10k" Projects="Completed Projects" />
                        <Widgetcard tilte="15k" Projects="Completed Projects" />
                    </div>

                </div>
            </div>
        </>
    );


}
export default Aboutpages;
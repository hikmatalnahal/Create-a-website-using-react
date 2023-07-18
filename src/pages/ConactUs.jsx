import React from 'react';
import '../css/ConactUs.css';
import h1 from "../imgHome/1.png";
import h21 from "../imgHome/21.png";
import h22 from "../imgHome/22.png";
import h27 from "../imgHome/27.png";

import fb from "../imgHome/footer/fb.png";
import is from "../imgHome/footer/is.png";
import tw from "../imgHome/footer/tw.png";
import i1 from "../imgHome/footer/i1.png";
import i2 from "../imgHome/footer/i2.png";
import i3 from "../imgHome/footer/i3.png";

class ConactUs extends React.Component {
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
                <div className="header">
                    <div className="container">
                        <div className="nav-left">
                            <div className="img-logo">
                                <img decoding="async" className="logo" src={h1} />
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="right-link">
                                <a href="./home" className="homa-active">Home</a>
                                <a href="./about">About</a>
                                <a href="./services"> Services</a>
                                <a href="./latestnews">Latest News</a>
                                <a href="./ConactUs">Conat Us</a>
                                <a href="#" className="support">support </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="img-banner">
                        <div className="heading">
                            <h1 className="black">Contact US</h1>
                            <p>Keep in Touch With us
                            </p>
                        </div>
                        <img src={h22} alt="balls image" className="balls-img" />
                    </div>
                </div>


                <div className="container">
                    <div className="description">
                        <img src={h27} alt="people looking for something!" className="people-svg" />
                        <div class="desc-flex">
                            <div class="descr" style={{ marginLeft: "50px" }}>
                                <h3 class="about-title">Contact with us know</h3>
                                <h2 class="hero-heading">We are with you to help you, just contact us</h2>
                            </div>



                            <div class="accordions">
                                <div class="accordion">
                                    <div class="header">
                                        <a href="#"><span class="material-symbols-outlined">
                                            pin_drop
                                        </span>28 Division St, New York, NY 10002, USA</a>
                                    </div>
                                </div>
                                <div className="accordion">
                                    <div className="header">
                                        <a href="#"><span className="material-symbols-outlined">call</span>Phone: + (321) 984 754</a>
                                    </div>
                                </div>
                                <div className="accordion">
                                    <div className="header" id='hemail'>
                                        <a href="#" className="email"><span class="material-symbols-outlined">
                                            mail
                                        </span>Email:Startnext@Gmail. Com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h2 class="special-heading">Drop Us a Line</h2>
                    <p>Fill out the contact form and we will get back to you shortly.</p>
                    <div class="form-sec">
                        <form class="form" action="#">
                            <div class="inputs">
                                <input type="text" class="input" placeholder="First Name" />
                                <input type="text" class="input" placeholder="Last Name" />
                                <input type="text" class="input" placeholder="Email" />
                                <select name="departments" id="">
                                    <option>Select A Department</option>
                                    <option value="Education">Education</option>
                                    <option value="Health">Health</option>
                                    <option value="Sport">Sport</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>
                            </div>
                            <textarea name="Message" rows="4" placeholder="Message"></textarea>
                            <button class="send-btn">Send Message</button>
                        </form>
                    </div>
                </div>
                <div class="container">
                    <iframe class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                        width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default ConactUs;



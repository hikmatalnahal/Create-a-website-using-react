import fb from "../../imgHome/footer/fb.png";
import is from "../../imgHome/footer/is.png";
import tw from "../../imgHome/footer/tw.png";
import i1 from "../../imgHome/footer/i1.png";
import i2 from "../../imgHome/footer/i2.png";
import i3 from "../../imgHome/footer/i3.png";

const Footerpage = () => {
    return (
        <>
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
        </>

    );

}
export default Footerpage;
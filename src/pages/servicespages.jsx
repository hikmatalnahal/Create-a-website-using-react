import h3 from "../imgHome/3.jpg";
import h4 from "../imgHome/4.png";
import h5 from "../imgHome/5.png";
import h6 from "../imgHome/6.png";
import h22 from "../imgHome/22.png";
const Servicespage = () => {
    return (
        <>
            <div class="container">
                <div class="img-banner">
                    <div class="heading">
                        <h1 class="black">our services</h1>
                        <p>The service we offer is specifically designed
                            <br />to meet your needs.
                        </p>
                    </div>
                    <img src={h22} alt="balls " class="balls-img" />
                </div>
            </div>

            <div class="portfolio" id="portfolio">
                <div class="container">
                    <div class="portfolio-content">
                        <div class="card">
                            <img src={h3} alt="asd" />
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
                            <img src={h4} alt="asd" />
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
                            <img src={h5} alt="asd" />
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
                            <img src={h6} alt="asd" />
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
        </>
    )
}
export default Servicespage;
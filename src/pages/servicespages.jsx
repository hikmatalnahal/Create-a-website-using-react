import h3 from "../imgHome/3.jpg";
import h4 from "../imgHome/4.png";
import h5 from "../imgHome/5.png";
import h6 from "../imgHome/6.png";
import h22 from "../imgHome/22.png";
import Servicess from "../components/services/Services";
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
                        {/* <div class="card">
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
                        </div> */}
                        <Servicess image={h3}
                            title="Graphic Design & Branding"
                            title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam"
                            title3="Brand Guidelines"
                            title4="Brand Identity"
                            title5="Color Pallete"
                            title6="Social Media Designs"
                            title7="This is my additional text."
                            title8="Learn More" />

                        <Servicess image={h4}
                            title="Software"
                            title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam"
                            title3="Setting up CRM"
                            title4="WordSoftware recommendation for a specific business typepress Development"
                            title5="Setting up CRM"
                            title6="WordSoftware recommendation for a specific business typepress Development"
                            title7="This is my additional text."
                            title8="Learn More" />

                        <Servicess image={h5}
                            title="Website Development & Design"
                            title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam"
                            title3="Ecommerce"
                            title4="Wordpress Development"
                            title5="UI Design"
                            title6="Copywriting"
                            title7="This is my additional text."
                            title8="Learn More" />

                        <Servicess image={h6}
                            title="Digital Marketing"
                            title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam"
                            title3="Google Ads"
                            title4="Facebook Ads"
                            title5="Search Engine Optimization"
                            title6="Google Ads"
                            title7="This is my additional text."
                            title8="Learn More" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicespage;
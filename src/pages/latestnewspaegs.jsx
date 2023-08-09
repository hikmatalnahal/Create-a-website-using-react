import Latestnewspaegs from "../components/Latest/latestnew";
import h22 from "../imgHome/22.png";
import h23 from "../imgHome/23.png";
import h24 from "../imgHome/24.png";
import h25 from "../imgHome/25.png";
import h26 from "../imgHome/26.png";
const Latestnewspages = () => {
    return (
        <>
            <div className="container">
                <div className="img-banner">
                    <div className="heading">
                        <h1 className="black">Latest News</h1>
                        <p>Follow us for the latest news and articles
                        </p>
                    </div>
                    <img src={h22} alt="balls" className="balls-img" />
                </div>
            </div>

            <div className="portfolio" id="portfolio">
                <div className="container">
                    <ul className="navbar2">
                        <li><a href="#home" className="homa-active">ALL</a></li>
                        <li><a href="#movies">Digital Marketing</a></li>
                        <li><a href="#coming">Website development</a></li>
                        <li><a href="#newsletter">software</a></li>
                    </ul>
                    <div className="portfolio-content">
                        {/* <div className="card2">
                            <a href="./latest2"><img src={h23} alt="asd" /></a>
                            <div className="info">
                                <h4>Blog Title</h4>
                                <li>UI/UX</li>
                                <li style={{ liststyle: "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                                <li style={{ liststyle: "none" }}>Techreif Oct 20, 2022 </li>

                            </div>
                        </div> */}
                        <Latestnewspaegs image={h23} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h24} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h25} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h26} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h23} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h24} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h25} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h26} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h23} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h24} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h25} title="Blog Title" title2="UI/UX" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                        <Latestnewspaegs image={h26} title="Blog Title" title2="Digital Marketing" title3="Lorem ipsum dolor sit amet, consectetur adipiscing " title4="Techreif Oct 20, 2022" />
                    </div>

                </div>


            </div>
        </>
    );
}
export default Latestnewspages;
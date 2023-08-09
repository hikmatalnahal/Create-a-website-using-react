import Latestnewspaegs from "../components/Latest/latestnew";
import h22 from "../imgHome/22.png";
import h23 from "../imgHome/23.png";
import h24 from "../imgHome/24.png";
import h25 from "../imgHome/25.png";
import h26 from "../imgHome/26.png";
const Latestnewspages = () => {
    return (
        <>
            <div class="container">
                <div class="img-banner">
                    <div class="heading">
                        <h1 class="black">Latest News</h1>
                        <p>Follow us for the latest news and articles
                        </p>
                    </div>
                    <img src={h22} alt="balls" class="balls-img" />
                </div>
            </div>

            <div class="portfolio" id="portfolio">
                <div class="container">
                    <ul class="navbar2">
                        <li><a href="#home" class="homa-active">ALL</a></li>
                        <li><a href="#movies">Digital Marketing</a></li>
                        <li><a href="#coming">Website development</a></li>
                        <li><a href="#newsletter">software</a></li>
                    </ul>
                    <div class="portfolio-content">
                        {/* <div class="card2">
                            <a href="./latest2"><img src={h23} alt="asd" /></a>
                            <div class="info">
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
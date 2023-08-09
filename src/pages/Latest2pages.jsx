import h22 from "../imgHome/22.png";
import h23 from "../imgHome/23.png";
import h24 from "../imgHome/24.png";
import h25 from "../imgHome/25.png";
import h26 from "../imgHome/26.png";
import Latestnewspaegs from "../components/Latest/latestnew";

const Latestpages = () => {
    return (
        <>
            <div class="container">
                <div class="img-banner">
                    <div class="heading">
                        <h1 class="black">Blog Title</h1>

                    </div>
                    <img src={h22} alt="balls " class="balls-img" />
                </div>
            </div>

            <div class="container">
                <div class="super-sec2">
                    <div class="panel2">
                    </div>
                </div>
                <div class="bt">
                    <input type="submit" value="submit" class="btn1" />
                </div>
            </div>

            <div class="container">
                <div class="container3">
                    <h1 class="h1">Lorem Ipsum Dolor Sit Amet</h1>
                    <p class="p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem pariatur accusantium
                        cum
                        illum
                        temporibus tempore eius nihil recusandae illo ducimus vero quia dicta voluptatibus, expedita maiores eos
                        perferendis quos!</p>
                    <p class="p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem pariatur accusantium
                        cum
                        illum
                        temporibus tempore eius nihil recusandae illo ducimus vero quia dicta voluptatibus, expedita maiores eos
                        perferendis quos!</p>
                </div>
            </div>

            <div class="portfolio" id="portfolio">
                <div class="container">
                    <h2 class="special-heading">Popular Blogs</h2>
                    <div class="portfolio-content">
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
export default Latestpages;
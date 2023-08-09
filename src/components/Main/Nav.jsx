import h1 from "../../imgHome/1.png";

const navpages = () => {
    return (
        <>
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


        </>
    );
}

export default navpages;
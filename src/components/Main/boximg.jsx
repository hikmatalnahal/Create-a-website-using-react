const Boximg = (props) => {
    return (
    <>
        <div className="box-img">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <span>{props.Techreif}</span>
        </div>
    </>
    );
}
export default Boximg;
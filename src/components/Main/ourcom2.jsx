const Ourcom2 = (props) => {
    return (
        <>
            <div className="our-com2">
                <img src={props.image} alt="" width="150px" height="150px" className="img2" />
                <h1>{props.title}</h1>
                <p className="p1">{props.Content}</p>
            </div>
        </>
    )
}
export default Ourcom2;
<<<<<<< HEAD
const Card = (props) => {
    return (
        <>
            <div className="card2">
                <img src={props.image} alt="" />
                <div className="info">
                    <h4>{props.Project}</h4>
                    <li>{props.titel}</li>
                    <li style={{ listStyle: "none" }}>{props.conact} </li>

                </div>
            </div>
        </>
    );

}
=======
const Card = (props) => {
    return (
        <>
            <div className="card2">
                <img src={props.image} alt="" />
                <div className="info">
                    <h4>{props.Project}</h4>
                    <li>{props.titel}</li>
                    <li style={{ listStyle: "none" }}>{props.conact} </li>

                </div>
            </div>
        </>
    );

}
>>>>>>> origin/main
export default Card;
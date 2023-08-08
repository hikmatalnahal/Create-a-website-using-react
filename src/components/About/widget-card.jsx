const Widgetcard = (props) => {
    return (
        <>
            <div className="widget-card">
                <p className="number">{props.tilte}</p>
                <p>{props.Projects}</p>
            </div>
        </>
    )

}
export default Widgetcard;
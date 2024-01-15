import "./style.css"

function Project(props) {
    return (
        <div className={`${props.className}`}>
        <img src={props.img} className="d-block" alt="..." height={400} width={800}/>
        <a href={props.link}>
        <div className="carousel-caption d-none d-md-block" id="caption">
            <h5>{props.title}</h5>
        </div>
        </a>
        </div>
    )
}

export default Project
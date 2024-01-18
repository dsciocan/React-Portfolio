import "./style.css"

function Project(props) {
    return (
        <div className={`${props.className}`}>
        <img src={props.img} className="d-block" alt="..." height={props.height} width={props.width}/>
        <div className={`${props.captionClass} d-none d-md-block`} id="caption">
        <a href={props.link}><h5>{props.title}</h5></a>
        <a href={props.repo}><p>GitHub Repo</p></a>
        </div>
        </div>
    )
}

export default Project
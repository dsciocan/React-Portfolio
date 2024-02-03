import Header from "../Header/header"
import NewProject from "../Project-Gallery/new-projects"
import "./style.css"

function Home() {
    return (
        <div className="container-fluid">
        <Header />
        <NewProject/>
        </div>
    )

}

export default Home
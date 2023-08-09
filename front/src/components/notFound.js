import "../App.css"
import { NavLink } from "react-router-dom"
const NotFound = ()=>{

    return(
       <main className="main-notfound">
           <p> Cette page n'existe pas</p>
           <NavLink to={"/accueil"}>Redirection sur la page accueil</NavLink>

       </main>
    )
}

export default NotFound
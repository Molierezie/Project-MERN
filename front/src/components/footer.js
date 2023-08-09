import "../App.css"
import logoInsta from "../attachement/logoinsta.png"
import { NavLink, Link } from "react-router-dom"

const Footer = ()=> {

return(
    <footer className="section-footer">

        <section className="section-footer-logo">

        <a className="a-footer-logo" aria-label="logo">WM</a>
        </section>

        <section className="section-footer-contact">
            <address className="footer-address">
            <NavLink className="footer-link-address" to={"/contact"}>Formulaire de contact</NavLink>
            
            <Link className="footer-link-address" href={"mailto:molierezie@outlook.fr"}>molierezie@outlook.fr</Link>
            <Link  className="footer-link-address" to="tel:+0614011328"> 06 14 01 13 28</Link>
                <p  className="footer-link-address">Paris, disponible sur toute l'île de France</p>
            </address>
        </section>
       

        <section className="section-footer-socialmedia">
            <a href="https://www.instagram.com/withmavs/" target="_blank">
            <img className="footer-socialmedia" src={logoInsta} alt="logo-instagram" aria-label="logo-instagram" />  
            </a>
        </section>

        <section className="section-footer-cgv">
            <h3>Les mentions légales</h3>
        </section>


</footer>
)


}

export default Footer
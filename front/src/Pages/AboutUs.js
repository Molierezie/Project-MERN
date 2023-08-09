import "../App.css"
import { NavLink } from "react-router-dom"
import imageXavier from "../attachement/xavier.webp"
import imageGires from "../attachement/gires.jpg"

const AboutUs = () =>{
    return(
        <main className="main-apropos">

    <h1 className="title-apropos">Qui est <span className="span-xav">XM</span> ? </h1>

    <section className="section-apropos">
        <p className="text-xm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium illo ad magni, esse et dignissimos, non quo dolor repudiandae quas inventore dolorem atque autem nisi libero tempore earum, at quasi qui facere ullam officia itaque. Fuga provident rem, saepe nam aliquid temporibus laborum deleniti consequuntur vel voluptatibus ipsam ullam architecto eveniet omnis magni doloremque unde repudiandae harum deserunt repellendus porro sapiente excepturi. Pariatur, recusandae adipisci ratione doloribus distinctio facilis! Doloribus!</p>
        <img className="img-apropos-xm" src={imageXavier} alt="photo xav" aria-label="photo xav"/>
        <h2 className="title-apropos-ga">Qui est <span className="span-gires">GirestArt</span> ? </h2>
        <p className="text-ga text-gires">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum perspiciatis eius libero nihil accusamus delectus soluta omnis consequatur nemo aut quod tempora placeat dolorem laudantium ducimus voluptate molestiae in illum asperiores impedit, rem fugit commodi vel enim. Officiis iste fugiat deleniti expedita dolorum, placeat suscipit. Tempore tenetur nesciunt vero blanditiis.</p>
        <img className="img-apropos-ga" src={imageGires} alt="photo gires" aria-label="photo gires"/>
    </section>

    <section className="section-btn-a-propos">
        <NavLink to={"/contact"}>
        <button className="button-a-propos">Me contacter</button>
        </NavLink>
    </section>

</main>
    )
}

export default AboutUs
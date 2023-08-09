import { NavLink } from "react-router-dom"
import imageFamille from "../attachement/newbornpremium.jpg"
import imagePortrait from "../attachement/portraitfront.jpg"
import imageMariage from "../attachement/mariageessentiel.jpg"

export const ServicesPage = () =>{



    return(

 <main className="main-services">
  <section className="section-services">
    <h2 className="section-title-services"> Mes Prestations </h2>
    <article className="cards-services articles-services-one animation-one">
      <img src={imagePortrait} alt="photo-prestation-portrait" aria-label="photo-prestation-portrait" className="img-articles-services" />
      <div className="infos-portrait">
        <h1 className="h-service">Portrait</h1>
       
        <NavLink to={"/prestation-portrait"} className="p-service"> Découvrez ma prestation </NavLink>
      </div>
    </article>
    <article className="cards-services articles-services-two animation-two">
      <img src={imageMariage} alt="photo-prestation-mariage" aria-label="photo-prestation-mariage" className="img-articles-services" />
      <div className="infos-mariage">
        <h1 className="h-service">Mariage</h1>
     
        <NavLink to={"/prestation-mariage"} className="p-service"> Découvrez ma prestation </NavLink>
      </div>
    </article>
    <article className="cards-services  articles-services-three animation-three">
      <img src={imageFamille} alt="photo-prestation-famille" aria-label="photo-prestation-famille" className="img-articles-services" />
      <div className="infos-famille">
        <h1 className="h-service">Famille</h1>
        <p className="p-service">Découvrez ma prestation</p>
      </div>
    </article>
  </section>
</main>

    )
}
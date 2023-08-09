import mariageBanniere from "../attachement/video/mariagebanniere.mp4"



export const VideoMariage = ()=>{


    return(

<section className="contenair7">
        {/* <video> */}
        <video src={mariageBanniere} autoPlay controls loop muted className="video" />

        <div className="title-banniere">

         <p>Votre film de Mariage inoubliable</p>
        <h1>avec With Mavs à la réalisation</h1>
        </div>
    </section>
    )
}
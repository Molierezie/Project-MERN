import "../App.css";

import WithMavsDescribe from "../attachement/xavdescribe.webp";
import imagePortrait from "../attachement/portraitfront.jpg";
import imageFamille from "../attachement/newbornpremium.jpg";
import imageMariage from "../attachement/mariageessentiel.jpg";

import tableauPaysage from "../attachement/tableaupaysagephillipine.jpg";
import tableuaAfro from "../attachement/tableauafrone.jpg";
import tableauPortrait from "../attachement/tableauPortrait.jpg";

import { NavLink } from "react-router-dom";

import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <main className="main-accueil">
        {/* SECTION 1 PHOTO ACCUEIL PHRASE PRESENTATION ------------------------------------------  */}

        <section className="section-one">
          <div className="img"></div>
        </section>

        {/* SECTION 2 TITRE SOUS PHOTO ------------------------------------------  */}

        <section className="section-discover">
          <h2 className="name" aria-label="nom du photographe">
            With Mavs
          </h2>
          <p className="discover-name">
            photographe et vidéaste de portrait, de mariage, d’événementiel pour
            les particuliers et professionnel en île de France
          </p>
        </section>

        {/* SECTION 3 MINI DESCRIPTION------------------------------------------  */}

        <section className="describe">
          <article className="article-img-describe">
            <img
              className="img-describe"
              src={WithMavsDescribe}
              alt="With Mavs en pleine séance photo"
              aria-label="With Mavs en pleine séance photo"
            />
          </article>
          <article className="article-describe">
            <h2 className="h-describe">
              Salut je suis Xavier, non With Mavs plutôt !
            </h2>
            <p className="text-describe">
              photographe et vidéaste d’émotions, je serai particulièrement
              touché par l’histoire que vous souhaitez me livrer. Je me laisse
              surprendre par l’instantanée et si un jour je te demande de passer
              sous mon objectif, saches que j’ai certainement vu quelque chose
              en toi que je veux faire ressortir
            </p>

            <NavLink to={"/a-propos"}>
              <button className="button-describe"> En savoir plus </button>
            </NavLink>
          </article>
        </section>
        <section className="title-prestations">
          <h2 className="h-prestation"> Trouvez votre séance photo idéale</h2>
        </section>

        {/* SECTION 4 PRESTATION ------------------------------------------  */}

        {/* PORTRAIT ------------------------------------------  */}
        <Slide right>
          <article className="article-portrait">
            <img
              className="img-service-portrait"
              src={imagePortrait}
              alt="photo portrait"
              aria-label="photo portrait"
            />

            <div className="contenair-article-portrait">
              <h3 className="title-service-portrait">Séance photos Portrait</h3>
              <p className="describe-service-portrait">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                voluptatem quo distinctio voluptas, excepturi et error,
                voluptatibus sit in eos iusto, voluptates alias quidem tenetur
                ab repudiandae molestias fuga optio? Dolorum, obcaecati cumque
                eos quia dicta quaerat esse! Consequatur neque error officia! Ea
                doloribus placeat tenetur, consequuntur omnis itaque
                aspernatur?.
              </p>

              <NavLink to={"/prestation-portrait"}>
                <button className="btn-service-portrait">
                  {" "}
                  En savoir plus
                </button>
              </NavLink>
            </div>
          </article>
        </Slide>

        {/* FAMILLE ------------------------------------------  */}

        <Slide left>
          <article className="article-family">
            <img
              className="img-service-family"
              src={imageFamille}
              alt="photo prestation famille"
              aria-label="photo prestation famille"
            />

            <div className="contenair-article-family">
              <h3 className="title-service-family">Séance photos Famille</h3>
              <p className="describe-service-family">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                voluptatem quo distinctio voluptas, excepturi et error,
                voluptatibus sit in eos iusto, voluptates alias quidem tenetur
                ab repudiandae molestias fuga optio? Dolorum, obcaecati cumque
                eos quia dicta quaerat esse! Consequatur neque error officia! Ea
                doloribus placeat tenetur, consequuntur omnis itaque
                aspernatur?.
              </p>

              <NavLink to={"/prestation-famille"}>
                <button className="btn-service-family"> En savoir plus</button>
              </NavLink>
            </div>
          </article>
        </Slide>

        {/* MARIAGE ------------------------------------------  */}

        <Slide right>
          <article className="article-mariage">
            <img
              className="img-service-mariage"
              src={imageMariage}
              alt="photo mariage"
              aria-label="photo-mariage"
            />
            <div className="contenair-article-mariage">
              <h3 className="title-service-mariage">Séance photos Mariage</h3>
              <p className="describe-service-mariage">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                voluptatem quo distinctio voluptas, excepturi et error,
                voluptatibus sit in eos iusto, voluptates alias quidem tenetur
                ab repudiandae molestias fuga optio? Dolorum, obcaecati cumque
                eos quia dicta quaerat esse! Consequatur neque error officia! Ea
                doloribus placeat tenetur, consequuntur omnis itaque
                aspernatur?.
              </p>

              <NavLink to={"/prestation-mariage"}>
                <button className="btn-service-mariage"> En savoir plus</button>
              </NavLink>
            </div>
          </article>
        </Slide>

        {/* SECTION 5 ANNONCE CADEAU ------------------------------------------  */}

        <section className="contenair-gift-win">
          <section className="annonce-gift">
            <h2 className="h-annonce-gift">
              Après votre expérience avec WithMavs on vous offre des tableau de
              peinture
            </h2>
            <p className="p-annonce-gift">
              3 étapes seulement pour gagner ce cadeau
            </p>
          </section>

          <section className="contenair-wrapper-gift">
            <section className="wrapper-gift">
              <article className="box-gift-step">
                <div className="box-front box-gift-front">
                  <h2 className="h-box-gift">Etape 1</h2>
                </div>

                <div className="box-back box-gift-back">
                  <h2 className="text-box-back">
                    Racontez-nous votre expérience
                  </h2>
                  <p className="text-box-back">
                    Laisser votre avis sur notre site
                  </p>
                </div>
              </article>
            </section>

            <section className="wrapper-gift">
              <article className="box-gift-step">
                <div className="box-front box-gift-front">
                  <h2 className="h-box-gift">Etape 2</h2>
                </div>

                <div className="box-back box-gift-back">
                  <h2 className="text-box-back">
                    Partager votre expérience sur Instagram
                  </h2>
                  <p className="text-box-back">
                    Identifiez-nous sur votre story instagram
                  </p>
                </div>
              </article>
            </section>

            <section className="wrapper-gift">
              <article className="box-gift-step">
                <div className="box-front box-gift-front">
                  <h2 className="h-box-gift">Etape 3</h2>
                </div>

                <div className="box-back box-gift-back">
                  <h2 className="text-box-back">Parrainez vos proches !</h2>
                  <p className="text-box-back">
                    Si un de vos proches souhaite vivre une expérience avec
                    WithMavs grâce à votre recommandation un cadeau surprise
                    vous attend !
                  </p>
                </div>
              </article>
            </section>
          </section>

          {/* SECTION 6 LES TABLEAUX DE PEINTURE ------------------------------------------  */}

          <section className="section-name-artist">
            <h2>Tableau réalisé par GiresArt</h2>
          </section>
        </section>

        <section className="section-presentation-gift">
          <article className="article-gift-one">
            <img
              className="frame-gift"
              src={tableauPaysage}
              alt="tableau Phillipines"
              aria-label="tableau Phillipines"
            />
            <p className="p-article-gift">
              Blablaa t is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.{" "}
            </p>
          </article>

          <article className="article-gift-twoo">
            <p className="p-article-gift">
              Blablaaa t is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.{" "}
            </p>
            <img
              className="frame-gift"
              src={tableuaAfro}
              alt="tableau thaila"
              aria-label="tableau thailand"
            />
          </article>

          <article className="article-gift-three">
            <img
              className="frame-gift"
              src={tableauPortrait}
              alt="tableau Portrait"
              aria-label="tableau Portrait"
            />
            <p className="p-article-gift">
              Blablaa t is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.{" "}
            </p>
          </article>

          <section className="register-gift">
            <NavLink to={"/creation-compte"}>
              <button className="button-register-gift">
                Connectez-vous pour bénificer d'un cadeau
              </button>
            </NavLink>
          </section>
        </section>

        {/* SECTION 7 LES TEMOIGNAGES ------------------------------------------  */}

        <section className="section-testimonials">
          <section className="section-title-testimonials">
            <h3 className="h-title-testimonials">Vos mots doux </h3>
          </section>

          <section className="section-article-testimonials">
            <article className="article-testimonials testimonial-one">
              <p className="text-testimonial">
                "is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took"
              </p>
              <h3 className="user-testimonial">Moliere Zie</h3>
              <p className="prestation-testimonial">
                Seance Photo Maquillage Formule essentiel
              </p>
              <a>le 24/10/2023</a>
            </article>

            <article className="article-testimonials testimonial-two">
              <p className="text-testimonial">
                "is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took"
              </p>
              <h3 className="user-testimonial">Elise Perrine</h3>
              <p className="prestation-testimonial">
                Seance Photo En Couple Formule essentiel
              </p>
              <a>le 15/09/2022</a>
            </article>

            <article className="article-testimonials testimonial-three">
              <p className="text-testimonial">
                "is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took"
              </p>
              <h3 className="user-testimonial">Bakary Sadio</h3>
              <p className="prestation-testimonial">
                Film Mariage Formule Premium
              </p>
              <a>le 05/08/2023</a>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;

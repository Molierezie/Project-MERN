import "../App.css";
import imgageMariageFrontone from "../attachement/mariagefrontone.jpg";
import imageMariagepro from "../attachement/filmmariagepro.jpg";
import filmMariageEssentiel from "../attachement/filmmariageessentiel.jpg";
import imageMariagePremium from "../attachement/mariagepremium.jpg";

import axios from "axios";
import Format from "../components/formatTitle.js";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { VideoMariage } from "../components/VideoMariage";

export const ServiceWedding = () => {
  const [mariage, setMariage] = useState([]);

  //    const navigate = useNavigate();

  useEffect(() => {
    cat();
  }, []);

  const cat = async () => {
    try {
      const { data } = await axios.get(`api/mariage-prestation`);
      setMariage(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <main className="main-prestation-mariage">
        <VideoMariage />

        <section className="title-prestation">
          <h1 className="titre"> Mariage </h1>
        </section>

        {/* -------------------- Les prestations portrait -------------  */}

        <Format formatOne="Seance Photo Mariage" formatTwo="Film du Mariage" />

        {/* -------------------- Les photos -------------  */}

        <article className="carrousel">
          <img
            className="img-carrousel"
            src={imgageMariageFrontone}
            alt="photo mariage"
          />
          <img
            className="img-carrousel"
            src={imageMariagepro}
            alt="photo mariage pro"
          />
          <img
            className="img-carrousel"
            src={imageMariagePremium}
            alt="photo mariage premium"
          />
        </article>

        {/* -------------------- Section accroche pourquoi faire appel à WithMavs -------------  */}

        <section className="section-why-prestation">
          <h2 className="h-why-prestation">
            Votre mariage est surement l'un des moment les plus marquants de
            votre vie
          </h2>
          <p className="text-explication">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.psum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now
          </p>
        </section>

        {/* -------------------- Section découverte des prestation séance photo mariage et film mariage -------------  */}

        <section className="section-explication-prestation">
          <div className="image-explication-one">
            <img
              src={imageMariagepro}
              alt="seance photo mariage"
              aria-label="seance photo mariage"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-one">
            <h2 className="h-explication-prestation">
              Séance Photo du Mariage
            </h2>
            <p className="text-explication-prestation">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.psum
              is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>
            <a href="#view-price">
              <button className="button-explication-prestation">
                Voir les tarifs{" "}
              </button>
            </a>
            {/* <button href="#view-price" className="button-explication-prestation">Voir les tarifs </button> */}
          </article>

          <div className="image-explication-two">
            <img
              src={filmMariageEssentiel}
              alt="film mariage"
              aria-label="film mariage"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-two">
            <h2 className="h-explication-prestation">Film du Mariage</h2>
            <p className="text-explication-prestation">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.psum
              is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>

            <a href="#view-price">
              <button className="button-explication-prestation">
                Voir les tarifs{" "}
              </button>
            </a>
          </article>
        </section>

        {/* ---------------------------- Section information sur le déroulement de la séance photo et du film du mariage -------------------------  */}

        <section className="section-infos-prestation-mariage">
          <h2 className="h-infos-prestation">Information sur le déroulement</h2>
          <article className="article-infos-prestation">
            <p className="text-infos-prestation">
              {" "}
              <span className="span-infos"> Déplacement </span>Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney
            </p>
            <p className="text-infos-prestation">
              {" "}
              <span className="span-infos">
                {" "}
                Acompte réservation date{" "}
              </span>{" "}
              rature, discovered the undoubtable source. Lorem Ipsum comes from
              sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics,{" "}
            </p>
            <p className="text-infos-prestation">
              {" "}
              <span className="span-infos"> le lieu</span> re, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of e-
            </p>
            <p className="text-infos-prestation">
              {" "}
              <span className="span-infos"> Galerie Photo </span> (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.psum is that it has
              a m
            </p>
          </article>
        </section>

        <section className="back-image-prestation"></section>

        {/* ---------------------------- Section Tarif de la prestation des séances photo et film du mariage -------------------------  */}

        <section className="section-tarif-mariage">
          {/* <a href="#view-price">LES tarifs</a> */}
          <h2 id="view-price" className="h-section-tarif">
            Les Tarifs
          </h2>
        </section>

        <section className="section-tarif-prestation-mariage">
          {mariage?.map((infos, i) => (
            <article key={i} className="box-tarif-prestation-family">
              <h2 className="name-tarif-prestation-family">
                {infos.nameprestation}
              </h2>
              <p className="text-tarif-description-family">
                {infos.descriptionprestation}
              </p>
              <p className="name-tarif-formule-family">{infos.nameformule}</p>
              <p className="text-tarif-description-family">
                {infos.descriptionformule}
              </p>
              {/* <Link to={`/prestation/commande/${infos.slug}`} className="button-tarif-prestation">Je choisis cette offre </Link> */}
              <Link to={`/prestation/commande/${infos.slug}`}>
                <button className="button-tarif-prestation">
                  Je choisis cette offre
                </button>
              </Link>
              <p className="p-tarif-infos">A partir de {infos.price}€</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

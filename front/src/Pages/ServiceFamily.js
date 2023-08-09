import "../App.css";

import axios from "axios";
import Format from "../components/formatTitle.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import imagebannierefamily from "../attachement/bannierefamille.jpg";
import imageCoupleEssentiel from "../attachement/famillecoupleessentiel.jpg";
import imageCouplePremium from "../attachement/famillecouplepremium.jpg";
import imageCoupleMaternite from "../attachement/famillematerniteessentiel.jpg";
import imageCoupleMaternitePremium from "../attachement/famillematernitepremium.jpg";

export const ServiceFamily = () => {
  const [famille, setFamille] = useState([]);

  // UseEffect pour aller chercher les données prestations famille
  useEffect(() => {
    cat();
  }, []);

  const cat = async () => {
    try {
      const { data } = await axios.get(`api/famille-prestation`);
      setFamille(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <main className="main-prestation-family">
        <img
          className="image-back"
          src={imagebannierefamily}
          alt="image banniere prestation famille"
          aria-label="image banniere prestation famille"
        />

        <section className="title-prestation">
          <h1 className="titre"> Famille </h1>
        </section>

        {/* -------------------- Les prestations portrait -------------  */}

        <Format formatOne="En Couple" formatTwo="Nouvelle Naissance" />

        {/* -------------------- Les photos -------------  */}

        <article className="carrousel">
          <img
            className="img-carrousel"
            src={imageCoupleEssentiel}
            alt="image séance photo couple"
          />
          <img
            className="img-carrousel"
            src={imageCoupleMaternite}
            alt="image séance photo couple maternité"
          />
          <img
            className="img-carrousel"
            src={imageCouplePremium}
            alt="image séance photo couple"
          />
        </article>

        {/* -------------------- Section accroche pourquoi faire appel à WithMavs -------------  */}

        <section className="section-why-prestation">
          <h2 className="h-why-prestation">
            Pourquoi faire une séance photo en couple ou lors d'une nouvelle
            naissance ?
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
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </section>

        {/* -------------------- Section découverte des prestation en couple et maternité -------------  */}

        <section className="section-explication-prestation">
          <div className="image-explication-one">
            <img
              src={imageCouplePremium}
              alt="photo couple"
              aria-label="photo couple"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-one">
            <h2 className="h-explication-prestation">Séance Photo en Couple</h2>
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

          <div className="image-explication-two">
            <img
              src={imageCoupleMaternitePremium}
              alt="photo famille maternité"
              aria-label="photo famille maternité"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-two">
            <h2 className="h-explication-prestation">
              Séance Photo Nouvelle naissance
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
              editors now use Lorem Ipsum as their default model text, and a.
            </p>
            <a href="#view-price">
              <button className="button-explication-prestation">
                Voir les tarifs{" "}
              </button>
            </a>
          </article>
        </section>

        {/* ---------------------------- Section information sur le déroulement de la séance photo -------------------------  */}

        <section className="section-infos-prestation-family">
          <h2 className="h-infos-prestation">Information sur le déroulement</h2>
          <article className="article-infos-prestation">
            <p className="text-infos-prestation">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney
            </p>
            <p className="text-infos-prestation">
              rature, discovered the undoubtable source. Lorem Ipsum comes from
              sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics,{" "}
            </p>
            <p className="text-infos-prestation">
              re, discovered the undoubtable source. Lorem Ipsum comes from
              sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of e-
            </p>
            <p className="text-infos-prestation">
              {" "}
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
              sit amet..", comes from a line in section 1.10.32.psum is that it
              has a m
            </p>
          </article>
        </section>

        <section className="back-image-prestation"></section>

        {/* ---------------------------- Section Tarif de la prestation des séance photo famille -------------------------  */}

        <section className="section-tarif-family">
          <h2 id="view-price" className="h-section-tarif">
            Les Tarifs
          </h2>
        </section>

        <section className="section-tarif-prestation-family">
          {famille?.map((infos, i) => (
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

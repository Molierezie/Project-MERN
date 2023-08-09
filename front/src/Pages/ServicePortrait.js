import "../App.css";
import imagePortraitMaquillageEssentiel from "../attachement/portraitmaquillageessentiel.jpg";
import imagePortraitMaquillagepremium from "../attachement/portraitmaquillagepremium.jpg";
import imagePortraitProPremium from "../attachement/portraitpropremium.jpg";
import imagebanniere from "../attachement/banniereportrait.jpg";
import imagePortraitProFront from "../attachement/portraitprofront.jpg";

import axios from "axios";
import Format from "../components/formatTitle.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicePortrait = () => {
  const [portrait, setPortrait] = useState([]);

  useEffect(() => {
    cat();
  }, []);

  const cat = async () => {
    try {
      const { data } = await axios.get(`api/portrait-prestation`);
      setPortrait(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <main className="main-prestation-portrait">
        <img className="image-back" src={imagebanniere} alt="pictures" />

        <section className="title-prestation">
          <h1 className="titre"> Portrait </h1>
        </section>

        {/* ----------------------------------- Les prestations portrait -------------------------------------  */}

        <Format formatOne="Professionnel" formatTwo="Maquillage" />

        {/* -------------------- Les photos -------------  */}

        <article className="carrousel">
          <img
            className="img-carrousel"
            src={imagePortraitMaquillageEssentiel}
            alt="photo portrait maquillage"
            aria-label="photo portrait maquillage"
          />
          <img
            className="img-carrousel"
            src={imagePortraitMaquillagepremium}
            alt="photo portrait maquillage"
            aria-label="photo portrait maquillage"
          />
          <img
            className="img-carrousel"
            src={imagePortraitProPremium}
            alt="photo portrait professionnel"
            aria-label="photo portrait maquillage"
          />
        </article>

        {/* -------------------- Section accroche pourquoi faire appel à WithMavs -------------  */}

        <section className="section-why-prestation">
          <h2 className="h-why-prestation">
            Pourquoi faire une Séance Photo Portrait ?
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

        {/* -------------------- Section découverte des prestation en professionnel et maquillage -------------  */}

        <section className="section-explication-prestation">
          <div className="image-explication-one">
            <img
              src={imagePortraitProFront}
              alt="photo portrait professionnel"
              aria-label="photo portrait professionnel"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-one">
            <h2 className="h-explication-prestation">
              Séance photo Professionnel
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
          </article>

          <div className="image-explication-two">
            <img
              src={imagePortraitMaquillageEssentiel}
              alt="photo portrait maquillage"
              aria-label="photo portrait maquillage"
              className="size-image-explication"
            />
          </div>

          <article className="article-explication-prestation-two">
            <h2 className="h-explication-prestation">
              Séance Photo Maquillage
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
              editors now .
            </p>
            <a href="#view-price">
              <button className="button-explication-prestation">
                Voir les tarifs{" "}
              </button>
            </a>
          </article>
        </section>

        {/* ---------------------------- Section information sur le déroulement de la séance photo -------------------------  */}

        <section className="section-infos-prestation-portrait">
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

        {/* ---------------------------- Section information sur le déroulement de la séance photo -------------------------  */}

        <section className="section-tarif-portrait">
          <h2 id="view-price" className="h-section-tarif">
            Les Tarifs
          </h2>
        </section>

        <section className="section-tarif-prestation-portrait">
          {portrait?.map((infos, i) => (
            <article key={i} className="box-tarif-prestation-portrait">
              <h2 className="name-tarif-prestation-portrait">
                {infos.nameprestation}
              </h2>
              <p className="text-tarif-description-portrait">
                {infos.descriptionprestation}
              </p>
              <p className="name-tarif-formule-portrait">{infos.nameformule}</p>
              <p className="text-tarif-description-portrait">
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

export default ServicePortrait;

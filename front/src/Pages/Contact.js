import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [discover, setDiscover] = useState("");
  const [project, setProject] = useState("");

  const navigate = useNavigate();

  // Foncion pour le formulaire de contact

  const handleContactSubmit = async (e) => {
    try {
      e.preventDefault();

      let answer = window.confirm(
        `Etes-vous sur de ne rien vouloir modifier avant de nous envoyer votre demande ?`
      );
      if (!answer) return;

      const formdata = {
        firstname,
        lastname,
        email,
        number,
        discover,
        project,
      };

      const { data } = await axios.post(`api/contact`, formdata);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`Checkez vos mails nous vous répondrons dans les 72h :)`);
        navigate("/accueil");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Une erreur est survenue`);
    }
  };

  return (
    <main className="main-contact">
      <section className="section-me-contacter">
        <section className="section-contact">
          <h3 className="h-contact">
            Des questions ? Vous souhaitez avoir des informations ou bien un
            devis personalisé ? Compléter ce formulaire on vous répondra dans
            les 72h
          </h3>

          <form
            className="formulaire-contact"
            method="POST"
            onSubmit={handleContactSubmit}
          >
            <label className="label-form-contact">Votre Nom</label>

            <input
              className="input-contact"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <label className="label-form-contact">Votre Prénom</label>

            <input
              className="input-contact"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label className="label-form-contact">Email</label>

            <input
              className="input-contact"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label-form-contact">Numéro de téléphone</label>

            <input
              className="input-contact"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <label className="label-form-contact">
              Comment m'avez-vous connu ?
            </label>

            <input
              className="input-contact"
              type="text"
              value={discover}
              onChange={(e) => setDiscover(e.target.value)}
            />

            <label className="label-form-contact">
              Racontez-moi votre projet
            </label>

            <textarea
              className="textarea-contact"
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />

            <input type="submit" value="Validé" className="btn-contact" />
          </form>
        </section>

        <section className="section-infos-contact">
          <Link className="contact-logo" href="#">
            
            WM
          </Link>
          <address>
            <p>contacter-moi par mail</p>
            <Link className="link-contact" href="mailto:Xavier@withmavs.com">
              
              Xavier@withmavs.com
            </Link>
          </address>
          <address>
            <p className="#"> Contact-moi par téléphone</p>
            <Link className="link-contact" href="tel:+0614011328">
              
              06 14 01 13 28
            </Link>
          </address>

          <div>
            <p className="title-contact"> Suis-moi sur Instagram</p>
            <a href="https://www.instagram.com/withmavs/" target="_blank">
              <h3 className="link-contact">@WithMavs</h3>
            </a>
          </div>
        </section>
      </section>

      <section className="section-question">
        <h2 className="h-faq">FAQ</h2>

        <article className="article-faq-one">
          <h4 className="h-article-faq">
            
            Comment réserver pour une date lointaine ?
          </h4>
          <p className="text-faq">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </article>

        <article className="article-faq-two">
          <h4 className="h-article-faq">
            
            Quels sont les condition pour effectuer ?
          </h4>
          <p className="text-faq">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </article>

        <article className="article-faq-three">
          <h4 className="h-article-faq"> Peut-on venir accom blabla ? </h4>
          <p className="text-faq">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </article>

        <article className="article-faq-four">
          <h4 className="h-article-faq">
            
            Pour la film du Mariage quelles sont ?
          </h4>
          <p className="text-faq">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </article>
      </section>
    </main>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export const ValidationService = () => {
  // State état initiale des éléments du formulaire

  const [nameprestation, setNameprestation] = useState("");
  const [nameformule, setNameformule] = useState("");
  const [price, setPrice] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [prestationdate, setPrestationdate] = useState("");
  const [recommandedBy, setRecommandedby] = useState("");
  const [project, setProject] = useState("");

  // useParams pour qui se connecte avec le paramètre dynamique dans le back-end

  const params = useParams();
  const navigate = useNavigate();

  // UseEffect pour aller cherhcer les infos de la prestation validé par l'utilisateur

  useEffect(() => {
    oneService();
  }, []);

  const handleSubmitCommand = async (e) => {
    e.preventDefault();
    try {
      let answer = window.confirm(
        `Etes-vous sur de ne rien vouloir modifier avant de valider votre commande ?`
      );
      if (!answer) return;

      const formdata = {
        nameprestation: nameprestation,
        nameformule: nameformule,
        price: price,
        lastname: lastname,
        firstname: firstname,
        email: email,
        prestationdate: prestationdate,
        recommandedBy: recommandedBy,
        project: project,
      };

      const { data } = await axios.post(`api/commande`, formdata);
      if (data?.error) {
         toast.error(data.error)
      } else {
        toast.success(`Votre commande ${data.numberCommand} a bien été pris en compte vous recevrez un mail de confirmation prochainement`)
        navigate("/accueil");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  // fonctions qui permet de pré-remplir les données lorsque l'on clique sur une prestation pour supprimer ou modifier

  const oneService = async () => {
    const { data } = await axios.get(`api/prestation/${params.slug}`);
    setNameprestation(data.nameprestation);
    setNameformule(data.nameformule);
    setPrice(data.price);
  };

  return (
    <main className="main-validation">
      <section className="section-command">
        <div className="div-validation">
          <h1 className="h-register"> On vous remercie pour votre confiance</h1>
          <p
            className="validation-name-prestation"
            value={nameprestation}
            onChange={(e) => setNameprestation(e.target.value)}
          >
            {" "}
            Vous avez choisi la prestation {nameprestation}
          </p>

          <p
            value={nameformule}
            onChange={(e) => setNameformule(e.target.value)}
          >
            {" "}
            Avec la {nameformule}
          </p>

          <p value={price} onChange={(e) => setPrice(e.target.value)}>
            Le prix de la prestation est de {price} €
          </p>

          <h2 className="h-validation-lastetape">
            {" "}
            Plus que une étape avant de finaliser votre commande, Veuillez
            renseigner vos informations dans le formulaire ci-dessous
          </h2>
        </div>

        <form
          className="command-form"
          method="POST"
          onSubmit={handleSubmitCommand}
          encType="multipart/form-data"
        >
          <label className="label-form-command">Votre Nom</label>
          <input
            type="text"
            className="input"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <label className="label-form-command">Votre Prénom</label>
          <input
            type="text"
            className="input"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label className="label-form-command">Votre adresse mail</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label-form-command">Choississez une date </label>
          <input
            type="date"
            className="input"
            value={prestationdate}
            onChange={(e) => setPrestationdate(e.target.value)}
          />

          <label className="label-form-command">
            Une personne vous a recommandé nos services ?{" "}
          </label>
          <input
            type="email"
            className="input"
            value={recommandedBy}
            onChange={(e) => setRecommandedby(e.target.value)}
          />

          <label className="label-form-command">
            Racontez-nous votre projet{" "}
          </label>
          <textarea
            type="text"
            className="textarea-form"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />

          <input type="submit" value="Validé" className="btn-validation" />

          <NavLink className="p-back-page" to={"/page-prestations"}>
            Revenir sur la page des prestations
          </NavLink>
        </form>
      </section>
    </main>
  );
};

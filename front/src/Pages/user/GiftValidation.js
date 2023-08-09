import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export const ValidationGift = () => {
  // State état initiale des éléments du formulaire

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [login, setLogin] = useState("");

  // useParams pour qui se connecte avec le paramètre dynamique dans le back-end

  const params = useParams();
  const navigate = useNavigate();

  // UseEffect pour aller cherhcer les infos de la prestation validé par l'utilisateur

  useEffect(() => {
    oneGift();
  }, []);

  const handleSubmitCommand = async (e) => {
    e.preventDefault();
    try {
      let answer = window.confirm(
        `Etes-vous sur de ne rien vouloir modifier avant de valider votre commande ?`
      );
      if (!answer) return;

      const formdata = {
        login,
        name,
        description,
      };

      const { data } = await axios.post(`api/order-gift`, formdata);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(
          `Nous vous confirmerons votre commande, vous recevrez un mail de confirmation prochainement`
        );
        console.log(data);
        navigate("/accueil");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fonctions qui permet de pré-remplir les données lorsque l'on clique sur une prestation pour supprimer ou modifier

  const oneGift = async () => {
    const { data } = await axios.get(`api/cadeau/${params.slug}`);
    setName(data.name);
    setDescription(data.description);
  };

  return (
    <main className="main-validation">
      <section className="section-command">
        <div className="div-validation">
          <h1 className="h-register">
            Nous sommes heureux de vous offrir ce cadeau
          </h1>
          <p
            className="validation-name-prestation"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            Vous avez choisi le {name}
          </p>

          <p
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            Ce tableau réalisé par GiresArt est {description}
          </p>

          <h2 className="h-validation-lastetape">
            Il ne vous manque plus qu'a renseigner votre login
          </h2>
        </div>

        <form
          className="command-form"
          method="POST"
          onSubmit={handleSubmitCommand}
          encType="multipart/form-data"
        >
          <label className="label-form-command">Login</label>
          <input
            type="text"
            className="input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input type="submit" value="Validé" className="btn-validation" />

          <NavLink className="p-back-page" to={"/cadeaux"}>
            Revenir sur la page des cadeaux
          </NavLink>
        </form>
      </section>
    </main>
  );
};

import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AdminAllCommandsServices = () => {
  const [command, setCommand] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [id, setId] = useState("");

  // useEffect pour qu'a chaque changement d'etat de isValid ca se met à jour

  useEffect(() => {
    getCommand();
  }, [isValid]);

  const getCommand = async () => {
    try {
      const { data } = await axios.get(`api/commandes`);
      setCommand(data);
      console.log(data);
    } catch (error) {}
  };

  const validCommand = async (e) => {
    const id = e.target.name;
    //   console.log(typeof(e.target.value));
    let form;
    if (e.target.value == "true") {
      console.log(typeof e.target.value);
      setIsValid(false);
      form = {
        id: id,
        isValid: isValid,
      };
    } else {
      setIsValid(true);
      form = {
        id: id,
        isValid: isValid,
      };
    }

    const { data } = await axios.post(`api/commande-validation/${id}`, form);
    if (data?.error) {
      toast.error(data.error);
    } else {
      toast.success(`Le status de la commande a bien été mise à jour`);
      console.log(data);
      setIsValid(!form.isValid);
    }
  };

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />
      <AdminTitleAll title="Toutes les commandes Prestations" subtitle="" />

      <section className="content-admin-all-commands">
        {command?.map((infos, i) => (
          <div key={i} className="card-wrapper">
            {/* Notre card qui va contenir une face avant et face arrière  */}
            <article className="admin-cards-all-commands">
              <div className="card-front">
                <h2>{infos.nameprestation}</h2>
                <p>{infos.nameformule}</p>
                <p className="admin-command-number">
                  Commande n°{infos.numberCommand}
                </p>
                {infos.isValid === true ? (
                  <h3 className="order-valid">Validé</h3>
                ) : (
                  <h3 className="order-waiting">En Attente</h3>
                )}
              </div>

              <div className="card-back">
                <h2>{infos.lastname}</h2>
                <p>{infos.firstname}</p>
                <p>Demande pour le {infos.prestationdate}</p>

                <button
                  className="order-statut"
                  onClick={validCommand}
                  name={infos._id}
                  value={infos.isValid}
                >
                  Cliquer pour modifier le statut de la commande
                </button>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

import { useAuth } from "../../../context/auth.js";
import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { toast } from "react-toastify";

export const AdminDeleteUser = () => {
  const [auth, setAuth] = useAuth();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    oneUser();
  }, []);

  const handleDeleteUser = async () => {
    try {
      let answer = window.confirm(
        "Voulez-vous vraiment supprimer cet utilisateur ?"
      );
      if (!answer) return;
      const { data } = await axios.delete(`api/utilisateur-supprime/${id}`);
      if (data?.error) {
        toast.error(data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.success(`${data.login} a bien été supprimé`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/admin-page/utilisateurs");
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const oneUser = async () => {
    const { data } = await axios.get(`api/utilisateur/${params.slug}`);
    console.log(data);
    setLogin(data.login);
    setEmail(data.email);
    setAdress(data.adress);
    setId(data._id);
  };

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-crud">
        <AdminTitleAll title="Supprimer l'utilisateur" subtitle="" />

        <section className="admin-form-crud">
          <form className="formulaire-crud">
            <input
              className="input-admin-crud"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              disabled
            />

            <input
              className="input-admin-crud"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />

            <input
              className="input-admin-crud"
              type="text"
              value={adress}
              placeholder="entrer le nom de la prestation"
              onChange={(e) => setAdress(e.target.value)}
              disabled
            />

            <div>
              <button onClick={handleDeleteUser} className="btn-cat">
                Supprimer
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

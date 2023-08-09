import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Select } from "antd";

export const AdminUpdateRemove = () => {
  const { Option } = Select;

  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("");
  const [nameprestation, setNameprestation] = useState("");
  const [descriptionprestation, setDescriptionprestation] = useState("");
  const [nameformule, setNameformule] = useState("");
  const [descriptionformule, setDescriptionformule] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    allCategories();
  }, []);

  useEffect(() => {
    oneService();
  }, []);

  // -------------------------- Fonction afficher toutes les catégories -------------------------------

  const allCategories = async () => {
    try {
      const { data } = await axios.get(`api/categories-services`, {
        nameprestation,
      });
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------- Fonction pour modifier une prestation -------------------------------

  const handleSubmitService = async (e) => {
    e.preventDefault();
    try {
      let answer = window.confirm(
        `Etes-vous sur de vouloir modifier ce format ?`
      );
      if (!answer) return;

      const formData = {
        type: type,
        nameprestation: nameprestation,
        descriptionprestation: descriptionprestation,
        nameformule: nameformule,
        descriptionformule: descriptionformule,
        price: price,
        category: category,
      };

      const { data } = await axios.put(`api/prestation/${id}`, formData);

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(
          `La prestation ${data.nameprestation} a bien été mise à jour`
        );
        console.log(`${data.nameprestation} a bien été modifié`);
        navigate("/admin-page/prestations");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------- Fonction pour supprimer une prestation -------------------------------

  const handleDelete = async () => {
    try {
      let answer = window.confirm(
        "Voulez-vous vraiment supprimer cette prestation ?"
      );
      if (!answer) return;

      const { data } = await axios.delete(`api/prestation/${id}`);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(
          `La prestation ${data.nameprestation} a bien été supprimé`
        );
        console.log(`${data.nameprestation} a bien été modifié`);
        navigate("/admin-page/prestations");
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fonctions qui permet de pré-remplir les données lorsque l'on clique sur une prestation pour supprimer ou modifier

  const oneService = async () => {
    const { data } = await axios.get(`api/prestation/${params.slug}`);

    setType(data.type);
    setNameprestation(data.nameprestation);
    setDescriptionprestation(data.descriptionprestation);
    setNameformule(data.nameformule);
    setDescriptionformule(data.descriptionformule);
    setPrice(data.price);
    setCategory(data.category);
    setId(data._id);
  };


  

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-crud">
        <AdminTitleAll
          title="Compléter ce formulaire pour supprimer ou modifier cette prestation"
          subtitle=""
        />

        <section className="admin-form-crud">
          <form className="formulaire-crud">
            <Select
              bordered={false}
              size="large"
              placeholder="Selectionner une catégorie"
              onChange={(value) => setCategory(value)}
            >
              {categories?.map((cat, i) => (
                <Option key={i} value={cat._id}>
                  {cat.name}
                </Option>
              ))}
            </Select>

            <label className="label-form-admin-crud">
              Entrer la catégorie de la prestation
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <label className="label-form-admin-crud">
              entrer le nom de la prestation
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={nameprestation}
              placeholder="entrer le nom de la prestation"
              onChange={(e) => setNameprestation(e.target.value)}
            />

            <label className="label-form-admin-crud">
              entrer la description de la prestation
            </label>
            <textarea
              className="input-admin-crud"
              type="text"
              value={descriptionprestation}
              onChange={(e) => setDescriptionprestation(e.target.value)}
            />

            <label className="label-form-admin-crud">
              entrer le nom de la formule
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={nameformule}
              onChange={(e) => setNameformule(e.target.value)}
            />
            <label className="label-form-admin-crud">
              entrer la description de la formule
            </label>
            <textarea
              className="input-admin-crud"
              type="text"
              value={descriptionformule}
              onChange={(e) => setDescriptionformule(e.target.value)}
            />

            <label className="label-form-admin-crud">entrer le prix</label>
            <input
              className="input-admin-crud"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="div-btn-admin-crud">
              <button onClick={handleSubmitService} className="btn-cat">
                Modifier
              </button>

              <button onClick={handleDelete} className="btn-cat">
                Supprimer
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

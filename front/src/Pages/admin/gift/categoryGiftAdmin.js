import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { ManageCategoryGift } from "../../../components/admin/manageCategoryForm.js";
import { Modal } from "antd";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { toast } from "react-toastify";

export const AdminCategory = () => {
  const [name, setName] = useState("");
  const [cat, setCat] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [select, setSelect] = useState(null);

  useEffect(() => {
    allCategories();
  }, []);

  // --------------------- Fonctions pour afficher toutes les catégories de cadeaux -----------------------------------

  const allCategories = async () => {
    try {
      const { data } = await axios.get(`api/categories-cadeaux`);
      setCat(data);
    } catch (error) {
      console.log(error);
    }
  };

  // --------------------- Fonctions pour créer une catégories de cadeaux -----------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`api/categorie-cadeau`, { name });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`La nouvelle catégorie ${data.name} a bien été créé`);
        console.log(data);
        // I call the function "all categorie" for don't need to refresh the page for see the new category
        allCategories();
        setName(data);
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // --------------------- Fonctions pour modifier catégories de cadeaux -----------------------------------

  const updateSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`api/categorie-cadeau/${select._id}`, {
        name: updateName,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`La catégorie ${data.name} a bien été modifié`);
        setSelect(null);
        setUpdateName("");
        setOpen(false);
        allCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // --------------------- Fonctions pour supprimer catégories de cadeaux -----------------------------------

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`api/categorie-cadeau/${select._id}`);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`La catégorie ${data.name} a bien été supprimé`);
        console.log(`${data.name} a bien était supprimé`);
        setOpen(false);
        allCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-all">
        <AdminTitleAll title="Créer une nouvelle catégorie" subtitle="" />

        <ManageCategoryGift
          handleSubmit={handleSubmit}
          value={name}
          setValue={setName}
        />

        <p className="infos-admin">
          Cliquer sur une catégorie pour la modifier ou supprimer
        </p>

        {cat?.map((cat, i) => (
          <button
            className="btn-category-admin"
            key={i}
            onClick={() => {
              setOpen(true);
              setSelect(cat); // lorsque l'on clique on a la catégorie sélectionné
              setUpdateName(cat.name);
            }}
          >
            {cat.name}
          </button>
        ))}

        <Modal
          className="modal-cat"
          width={700}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          footer={null}
        >
          <ManageCategoryGift
            handleSubmit={updateSubmit}
            handleDelete={handleDelete}
            buttonSubmit="modifier"
            value={updateName}
            setValue={setUpdateName}
          />
        </Modal>
      </section>
    </main>
  );
};

import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { ManageCategoryGift } from "../../../components/admin/manageCategoryForm.js";
import { Modal } from "antd";
import { toast } from "react-toastify";


export const AdminServiceCategory = () => {
  const [name, setName] = useState("");
  const [cat, setCat] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [select, setSelect] = useState([]);

  useEffect(() => {
    allCategories();
  }, []);

  const allCategories = async () => {
    try {
      const { data } = await axios.get(`api/categories-services`);
      setCat(data);
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------- Fonction pour creer catégories de services -------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`api/categorie-service`, { name });
      console.log(data);
      if (data?.error) {
        toast(data.error, {
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
        toast.success(`La catégorie ${data.name} a bien était ajouté!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        allCategories();
        setName(data);
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------- Fonction modifier categorie de service -------------------------------

  const updateSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`api/categorie-service/${select._id}`, {
        name: updateName,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`La catégorie ${data.name} a bien été mise à jour`);

        setSelect(null);
        setUpdateName("");
        setOpen(false);
        allCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------- Fonction pour supprimer categorie de service -------------------------------

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        `api/categorie-service/${select._id}`
      );
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

        {/* -------------------------- Map pour choisir une des 3 catégorie ------------------------------- */}

        <div className="card-category-admin">
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
        </div>

        {/* // -------------------------- Modal qui s'affiche lorsque l'on clique sur une catégorie ------------------------------- */}

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

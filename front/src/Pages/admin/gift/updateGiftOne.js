import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { toast } from "react-toastify";
import { Select } from "antd";

export const AdminUpdateGift = () => {
  const { Option } = Select;

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    allCategories();
  }, []);

  useEffect(() => {
    oneGift();
  }, []);

  const allCategories = async () => {
    try {
      const { data } = await axios.get(`api/categories-cadeaux`, { name });
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Pour que le produit sélectionné soit déjà pré-rempli avant de le modifier

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let answer = window.confirm(`Etes-vous sur de vouloir modifier ?`);
      if (!answer) return;

      const formdata = {
        name: name,
        description: description,
        category: category,
      };

      const { data } = await axios.put(`api/cadeau/${id}`, formdata);

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
        // console.log(`${data.name} a été mis à jour`);
        toast.success(`${data.name} a été mis à jour`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/admin-page/cadeaux-client");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm("Voulez-vous vraiment supprimer ce cadeau ?");
      if (!answer) return;
      const { data } = await axios.delete(`api/cadeau/${id}`);
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
        toast.success(`La cadeau ${data.name} a bien été supprimé`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/admin-page/cadeaux-client");
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const oneGift = () => {
    axios.get(`api/cadeau/${params.slug}`).then((res) => {
      setName(res.data.name);
      setDescription(res.data.description);
      setCategory(res.data.category);
      setId(res.data._id);
    });
  };

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-crud">
        <AdminTitleAll title="Modifier ou supprimer un cadeau" subtitle="" />

        <section className="admin-form-crud">
          <form className="formulaire-crud">
            <Select
              className="admin-select-category"
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
              Entrer le nom du cadeau
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label-form-admin-crud">
              entrer la description du cadeau
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={description}
              placeholder="entrer le nom de la prestation"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <button onClick={handleSubmit} className="btn-cat">
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

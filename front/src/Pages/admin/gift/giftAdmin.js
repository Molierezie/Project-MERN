import { useAuth } from "../../../context/auth.js";
import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";

export const AdminGift = () => {
  const { Option } = Select;

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    allCategories();
  }, []);

  const allCategories = async () => {
    try {
      const { data } = await axios.get(`api/categories-cadeaux`, { name });
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  // For display categorie we use select to Ant design

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("img", image);

      const { data } = await axios.post(`api/cadeau`, formData);
      console.log(data);
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
        toast.success(`La nouveau cadeau ${data.name} a bien étét créé`, {
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

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-crud">
        <AdminTitleAll title="Créer un nouveau cadeau" subtitle="" />

        <section className="admin-form-create-gift">
          <form
            onSubmit={handleSubmit}
            className="formulaire-crud"
            encType="multipart/form-data"
          >
            <Select
              size="medium"
              placeholder="catégorie"
              onChange={(value) => setCategory(value)}
            >
              {categories?.map((cat, i) => (
                <Option key={i} value={cat._id}>
                  {cat.name}
                </Option>
              ))}
            </Select>

            <label className="label-form-admin-crud" htmlFor="file_picker">
              {" "}
              Télécharger une photo
              <input
                required
                type="file"
                name="img"
                accept="image/*"
                id="file_picker"
                className="input-admin-crud"
                onChange={(e) => setImage(e.target.files[0])}
                multiple
              />
            </label>

            <label className="label-form-admin-crud">
              Entrer le nom du cadeau
            </label>
            <input
              className="input-admin-crud"
              type="text"
              value={name}
              placeholder="entrer le nom du cadeau"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="label-form-admin-crud">
              Entrer la description du cadeau
            </label>
            <textarea
              className="input-admin-crud"
              type="text"
              value={description}
              placeholder="entrer le nom du cadeau"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="div-btn-admin-crud">
              <button className="btn-cat">Créer</button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

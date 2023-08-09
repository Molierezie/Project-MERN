import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { toast } from "react-toastify";
import { Select } from "antd";

export const AdminServices = () => {
  const { Option } = Select;

  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("");
  const [nameprestation, setNameprestation] = useState("");
  const [descriptionprestation, setDescriptionprestation] = useState("");
  const [nameformule, setNameformule] = useState("");
  const [descriptionformule, setDescriptionformule] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    allCategories();
  }, []);

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
  // -------------------------- Fonction pour créer une prestation -------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();

      formdata.append("type", type);
      formdata.append("image-prestation", image);
      formdata.append("nameprestation", nameprestation);
      formdata.append("descriptionprestation", descriptionprestation);
      formdata.append("nameformule", nameformule);
      formdata.append("descriptionformule", descriptionformule);
      formdata.append("price", price);
      formdata.append("category", category);

      const { data } = await axios.post(`api/prestation`, formdata);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`La nouvelle prestation a bien été créé`);
        console.log(data);
        navigate("/admin-page/prestations");
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
        <AdminTitleAll title="Créer une nouvelle prestation" subtitle="" />

        <section className="admin-form-crud">
          <form
            className="formulaire-crud"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <Select
              bordered={false}
              style={{ width: 200 }}
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
                name="image-update"
                accept="image/*"
                id="file_picker"
                className="input-admin-crud"
                onChange={(e) => setImage(e.target.files[0])}
                multiple
              />
            </label>

            <label className="label-form-admin-crud">
              Entrer la catégorie de la prestation
            </label>
            <input
              required
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
              <button className="btn-cat">Créer</button>
            </div>
          </form>
        </section>
      </section>
    </main>

  );
};

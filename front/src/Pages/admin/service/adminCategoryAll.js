import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminAllCategory = () => {
  const [serviceCategory, setServiceCategory] = useState([]);

  useEffect(() => {
    allService();
  }, []);

  // Fonction pour afficher toutes les catégories de prestations

  const allService = async () => {
    try {
      const { data } = await axios.get(`api/categories-services`);
      setServiceCategory(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main-admin-all">
      <AdminWelcome />
      <AsideAdmin />
      <AdminTitleAll />

      <section className="content-admin-all">
        {serviceCategory?.map((s, i) => (
          <Link
            key={i}
            className="prestation-admin-all"
            to={`/admin-page/categorie-prestation`}
          >
            <h3 className="h-admin-prestation-all">{s.name}</h3>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default AdminAllCategory;

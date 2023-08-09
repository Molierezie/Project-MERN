import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminAllServices = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    allService();
  }, []);

  // Fonction pour Afficher toutes les prestations

  const allService = async () => {
    try {
      const { data } = await axios.get(`api/prestations`);
      setService(data);
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
        {service?.map((s, i) => (
          <Link
            key={i}
            className="prestation-admin-all"
            to={`/admin-page/prestation/update/${s.slug}`}
          >
            <h3 className="h-admin-prestation-all">{s.nameprestation}</h3>
            <img
              className="img-admin"
              src={`${process.env.REACT_APP_HOST}/${s.image.src}`}
              alt="photo prestation"
              aria-label="photo prestation"
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default AdminAllServices;

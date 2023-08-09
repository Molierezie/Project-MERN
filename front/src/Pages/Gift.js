import axios from "axios";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Gift = () => {
  const [gift, setGift] = useState([]);

  useEffect(() => {
    allGift();
  }, []);

  const allGift = async () => {
    const { data } = await axios.get(`api/cadeaux`);
    setGift(data);
  };

  return (
    <main className="main-cadeau">
      <section className="section-cadeau-client">
        <h1 className="h-cadeau-client">Offrez-vous un tableau</h1>
      </section>

      <section className="section-tableau-client">
        {gift?.map((g, i) => (
          <div key={i} className="div-tableau">
            <h3 className="h-tableau">{g.name}</h3>
            <img
              className="img-tableau-client"
              src={`${process.env.REACT_APP_HOST}/${g.image[0].src}`}
              alt="cadeau tableau"
              aria-label="cadeau tableau"
            />
            <NavLink to={`/cadeaux/commande/${g.slug}`}>
              <button className="button-tableau">Je choisis ce cadeau</button>
            </NavLink>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gift;

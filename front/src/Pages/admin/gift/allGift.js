import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";


const AdminAllGift = ()=>{

    const [gift, setGift] = useState([])

    useEffect(()=>{
        allGift();
    },[])


    // --------------------- Fonctions pour afficher tous les cadeaux --------------------------

    const allGift = async () =>{

        try {
            const { data } = await axios.get(`api/cadeaux`);
            setGift(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }



    return(

        <main className="main-admin-all">

        <AdminWelcome />
        < AsideAdmin />
        <AdminTitleAll title="Tous les cadeaux" />

        
        <section className="content-admin-all">
            {gift?.map((g,i) =>(
        <Link key={i} className="gift-admin-all" to={`/admin-page/cadeaux-client/update/${g.slug}`}>
                <h1 className="h-admin-prestation-all">{g.name}</h1>
                <img className="img-admin-gift" src={`${process.env.REACT_APP_HOST}/${g.image[0].src}`} alt="photo prestation" aria-label="photo prestation"/> 
            
        </Link>
            ))}

        </section>

    </main>

    )
}

export default AdminAllGift
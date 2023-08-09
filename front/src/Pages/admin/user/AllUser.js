import { useAuth } from "../../../context/auth.js";
import { AsideAdmin } from "../../../components/admin/asideAdmin.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminTitleAll } from "../../../components/admin/adminTitleAll.js";
import { AdminWelcome } from "../../../components/admin/adminWelcome.js";
import moment from "moment"


const AdminAllUser = ()=>{

    const [auth, setAuth] = useAuth();

    const [user, setUser] = useState([])

    useEffect(()=>{
        allUser();
    },[])

    const allUser = async () =>{

        try {
            const { data } = await axios.get(`api/utilisateurs`);
            setUser(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }



    return(

        <main className="main-admin-all">

        <AdminWelcome />
        < AsideAdmin />
        <AdminTitleAll title="Tous les utilisateurs" subtitle="Cliquez sur un utilisateurs pour le supprimer" />

        
        <section className="content-admin-all">
            {user?.map((u,i) =>(
        <Link key={i} className="card-users" to={`/admin-page/utilisateur-detail/${u.slug}`}>
                <h1>login : {u.login}</h1>
                <p className="inscription-users">Inscription le {moment(u.createdAt).format('L')}</p>
                
                
        </Link>
            ))}

        </section>

    </main>

    )
}

export default AdminAllUser
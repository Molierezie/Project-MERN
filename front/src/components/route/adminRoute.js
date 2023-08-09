import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// Quand je return outlet je return le component sur lequel je suis et si je ne peux pas je serai redirigé sur la page accueil
import { useAuth } from "../../context/auth.js";
import { RedirectLogin } from "../route/redirectLogin.js";
import axios from "axios";


  

export const AdminRoute = () =>{

// 1. on accède au contexte

const [auth, setAuth] = useAuth();

// 2. On verifie s'il y a une connexion par défaut je met à false
const [connect, setConnect] = useState(false)


// useEffect pour vérifier avec la base de donnée qu'il y a une connexion d'un Utilisateur
// `${process.env.REACT_APP_HOST}api/login`

useEffect(() =>{

    const adminCheck = async () =>{

       const { data } = await axios.get(`api/admin-check`);
        
        if (data.connect){
            setConnect(true)
        } else {
            setConnect(false)
        }
    }

    if(auth?.token) adminCheck();
    
}, [auth?.token])
// Dans le useEffect on fait une condition s'il y a un utilisateur connecté le state de connect passe à true sinon il est à false par défaut


return connect ? <Outlet /> : <RedirectLogin />


}

import { useState, createContext, useContext, useEffect} from "react";
import axios from "axios";
// import { server } from "../server";

// Création du context
const AuthContext = createContext();

// La props children représente tous les compenents
const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState({
        user :null,
        token : ""
    });

// Configuration Axios par défaut

axios.defaults.baseURL = process.env.REACT_APP_HOST;
axios.defaults.headers.common["Authorization"] = auth?.token

    // useEffect Afin que même lorsque l'on recharge la page le context reste à jour sur la page 
    useEffect(()=>{
    
    const data = localStorage.getItem("auth");
   
    if(data){
        const parsed  = JSON.parse(data);
        setAuth({
             ...auth,
            user: parsed.user,
            token : parsed.token
        });
    }
    },[]);


    // Toute l'application accès au context avec Provider
    return <AuthContext.Provider value={[auth, setAuth]}>
        {children}
   
    </AuthContext.Provider>

};
// AuthContext c'est le contexte global en créant la fonction useAuth j'accède au context 
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider}

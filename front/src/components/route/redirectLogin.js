import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import loading from "../../attachement/loading.gif"

  

export const RedirectLogin = () =>{


// Le State

const [count, setCount] = useState(2)

const navigate = useNavigate();


// useEffect pour dès lors qu'il y a une personne qui souhaite accéder à une page non autorisé il sera redirigé

useEffect(() =>{

const interval = setInterval(() =>{
setCount((decrement) => --decrement);

}, 1000);

count === 0 && navigate("/se-connecter");
return () => clearInterval(interval)

}, [count]);

  
return(

    <main className="main-loading">
        <img src={loading} alt="chargement" aria-label="chargement" className="loading"/>
    </main>



)

}


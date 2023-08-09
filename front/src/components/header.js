import "../App.css"
import { NavLink} from "react-router-dom"
import { useAuth } from "../context/auth.js"
import { useNavigate } from "react-router-dom"
import { FiAlignJustify} from "react-icons/fi";



export const Header = ()=> {


  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  
  // Fonction pour supprimer toutes les données du context et LocalStorage

  const logout = () =>{

    setAuth({
      ...auth,
      user : null,
      token : ""
    });
    localStorage.removeItem("auth");
    navigate("/se-connecter")

  }

  

    return(

  <header className="header">
    
      
     <a className="logo"> WM</a>

      <input type="checkbox" id="menu-bar" className="header-input" aria-label="bouton menu"/>

      <label htmlFor="menu-bar" className="header-menu">
      <FiAlignJustify className="burger-menu" />
         </label>

    <nav className="navbar">
        <ul>
          <li >
            <NavLink className="header-link" to={"/accueil"} aria-label="accueil" > Accueil </NavLink>
          </li> 
          <li>
           <NavLink className="header-link" to={"/page-prestations"} aria-label="prestation" > Prestation </NavLink>
        
             <ul>
                <li >
                  <NavLink className="header-link" to={"/prestation-portrait"} aria-label="Portrait"  > Portrait </NavLink>
                </li>
                <li >
                  <NavLink className="header-link" to={"/prestation-famille"} aria-label="Famille" > Famille </NavLink>
                </li>
                <li >
                  <NavLink className="header-link" to={"/prestation-mariage"} aria-label="Mariage"  > Mariage </NavLink>
                </li>
            </ul>
          </li>
         
          <li> 
            <NavLink className="header-link" to={"/a-propos"} aria-label="A propos"  > A propos </NavLink>
          </li>
          <li > 
            <NavLink className="header-link" to={"/contact"} aria-label="Contact" > Contact </NavLink>
          </li>

          {/* les conditions pour savoir s'il y un Admin , un Utilisateur ou bien un visiteur la navbar aura des données différentes */}

          { auth?.user?.role === "Admin" && 
                 
                  <li>
                   {/* S'il y a une personne connecté mais que son rôle est différent de "Utilisateur" alors elle on redirige sur la page admin sinon sur la page "accueil" */}
                  <NavLink to={"/admin-page"} className="header-link">Page Admin</NavLink> 
                  <ul>
                    <li>
                       <NavLink className="header-link" to={"/accueil"} > Profil </NavLink>
                    </li>
                    <li >
                       <NavLink onClick={logout} className="header-link" to={"/se-connecter"} > Se deconnecter </NavLink>
                    </li>
                  </ul>
                  </li>
                
               }

           {!auth?.user &&
               
               <li>
                <NavLink to={"/se-connecter"} className="header-link" aria-label="accès client" >Accès Client</NavLink>
               </li>
                }
            
            { auth?.user?.role === "Utilisateur" && 
              
                <li>
                <NavLink className="header-link avatar">{auth?.user?.login}</NavLink>
             
                  <ul>
                     <li >
                       <NavLink className="header-link" to={"/cadeaux"} > Cadeau </NavLink>
                     </li>
                     <li>
                       <NavLink className="header-link" to={"/cadeaux/profile"} > Profil </NavLink>
                    </li>
                     <li >
                       <NavLink onClick={logout} className="header-link" to={"/se-connecter"} > Se deconnecter </NavLink>
                     </li>


                 </ul>
               </li>
              }
                
          

          
        </ul>
    </nav>
</header>

)
}


       
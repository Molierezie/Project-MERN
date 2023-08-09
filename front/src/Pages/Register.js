import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth.js"
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { HiCloudArrowUp} from "react-icons/hi2"




const Register =()=>{


    // Le context
    const [ auth, setAuth] = useAuth();

    // Les States Etat initial
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [adress, setAdress] = useState("")
    const [image, setImage] = useState("")


    const Navigate = useNavigate();

    
    const handleSubmit = async (e)=>{
         e.preventDefault();

         try {

            const formdata = new FormData();
            formdata.append('login', login)
            formdata.append('email', email)
            formdata.append('password', password)
            formdata.append('adress', adress)
            formdata.append('profile-image', image)
            
        
            const { data } = await axios.post(`api/register`, formdata)
             if (data?.error) {
                toast.error( data.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
             } else {
                 toast.success(`Bienvenue !`, {
                     position: "top-center",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                     });
                
                // Lorsqu'une personne crée un compte on ajoute ses données dans le localStorage et le context
                 localStorage.setItem("auth", JSON.stringify(data))
                 setAuth({...auth, token : data.token, user : data.user})
                Navigate("/accueil")
                
             }
         } catch (error) {
            console.log(error);
            toast.error( 'Vérifie', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
         }

                
        
    }
    

    return(
   
    <main className="main-register-page">

        
        <section className="register-welcom">
            
            <div className="box-register-welcom">
                <h1 className="h-register-welcom">Welcome </h1>
                <p className="p-register-welcom">Nous sommes heureux de vous accueillir</p>
            </div>

         
        </section>
        
        

        <section className="register-form">
       
            

            {/* -------------------------- FORMULAIRE REGISTER ------------------------------------ */}
    
          <form className="formulaire-register" onSubmit={handleSubmit} encType="multipart/form-data">
    
            <h1 className="h-register">Création de votre compte</h1>

            <label className="label-form-register">Login</label>      
            <input
            className="input-register"
            type="text"
            value={login}
            onChange={(e)=> setLogin(e.target.value)}
            />


            <label className="label-form-register">Adresse mail</label>
            <input
            className="input-register"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />

            <label className="label-form-register">Votre adresse</label>
            <input
            className="input-register"
            type="text"
            value={adress}
            onChange={(e)=> setAdress(e.target.value)}
            />


            <label className="label-form-register">Mot de passe </label>

            <input
            className="input-register"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
        


            <label className="label-form-register-download" htmlFor="file_picker"> Télécharger une photo de profil (non obligatoire)


            <HiCloudArrowUp className="download"/>

            <input
            hidden
            type="file"
            name="profile-image"
            accept="image/*"
            id="file_picker"
            className="input-register"
            onChange={(e)=> setImage(e.target.files[0])}
            multiple
            />

            </label> 
    
    
            <input aria-label="button-validé" type="submit" value="Créer mon compte" className="btn-register"/>
            <p className="register-redirect">Vous avez déjà un compte ? <NavLink className={"register-redirect"} to={"/se-connecter"}> connectez-vous </NavLink> </p>

           </form>
    
        
        </section>
    
    
    </main>
    )
       
    
}

export default Register
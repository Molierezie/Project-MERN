
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';



export const ProfileUpdate = () =>{
    
    const [ auth, setAuth ] = useAuth();

    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{

        if(auth?.user){
            
            const {login,email,adress} = auth?.user;
            setLogin(login)
            setEmail(email)
            setAdress(adress)
            
        }

    },[auth?.user])


    const HandleSubmit = async (e) =>{
        e.preventDefault()

        try {
           const formdata = {
                login,
                adress,
                password
            }

            const {data} = await axios.put("api/profile-modification", formdata)
            console.log(`Votre profil ${data.login} a bien été mise à jour`);
            if (data?.error) {
                toast.error(data.error)
            } else {
                
                // Mise à jour du Context et du localStorage après modification des données
                setAuth({ ...auth, user : data})
                let local = localStorage.getItem("auth");
                local = JSON.parse(local)
                local.user = data;
                localStorage.setItem("auth", JSON.stringify(local))
                toast.success(`Votre Profil a bien était mise à jour`)
            }
            
        } catch (error) {
            console.log(error);
        }

    }
    


    return(

        <main className="main-profile">

            <section className="section-profile">

            <section className="profile-form">

        <h1 className="h-login">Votre profil</h1>


        <form className="formulaire-profile" onSubmit={HandleSubmit}>

        <label className="label-form-register">Login</label>
        
        <input
        className="input-register"
        type="text"
        value={login}
        onChange={(e)=> setLogin(e.target.value)}
        autoFocus
        />
          <label className="label-form-register">Email</label>
        
        <input
        className="input-register"
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        disabled
        />
          <label className="label-form-register">Adresse</label>
        
        <textarea
        className="input-register"
        type="text"
        value={adress}
        onChange={(e)=> setAdress(e.target.value)}
        /> 
          <label className="label-form-register">Mot de passe</label>
        
        <input
        className="input-register"
        type="password"
        value={password}
        placeholder='Entrer le nouveau mot de passe'
        onChange={(e)=> setPassword(e.target.value)}

        />


        <button className="btn-profile">Modifier mon profil</button>
        </form>

      


        </section>
        </section>

        <section className="section-review">
                
                <section className="review-form">
                
            <h1 className="h-login">Laisser un avis</h1>
    
    
            <form className="formulaire-review">
    
            <label className="label-form-login">Entrer la catégorie de la prestation</label>
    
    <input
    className="input-review"
    type="text"
    />
    
    <label className="label-form-login">Entrer le nom de la presation</label>
    
    <input
    className="input-review"
    type="text"
    />
    
    <label className="label-form-login">Entrer le nom de la formule</label>
    
    <input
    className="input-review"
    type="text"
    />
    <label className="label-form-review-textarea">Ecrivez votre avis</label>
            <textarea className='textarea-form' >
    
            </textarea>
    
            <button className="btn-review">Validé</button>
            </form>
    
            </section>
                </section>

        </main>

        )

        }
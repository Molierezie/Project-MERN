import axios from "axios";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.js";
import { toast } from "react-toastify";

const Login = () => {
  // Le contexte
  const [auth, setAuth] = useAuth();

  // L'état initiale
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formLogin = {
        email: email,
        password: password,
      };
      // la base de l'url est configuré dans le dossier "context" => "auth.js"
      const { data } = await axios.post(`api/login`, formLogin);
      if (data?.error) {
        toast.error(data.error, {
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

        // Lorsqu'une personne se connecte on ajoute ses données dans le localStorage et le context

        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });

        // Condition redirection en fonction du role
        data.user.role === "Utilisateur"
          ? navigate("/cadeaux")
          : navigate("/admin-page");
      }
    } catch (error) {
      console.log(error);
      toast.error(" Verifier la saisie de votre mot de passe !", {
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
  };

  return (
    <main className="main-login-page">
      <section className="login-welcom">
        <div className="box-welcom">
          <h1 className="h-welcom">Welcome back</h1>
          <p className="p-welcom">Nous sommes heureux de te retrouver</p>
        </div>
      </section>

      <section className="login-form">

        <form
          className="formulaire-login"
          method="POST"
          onSubmit={handleSubmit}
        >
        <h1 className="h-login">Veuillez-vous connecter</h1>
          <label className="label-form-login">Email</label>

          <input
            className="input-login"
            aria-label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label-form-login">Mot de passe</label>
          <input
            type="password"
            aria-label="mot de passe"
            className="input-login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            aria-label="bouton pour valider"
            type="submit"
            value="Se connecter"
            className="btn-login"
          />
        <p className="login-redirect">
          Vous êtes nouveau ?{" "}
          <NavLink className="login-redirect" to={"/creation-compte"}>
            Créer votre compte{" "}
          </NavLink>{" "}
        </p>
        </form>

      </section>
    </main>
  );
};

export default Login;

import { useAuth } from "../../context/auth";

export const AdminWelcome = () => {
  // Composant qui est l'en tête de la page Admin avec le login de l'administrateur

  const [auth, setAuth] = useAuth();
  return (
    <section className="section-title-all">
      <h2 className="h-title-admin-name">Page Administrateur</h2>
      <p className="title-admin">{`Bienvenue ${auth?.user?.login} quoi de neuf !`}</p>
    </section>
  );
};

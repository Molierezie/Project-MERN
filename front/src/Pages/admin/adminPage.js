import { useAuth } from "../../context/auth.js";
import { AdminWelcome } from "../../components/admin/adminWelcome.js";
import { AsideAdmin } from "../../components/admin/asideAdmin.js";

const Admin = () => {
  const [auth, setAuth] = useAuth();

  return (
    <main className="main-admin-all">
      
      <AdminWelcome />
      <AsideAdmin />

      <section className="content-admin-all">
        <h2 className="h-admin-information">Admin information</h2>
        <p className="infos-admin">Login : {auth?.user?.login}</p>
        <p className="infos-admin">Email : {auth?.user?.email}</p>
      </section>
    </main>
  );
};

export default Admin;

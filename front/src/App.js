import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";


/* -------------------------------------- ROUTE ACCESSIBLE POUR LES VISITEURS UTILISATEURS ET ADMIN ------------------------------------------- */

import Contact from "./Pages/Contact.js";
import Home from "./Pages/Home.js";
import { ServicesPage } from "./Pages/servicesPage.js";
import ServicePortrait from "./Pages/ServicePortrait.js";
import {ServiceFamily} from "./Pages/ServiceFamily.js"
import {ServiceWedding} from "./Pages/ServiceWedding.js";
import { ValidationService } from "./Pages/Validation.js";
import AboutUs from "./Pages/AboutUs.js";
import NotFound from "./components/notFound";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";

/* -------------------------------------- ROUTE PROTEGER POUR l'ADMIN ------------------------------------------- */

import { AdminRoute } from "./components/route/adminRoute.js";

import Admin from "./Pages/admin/adminPage.js"

import { AdminCategory } from "./Pages/admin/gift/categoryGiftAdmin.js";
import { AdminGift } from "./Pages/admin/gift/giftAdmin.js";
import AdminAllGift from "./Pages/admin/gift/allGift.js";
import { AdminUpdateGift } from "./Pages/admin/gift/updateGiftOne.js";

import AdminAllServices from "./Pages/admin/service/adminAllService.js";
import { AdminServices } from "./Pages/admin/service/adminServices.js";
import { AdminUpdateRemove } from "./Pages/admin/service/adminUpdateRemove.js";
import { AdminServiceCategory } from "./Pages/admin/service/adminServiceCategory.js";
import AdminAllCategory from "./Pages/admin/service/adminCategoryAll.js";

import { AdminAllCommandsServices} from "./Pages/admin/Orders/allCommandService.js";

import AdminAllUser from "./Pages/admin/user/AllUser.js";
import { AdminDeleteUser } from "./Pages/admin/user/AdminUserDelete.js";

/* -------------------------------------- ROUTE PROTEGER POUR l'UTILISATEUR ------------------------------------------- */

import { UserRoute } from "./components/route/userRoutePrivate.js";

import Gift from "./Pages/Gift.js";
import { ValidationGift } from "./Pages/user/GiftValidation.js";
import { ProfileUpdate } from "./Pages/user/UserProfile.js";



const App = () => {
  return (
    <>

      {/* Je met le toast contenair ici pour ne pas le remttre sur chaque page */}

      <ToastContainer />
      <Routes>
        {/* -------------------------- PAGE DU SITE ACCESSIBLE A TOUS LES VISITEURS ---------------------------------------- */}

        <Route path="/accueil" element={<Home />} />

        <Route path="page-prestations" element={<ServicesPage />} />
        <Route path="/prestation-portrait" element={<ServicePortrait />} />
        <Route path="/prestation-famille" element={<ServiceFamily />} />
        <Route path="/prestation-mariage" element={<ServiceWedding />} />
        <Route path="prestation/commande/:slug" element={<ValidationService />}/>

        <Route path="/creation-compte" element={<Register />} />
        <Route path="/se-connecter" element={<Login />} />

        <Route path="/a-propos" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

       

        {/* -------------------------------------- ROUTE PROTEGER POUR l'ADMIN ------------------------------------------- */}

        <Route path="/admin-page" element={<AdminRoute />}>
          <Route path="" element={<Admin />} />
          <Route path="categorie-cadeau-client" element={<AdminCategory />} />
          <Route path="cadeau-client" element={<AdminGift />} />
          <Route path="cadeaux-client" element={<AdminAllGift />} />
          <Route path="cadeaux-client/update/:slug" element={<AdminUpdateGift />}/>

          <Route path="prestation" element={<AdminServices />} />
          <Route path="prestations" element={<AdminAllServices />} />©
          <Route path="prestation/update/:slug" element={<AdminUpdateRemove />}/>
          <Route path="categorie-prestation" element={<AdminServiceCategory />}/>
          <Route path="categories-prestations" element={<AdminAllCategory />}/>
          <Route path="categorie-prestation/update/:slug" element={<AdminUpdateRemove />}/>

          <Route path="liste-commandes-prestations" element={<AdminAllCommandsServices />}/>


          <Route path="utilisateurs" element={<AdminAllUser />} />
          <Route path="utilisateur-detail/:slug" element={<AdminDeleteUser />} />

        </Route>

        {/* -------------------------------------- ROUTE PROTEGER POUR l'UTILISATEUR ------------------------------------------- */}

        <Route path="/cadeaux" element={<UserRoute />}>
        <Route path="" element={<Gift />} />
        <Route path="commande/:slug" element={<ValidationGift />} />
        <Route path="profile" element={<ProfileUpdate />} />
        </Route>
        
        {/* -------------------- PAGE 404 ------------------------- */}
    
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

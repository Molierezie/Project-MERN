import { NavLink } from "react-router-dom"


export const AsideAdmin = () =>{

    return(

    
            <aside className="admin-aside">
                <ul>
                    <li>
                        <h2 className="h-aside-admin">Menu</h2>
                    </li>
                </ul>
                <ul>
                    <li>
                    <NavLink className="aside-link" to={"#"} > Les prestations </NavLink>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/prestation"} > Créer une prestation</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/prestations"} > Affichez toutes les prestations </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/categorie-prestation"} > Toutes les catégories</NavLink>
                            </li>
                        </ul>
                        {/* <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/categories-prestations"} > Affichez toutes les catégories </NavLink>
                            </li>
                        </ul> */}
                    </li>
                    
                </ul>
                <ul>
                <li>
                    <NavLink className="aside-link" to={"#"} > Les Cadeaux </NavLink>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/cadeau-client"} > Créer un cadeau </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/cadeaux-client"} > Affichez tous les cadeaux </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/categorie-cadeau-client"} > Toutes les catégories</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                <li>
                    <NavLink className="aside-link" to={"#"} > Les Commandes </NavLink>

                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/liste-commandes-prestations"} > Liste commandes prestations</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"#"} > Liste commandes cadeaux</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                <li>
                    <NavLink className="aside-link" to={"#"} > Liste des Utilisateurs </NavLink>
                        <ul>
                            <li>
                            <NavLink className="aside-link" to={"/admin-page/utilisateurs"} > Affichez les utilisateurs</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
               
            </aside>



    )
}

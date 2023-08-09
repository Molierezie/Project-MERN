// --------------------- Composant pour afficher le titre et sous titre de l'élément qu'on a choisi dans l'aside -------------------------------

export const AdminTitleAll = ({title="Toutes les prestations", subtitle="Cliquez sur dessus pour modifier ou supprimer"})=>{
    return(

        <section className="title-content-admin-all">
        <h2 className="h-content-admin-all">{title}</h2>
        <p className="p-content-admin-all">{subtitle}</p>
    </section>

    )
}
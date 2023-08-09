

export const ManageCategoryGift =({handleSubmit, value, setValue, buttonSubmit = 'Validé', handleDelete})=>{

    return(

        

          <section className="admin-category-form">

    
        <form form className="formulaire-register"   onSubmit={handleSubmit}>

        <label className="label-form-admin-category">Entrer le nom de la nouvelle catégorie</label>
            <input
            className="admin-input-category"
            type="text"
            
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            
            />
        <div className="admin-btn-category">
            <button  className="button-explication-prestation">{buttonSubmit}</button>

          {/* Condition ici si on a la fonction delete alors on affiche le button */}
          {
            handleDelete &&
            <button onClick={handleDelete}  className="button-explication-prestation">Supprimer</button>
          }
        </div>
        </form>
    
    
        </section>
        )

        
}


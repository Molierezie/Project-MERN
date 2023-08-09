import bcrypt, { hash } from "bcrypt"

// ------------ Fonction pour hahser le mot de passe

export const hashPassword = (password) =>{

    return new Promise((resolve, reject) =>{
        bcrypt.genSalt(10, (err, salt) =>{
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err,hash) =>{

                if (err) {
                    reject(err);
                }
            })
            resolve(hash);


        })

    })
};

// ------------ Fonction pour comparer le mot de passe lors d'une connexion

export const comparePassword = (password, hashed) =>{
    return bcrypt.compare(password, hashed)
}
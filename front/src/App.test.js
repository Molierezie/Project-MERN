import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { useAuth } from "../../context/auth.js";
// import { RedirectLogin } from "../route/redirectLogin.js";

  

// const  = () =>{

// 1. on accède au contexte

// const [auth, setAuth] = useAuth();
// // 2. On verifie s'il y a une connexion
// const [connect, setConnect] = useState(false)

// // Dans le useEffect on fait une condition s'il y a un utilisateur connecté le state de connect passe à true sinon il est à false par défaut

// useEffect(() =>{

// if (auth?.token) {

// setConnect(true)
// } else {
// setConnect(false)
// }

// }, [auth?.token])

// return connect ? <Outlet /> : <RedirectLogin />

// }
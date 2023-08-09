import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth.js';
import './index.css';
import './App.css';
import '@ant-design/cssinjs';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter} from 'react-router-dom'
import { Header } from './components/header.js';
import Footer from './components/footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <Header/>
            <App />
          <Footer />
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();

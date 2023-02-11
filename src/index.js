import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';



import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCRlh5P8-fcjP7H2yg2lz2iQLA-FBnp0do",
  authDomain: "ard-uno.firebaseapp.com",
  projectId: "ard-uno",
  storageBucket: "ard-uno.appspot.com",
  messagingSenderId: "324478082220",
  appId: "1:324478082220:web:58af7b6412d3c2427a1309"
};
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
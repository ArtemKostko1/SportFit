import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './components/styles/css/mainStyles.css';

import Header from "./components/header";
import Footer from "./components/footer";

import AppRouter from "./routing/appRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
          
            <div className="content">
                <AppRouter/>
            </div>
            
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
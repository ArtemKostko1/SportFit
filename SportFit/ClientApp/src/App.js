import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './_components/styles/css/mainStyles.css';

import Header from "./_components/internal-components/header";
import Footer from "./_components/internal-components/footer";

import AppRouter from "./_routing/appRouter";

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
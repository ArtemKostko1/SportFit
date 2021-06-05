import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {ToastProvider} from 'react-toast-notifications';
import './_components/styles/css/mainStyles.css';

import Header from "./_components/internal-components/header";
import Footer from "./_components/internal-components/footer";
import AppRouter from "./_routing/appRouter";

const App = () => {    
    return (
        <BrowserRouter>
            <Header/>

            <ToastProvider autoDismiss={true}>
            <div className="content">
                <AppRouter/>
            </div>
            </ToastProvider>
            
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
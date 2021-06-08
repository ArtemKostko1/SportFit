import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './_components/styles/css/mainStyles.css';

import Header from "./_components/internal-components/header";
import Footer from "./_components/internal-components/footer";
import AppRouter from "./_routing/appRouter";
import {ToastProvider} from "react-toast-notifications";

const App = () => {
    return (
        <BrowserRouter>
            <ToastProvider>
                <Header/>
                
                <div className="content">
                    <AppRouter/>
                </div>
            </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
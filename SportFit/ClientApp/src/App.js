import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import AppRouter from "./_routing/appRouter";
import Header from "./_components/internal-components/header";
import './_components/styles/css/mainStyles.css';


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
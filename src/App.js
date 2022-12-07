import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/home';
import { useStateContext } from "./contexts/ContextProvider";


const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 bg-secondary-dark-bg"> 
                            <Sidebar />
                        </div>
                    )}
                    <div className={activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                        <div>
                            <Routes>
                                <Route path="/home" element={(<Home />)} />
                            </Routes>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
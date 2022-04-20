import React from 'react';
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./components/Users/UsersList";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/users' element={<UsersList />} />
                    <Route path='/' element={<Main />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;



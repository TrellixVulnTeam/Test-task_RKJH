import React from 'react';
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./components/Users/UsersList";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import TodosList from "./components/Todos/TodosList";

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/users' element={<UsersList /> } />
                    <Route path='/todos' element={<TodosList /> } />
                    <Route path='/' element={<Main />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;



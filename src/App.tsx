import React from 'react';
import './index.scss'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import UsersList from "./components/Users/UsersList";
import Header from "./components/Header/Header";
import TodosList from "./components/Todos/TodosList";
import CurrentUser from "./components/Users/CurrentUser/currentUser";

const App = () => {
    return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/users' element={ <UsersList /> } />
                    <Route path='/todos' element={ <TodosList /> } />
                    <Route path='/users/:id' element={ <CurrentUser /> } />
                    <Route path="*" element={<Navigate to="/users" />} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;



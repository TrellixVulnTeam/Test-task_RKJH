import React, { useCallback, useEffect, useState } from 'react';
import { IUser } from "../../../store/reducers/Users/type";
import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";
import styles from './currentUser.module.scss';
import ModalEdit from "../Edit/ModalEdit";

const CurrentUser = () => {
    const { id } = useParams<{ id: string }>();
    const users = JSON.parse(localStorage.getItem('users') || '');
    const [user, setUser] = useState<IUser | null>(null);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            users.filter((element:IUser) => element.id === +id ? setUser(element) : null)
        }
    }, [])

    const changeLocalStorage = useCallback(() => {
        const replace = users.map((element: IUser) => element.id === user?.id ? user : element)
        if (user) {
            localStorage.setItem('users', JSON.stringify(replace))
        }
    }, [user])

    return (
        <div>
            <GoBack />
            <div className={styles.infoAboutUser}>
                <h1>Профиль пользователя {id}</h1>
                <p>Имя пользователя: {user?.name}</p>
                <p>Псевдоним {user?.username}</p>
                <p>E-mail: {user?.email}</p>
                <p>Адрес: Улица - {user?.address.street} Город - {user?.address.city} ZipCode - {user?.address?.zipcode}</p>
                <p>Телефон: {user?.phone}</p>
                <p>WebSite: {user?.website}</p>
                <p>Компания: {user?.company?.name}</p>
            </div>
            <button
                onClick={() => setShow((state) => !state)}
                className={styles.button}>Редактировать</button>
            {show && user && <ModalEdit changeLocalStorage={() => changeLocalStorage()} setUser={setUser} user={user} setShow={setShow} />}
        </div>
    );
};

export default CurrentUser;

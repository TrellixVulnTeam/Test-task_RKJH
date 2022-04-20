import React, { useEffect } from 'react';
import styles from './users.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../API/users";
import { useDispatch } from "react-redux";
import { UsersActionTypes } from "../../store/reducers/Users/type";

const UsersList = () => {
    // const { users, loading, error } = useTypedSelector(state => state.users);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     fetchUsers().then(response => dispatch({ type: UsersActionTypes.FETCH_USERS, payload: response }))
    // }, [])
    // console.log(users)

    return (
            <div className={styles.users}>
                <div className={styles.sort}>
                    Сортировка
                    <button className={styles.button}>По городу</button>
                    <button className={styles.button}>По компании</button>
                </div>

                <div className={styles.wrapper}>
                    <h2>Список пользователей</h2>

                    <div className={styles.wrapperUsers}>
                        <div className={styles.user}>
                            <p><span className={styles.attr}>ФИО:</span>Иван Иванов</p>
                            <p><span className={styles.attr}>Город:</span>Москва</p>
                            <p><span className={styles.attr}>Компания:</span>ООО Пример</p>
                            <div className={styles.full}>
                                Подробнее
                            </div>
                        </div>
                    </div>
                    <div className={styles.countUsers}>
                        Найдено 10 пользователей
                    </div>
                </div>
            </div>
    );
};

export default UsersList;

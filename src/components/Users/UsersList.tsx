import React, { useEffect, useState } from 'react';
import styles from './users.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../API/fetchUsers";
import { useDispatch } from "react-redux";
import { UsersActionTypes} from "../../store/reducers/Users/type";
import { useSearchedUsers } from "../../hooks/useSorted";
import SearchBar from "../Sorting/SearchBar";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const UsersList = () => {
    const { users, loading, error } = useTypedSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers().then((response) => dispatch({type: UsersActionTypes.FETCH_USERS, payload: response}))
    }, [])

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const { query, sort } = filter
    const sortedUsers = useSearchedUsers({ users, sort, query });

    return (
            <div className={styles.users}>

                <div className={styles.wrapper}>
                    <h2>Список пользователей</h2>

                    <SearchBar filter={filter} setFilter={setFilter} />

                    {!loading
                        ? sortedUsers.map((user) => (
                            <div key={user.id} className={styles.wrapperUser}>
                                <div className={styles.user}>
                                    <p><span className={styles.attr}>ФИО:</span>{user.name}</p>
                                    <p><span className={styles.attr}>Город:</span>{user.address?.city || "Не найден"}</p>
                                    <p><span className={styles.attr}>Компания:</span>{user.company?.name || "Не найден"}</p>
                                    <Link className={styles.full} to={`/users/${user.id}`}>Подробнее</Link>
                                </div>
                            </div>
                        ))
                        : <Loader />
                    }

                    {sortedUsers.length
                        ? <div className={styles.countUsers}>
                            Найдено {sortedUsers.length}  пользователей
                        </div>
                        : <h2>Пользователи не найдены</h2>
                    }
                </div>
            </div>
    );
};

export default UsersList;

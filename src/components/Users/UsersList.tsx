import React, { useEffect } from 'react';
import styles from './users.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../API/users";
import { useDispatch } from "react-redux";
import { UsersActionTypes } from "../../store/reducers/Users/type";

const UsersList = () => {
    const { users, loading, error } = useTypedSelector(state => state.users);
    const dispatch = useDispatch()

    useEffect(() => {
        fetchUsers().then(response => dispatch({ type: UsersActionTypes.FETCH_USERS, payload: response }))
    }, [])
    console.log(users)

    return (
        <div className={styles.wrapper}>

        </div>
    );
};

export default UsersList;

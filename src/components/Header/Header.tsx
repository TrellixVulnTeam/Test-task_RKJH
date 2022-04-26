import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.nav}>
            <Link to='/users' className={styles.link}>Users</Link>
            <Link to='/todos' className={styles.link}>Todos</Link>
        </div>
    );
};

export default Header;

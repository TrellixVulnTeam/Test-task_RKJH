import React from 'react';
import styles from './goBack.module.scss';

const GoBack = () => {
    return (
        <button className={styles.back} onClick={() => history.back()}>
            Назад
        </button>
    );
};

export default GoBack;

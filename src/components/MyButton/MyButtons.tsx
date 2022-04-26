import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './myButton.module.scss';

interface IMyButtonsProps {
    filter: object
    setFilter: Dispatch<SetStateAction<object>>
}

const MyButtons: FC <IMyButtonsProps> = ({ filter, setFilter }) => {
    return (
        <div>
            <button
                onClick={() => setFilter({...filter, sort: 'name'})}
                className={styles.button}
            >
                <span>По имени</span>
            </button>
            <button
                onClick={() => setFilter({...filter, sort: 'city'})}
                className={styles.button}
            >
                <span>По городу</span>
            </button>
            {/*<button className={styles.button} onClick={() => setFilter({...filter, sort: 'name'})}>По имени</button>*/}
            {/*<button className={styles.button} onClick={() => setFilter({...filter, sort: 'city'})}>По городу</button>*/}
        </div>
    );
};

export default MyButtons;

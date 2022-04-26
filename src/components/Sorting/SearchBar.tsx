import React, { Dispatch, FC, SetStateAction } from 'react';
import MyInput from "../MyInput/MyInput";
import styles from './searchBar.module.scss';
import MyButtons from "../MyButton/MyButtons";

interface ISearchProps {
    filter: object
    setFilter: Dispatch<SetStateAction<any>> // ПОДПРАВИТЬ ТИПЫ
}

const SearchBar: FC <ISearchProps> = ({ filter, setFilter }) => {
    return (
        <div className={styles.sortButton}>
                <p>Сортировка</p>
                <MyInput
                    onChange={(searched:React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: searched})}
                />
                <MyButtons filter={filter} setFilter={setFilter}/>
        </div>
    );
};

export default SearchBar;

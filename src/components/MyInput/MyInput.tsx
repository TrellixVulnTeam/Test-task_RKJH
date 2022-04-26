import React, { ChangeEvent, FC } from 'react';
import styles from './myInput.module.scss';

type IMyInputProps = {
    onChange: any; //Подправить Типы
}

const MyInput: FC <IMyInputProps> = ({ onChange }) => {
    return (
        <input type="text" className={styles.searchInput}
               placeholder="Поиск по имени"
               onChange={(event) => onChange(event.target.value)}
        />
    );
};

export default MyInput;

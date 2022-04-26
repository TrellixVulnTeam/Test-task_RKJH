import React, { FC, SetStateAction, useState } from 'react';
import styles from './modalEdit.module.scss';
import { IUser } from "../../../store/reducers/Users/type";

interface IModalProps {
    setShow: React.Dispatch<SetStateAction<boolean>>;
    setUser: React.Dispatch<SetStateAction<IUser | null>>;
    user: IUser;
}

const ModalEdit: FC <IModalProps> = ({ setShow, user, setUser }) => {
    const [newUser, setNewUser] = useState(user);
    console.log(newUser)

    const clickHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setUser(newUser)
        setShow((state) => !state)
    }

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        const keyInput:string = event.target.name;

        // const rek = (keyInput:string) => {
        //     for (const key in newUser) {
        //         if(Object.prototype.hasOwnProperty.call(newUser, key)) {
        //             if (key === keyInput) {
        //                 setNewUser({...newUser, [key]: event.target.value})
        //             } else if (typeof newUser[key] === 'object') {
        //                 rek(newUser[key])
        //             }
        //         }
        //     }
        // }
        const rek = (obj: unknown) => {
            for (const key in obj as object) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (obj[key] as object | string  === 'object') {
                        rek(obj[key] as object)
                    } else {

                    }
                }
            }
        }
        rek(newUser)
    }

    return (
        <form className={styles.form} onClick={() => setShow((state) => !state)}>
            <div onClick={(event) => event.stopPropagation()} className={styles.wrapper}>
                <div className={styles.formHeader}>
                    <h2 style={{textAlign: 'center'}}>Редактировать профиль</h2>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Name</label>
                    <div>
                        <input
                            name="name"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Иван Иванов"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>User name</label>
                    <div>
                        <input
                            name="username"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Ivan"
                            className={styles.textFieldInput}/>
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>E-mail</label>
                    <div>
                        <input
                            name="email"
                            onChange={changeHandler}
                            type="email"
                            placeholder="example@mail.com"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Street</label>
                    <div>
                        <input
                            name="street"
                            onChange={changeHandler}
                            type="text"
                            placeholder="ул. Пример"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>City</label>
                    <div>
                        <input
                            name="city"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Москва"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Zip code</label>
                    <div>
                        <input
                            name="zipcode"
                            onChange={changeHandler}
                            type="text"
                            placeholder="1234234"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Phone</label>
                    <div>
                        <input
                            name="phone"
                            onChange={changeHandler}
                            type="text"
                            placeholder="89991112233"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Website</label>
                    <div>
                        <input
                            name="website"
                            onChange={changeHandler}
                            type="text"
                            placeholder="www.example.com"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.textField}>
                    <label className={styles.textFieldLabel}>Company</label>
                    <div>
                        <input
                            name="name"
                            onChange={changeHandler}
                            type="text"
                            placeholder="www.example.com"
                            className={styles.textFieldInput}
                        />
                    </div>
                </div>
                <div className={styles.wrapperButton}>
                    <button onClick={(event) => clickHandler(event)} className={styles.button}>
                        <span>Отправить</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ModalEdit;

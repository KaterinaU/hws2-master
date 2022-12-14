import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import {Simulate} from "react-dom/test-utils";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// export const pureAddUser = (name: string, setError: (value: (((prevState: string) => string) | string)) => void, setName: (value: (((prevState: string) => string) | string)) => void, addUserCallback: (name: string, setUsers: (users: UserType[]) => void, users: UserType[]) => void) => {
export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void): void => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim()) {
        setName('')
        addUserCallback(name);
    }else {
        setName(name)
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnBlur = (name: string, setError: (p: string) => void) => { // если имя пустое - показать ошибку
    if (name.trim() ==='') {
        setError("Ошибка! Введите имя!")
    }else {
        setError('')
    }
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
if (e.key === 'Enter') {
    addUser();
}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length - 1]?.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

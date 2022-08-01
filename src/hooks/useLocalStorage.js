import {useEffect, useState} from 'react';

function UseLocalStorage(key, initialValue) {

    const [value, setValue] = useState(()=>{
        const localState = window.localStorage.getItem(key);
        return localState ? JSON.parse(localState) : initialValue;
    });

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);


    return [value, setValue];

}

export default UseLocalStorage;
import React, { useState } from 'react';

interface User{
    name: string,
    job: string
}

const Counter = () => {
    const [counter, setCount] = useState<number>(0);

    const [user, setUser] = useState<User | null>(null);


    const handleIncrease = (): void =>{
        setCount( counter + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: 'Admin',
            job: 'Dev'
        }
        setUser(userData)
    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;
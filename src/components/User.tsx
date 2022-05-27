import React, { FC } from 'react';

interface Props {
    name: string,
    age?: number
    addUser: () => void
}

const User: FC<Props> = ({name, age, addUser}) => {
    return (
        <div>
            <h2>Hello from: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick={addUser}>add me</button>
        </div>
    );
};

export default User;
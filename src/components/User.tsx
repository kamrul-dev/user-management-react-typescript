import React, { FC } from 'react';
import UserModel from '../Types/models';

// interface Props {
//     name: string,
//     age?: number
//     addUser: () => void
// }

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h2>Hello from: {user.name}</h2>
            <h2>email: {user.email}</h2>
            <button onClick={() => addUser(user)}>add me</button>
        </div>
    );
};

export default User;
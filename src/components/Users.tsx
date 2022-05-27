import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser = (): void => {

    }
    return (
        <div>
            <h2>My Users</h2>
            <User name='kamrul' age={55} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;
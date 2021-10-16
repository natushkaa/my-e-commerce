import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'



const ItemListContainer = (props) => {
    const [user, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(json => console.log(json))


    }, []);

    return (
        <h1>lista S </h1>
        {
        user.map((user) => {
            return (
                <div>
                    <UserCard data={user} />
                </div>
            );
        }
        

     );
};



export default ItemListContainer;
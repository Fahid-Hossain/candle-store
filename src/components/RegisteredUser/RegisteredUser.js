import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const RegisteredUser = () => {
    const [users,setUsers]=useState([]);

    // get user from db
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])

    // Delete user handler
    const deleteUserHandler = (id)=>{
        // confirmation msg for delete
        const proceed = window.confirm("Are you sure you want to delete this?");
        if(proceed){
            const url = `http://localhost:5000/users/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert("Deleted successfully")
                }
                const remainingUser = users.filter(user => user._id !== id);
                setUsers(remainingUser);
            })
        }
    }

    return (
        <div>
            <h2>Our Registered users {users.length}</h2>
            {
                users.map(user =><li>{user.name} - {user.email} <button
                     onClick={()=>deleteUserHandler(user._id)} className="btn">X</button>
                        <Link to={`userDetails/${user._id}`}> <button>Details</button></Link>
                     </li>
                     
                 )
            }
        </div>
    );
};

export default RegisteredUser;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RegisterUserDetails = () => {
    const {userId} = useParams();
    // console.log('userId',userId);

    // single user load from server
    const [user,setUser] = useState({});
    const url = `http://localhost:5000/users/${userId}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setUser(data))
    },[])

    return (
        <div>
            {/* <h4>User Details with id  {userId}</h4> */}
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
        </div>
    );
};

export default RegisterUserDetails;
import React, { useRef, useState } from 'react';

const Feedback = () => {
    const nameRef = useRef();
    const commentRef = useRef();
    const [feedback,setFeedback]= useState('')

    const handleAddFeedback = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const comment = commentRef.current.value;
        const userFeedback = {name:name, comment:comment}

        // post data to server
        fetch("http://localhost:5000/users",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userFeedback)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            <h2>User feedback here</h2>
            <form onSubmit={handleAddFeedback} action="">
                <input ref={nameRef} type="text" placeholder="your name" />
                <input ref={commentRef} type="text" placeholder="your comments" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Feedback;
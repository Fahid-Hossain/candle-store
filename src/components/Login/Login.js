import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth/useAuth';

const Login = () => {
    const { googleSignInHandler, githubSignInHandler, loginUSer,firebaseError } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    //Email on Blur events
    const emailOnBlur = (e) => {
        // console.log(e.target.value);
        const userEmail = e.target.value;
        setEmail(userEmail);
    }

    const passwordOnBlur = (e) => {
        // console.log(e.target.value);
        const userPassword = e.target.value;
        setPassword(userPassword);
    }

    // registerBtnHandler
    const loginBtnHandler = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password should be at least 6 characters")
            return;
        }
        loginUSer(email, password);
        setError("");

    }
    return (
        <>
            <h1 className="text-primary mt-4">Please Login</h1>
            <Form style={{ width: '50%', margin: "3rem auto 0 auto" }}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={emailOnBlur} className="p-2" type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={passwordOnBlur} className="p-2" type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 3, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <div className="text-danger fs-5 mb-2">{error}</div>
                    <div className="text-danger fs-5 mb-2">{firebaseError}</div>
                    <Col sm={{ span: 2, offset: 2 }}>
                        <button onClick={loginBtnHandler} className="btn-primary rounded fs-5" type="submit">Login</button>
                    </Col>
                </Form.Group>
            </Form>
            <p className="fs-5">OR</p>
            <button onClick={googleSignInHandler} className="btn-success rounded fs-5 me-2" type="submit">Sign In with Google</button>
            <button onClick={githubSignInHandler} className="btn-primary rounded fs-5" type="submit">Sign In with Github</button>
        </>
    );
};

export default Login;
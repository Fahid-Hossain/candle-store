import { Col, Form, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase/useFirebase';


const Register = () => {
    const {googleSignInHandler}= useFirebase();


    return (
        <>
            <h1 className="text-primary mt-4">Please Register</h1>
            <Form style={{ width: '50%', margin: "3rem auto 0 auto" }}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className="p-2" type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className="p-2" type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 3, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 2, offset: 2 }}>
                        <button className="btn-primary rounded fs-5" type="submit">Register</button>
                    </Col>
                </Form.Group>
            </Form>
            <p className="fs-5">OR</p>
            <button onClick={googleSignInHandler} className="btn-success rounded fs-5 me-2" type="submit">Sign In with Google</button>
            <button className="btn-primary rounded fs-5" type="submit">Sign In with Github</button>
        </>
    );
};

export default Register;
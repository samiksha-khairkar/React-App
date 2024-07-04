import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';


export default function Login() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", { name, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home');
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <div className='bg'>
                <div className='h-vh d-flex flex-column align-items-center justify-content-center'>
                    <div className='p-3 bg-dark bg-gradient text-white mt-5 mb-5 h-50 w-25 d-flex flex-column align-items-center justify-content-center border rounded'>
                        <div className='bg-dark bg-gradient text-white d-flex flex-column align-items-center justify-content-center mb-0'>
                            <div className='bg2 text-dark d-flex align-self-center p-2 fs-4 mt-n5'>
                                SignIn
                            </div>

                            <div className='w-50 ms-5 mt-3 mb-2 '>
                                <i className="fa-regular fa-circle-user"></i>
                            </div>
                        </div>
                        <Form className='h-100 w-100' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant='primary' type="submit" className='bg3 text-dark'>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
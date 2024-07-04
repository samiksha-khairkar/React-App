import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const [name, setName] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/", { name, dateOfBirth, email, password })
            .then(result => {
                console.log(result)
                navigate('/login');
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
                                Registration
                            </div>

                            <div className='w-50 ms-5 mt-3 mb-2 '>
                                <i className="fa-regular fa-circle-user"></i>
                            </div>
                        </div>
                        <Form className='h-100 w-100' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="Date" placeholder="Enter DOb" onChange={(e) => setDateOfBirth(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant='primary' type="submit" className='bg3 text-dark'>
                                SignUp
                            </Button>
                        </Form>
                        <div className='d-flex'>
                            <div>
                                <p>Already have an account</p>
                            </div>
                            <div>
                                &nbsp;&nbsp;
                                <Link to="/login">Login</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

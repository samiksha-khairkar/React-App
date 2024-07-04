import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getUsers = async () => {
        try {
            return await axios.get("http://localhost:8000/home");
        } catch (error) {
            console.log(`Error while calling getUsers API`, error);
        }
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };





    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}


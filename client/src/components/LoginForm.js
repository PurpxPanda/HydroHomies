import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [login] = useMutation(LOGIN_USER);
    // const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {
                    email: formData.email,
                    password: formData.password
                }
            })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (err) {
            console.log(err)
            alert("An error occurred during login, please try again.")
        }
    }

    // function handleClick(path) {
    //     navigate(path)
    // }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <button type="submit" >Sign In</button>
            </form>
        </div>
    )
}
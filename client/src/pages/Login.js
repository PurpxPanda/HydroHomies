import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login() {
    const [form, setForm] = useState('login')

    function handleClick(event) {
        event.preventDefault();
        setForm(event.target.value);
    }

    return (
        <div>
            <button value="login" onClick={handleClick}>Log In</button>
            <button value="signup" onClick={handleClick}>Sign Up</button>
            <div className="form">
                {form === 'login' ? <LoginForm /> : <SignupForm />}
            </div>
        </div>
    )
}
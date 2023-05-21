import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login() {
    [form, setForm] = useState('login')

    function handleClick(event) {
        event.preventDefault();
        setForm(event.target.value);
    }

    return (
        <div>
            <button value="login" onClick={handleClick}>Log In</button>
            <button value="signup" onClick={handleClick}>Sign Up</button>
            <div className="card">
                {form === 'login' ? <LoginForm /> : <SignupForm />}
            </div>
        </div>
    )
}
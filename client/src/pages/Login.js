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
            <div className="flex justify-center" >
                <button
                    value="login"
                    onClick={handleClick}
                    className="btn btn-primary btn-sm mr-6"
                >
                    Login
                </button>
                <button
                    value="signup"
                    onClick={handleClick}
                    className="btn btn-primary btn-sm"
                >
                    Sign Up
                </button>
            </div>
            <div className="form">
                {form === 'login' ? <LoginForm /> : <SignupForm />}
            </div>
        </div>
    )
}
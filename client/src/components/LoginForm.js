import React, { useState } from 'react';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

export default function LoginForm() {
    const [showError, setShowError] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [login] = useMutation(LOGIN_USER);

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
            setShowError(true)
        }
    }

    return (
        <div className="flex justify-center" >
            <div
                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    {/* throw error if wrong login creds are entered */}
                    {showError && (
                        <div className="alert alert-warning shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Invalid login credentials, please try again!</span>
                            </div>
                        </div>)}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email (Required)</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password (Required)</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
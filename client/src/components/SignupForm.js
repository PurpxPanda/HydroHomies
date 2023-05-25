import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function SignupForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    const [addUser] = useMutation(ADD_USER);
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
        if (formData.password !== formData.confirmPass) {
            alert("Passwords do not match!")
            return
        }

        try {
            // combines first and last name to meet schema requirements
            const fullName = `${formData.firstName} ${formData.lastName}`
            const mutationResponse = await addUser({
                variables: {
                    name: fullName,
                    email: formData.email,
                    password: formData.password
                }
            })
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (err) {
            console.log(err)
            alert("An error occurred during signup, please try again.")

        }
    }

    // function handleClick(path) {
    //     navigate(path)
    // }

    return (
        <div className="flex justify-center" >
            <div
                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
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
                            <span className="label-text">Password</span>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            name="confirmPass"
                            value={formData.confirmPass}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
        // <div>
        //     <h2>Signup</h2>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             placeholder="First Name"
        //             onChange={handleChange}
        //             name="firstName"
        //             value={formData.firstName}
        //         />
        //         <input
        //             type="text"
        //             placeholder="Last Name"
        //             onChange={handleChange}
        //             name="lastName"
        //             value={formData.lastName}
        //         />
        //         <input
        //             type="email"
        //             placeholder="Email"
        //             onChange={handleChange}
        //             name="email"
        //             value={formData.email}
        //         />
        //         <input
        //             type="password"
        //             placeholder="Password"
        //             onChange={handleChange}
        //             name="password"
        //             value={formData.password}
        //         />
        //         <input
        //             type="password"
        //             placeholder="Confirm Password"
        //             onChange={handleChange}
        //             name="confirmPass"
        //             value={formData.confirmPass}
        //         />
        //         <button type="submit" >Create Account</button>
        //     </form>
        // </div>
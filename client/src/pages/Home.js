import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // useNavigate hook will redirect user to another route
    const navigate = useNavigate();
    // function to handle button clicks
    function handleClick() {
        navigate('/bundles')
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/5vt.gif")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Sip Sustainably, Inspire Change</h1>
                    <p className="mb-5">Join us today and become a hero of sustainability. With every flask purchased, you'll personally contribute to saving the environment by reducing the average person's plastic bottle usage by a staggering 156 bottles per year. Embrace the role of a true homie and make a positive impact on our planet.</p>
                    <button 
                    className="btn btn-primary"
                    onClick={handleClick}
                    >
                        Get Started
                        </button>
                </div>
            </div>
        </div>
    )
}







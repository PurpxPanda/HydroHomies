import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 relative z-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" >Home</Link></li>
            {!Auth.loggedIn() ? (
              <li><Link to="/login" >Log In</Link></li>) : (
              <li> <a href="/" onClick={() => Auth.logout()}>
                Sign Out
              </a></li>)
            }
            <li><Link to="/bundles" >Bundles</Link></li>
            <li><Link to="/bottles" >Bottles</Link></li>
            <li><Link to="/flavor-packs" >Flavor Packs</Link></li>
            <li><Link to="/cart" >View Cart</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl hidden lg:flex"><Link to="/" >Home</Link></a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <img
            src="/images/logo.jpg"
            alt="logo"
            className="h-12"
          >
          </img>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {!Auth.loggedIn() ? (
            <li><Link to="/login" >Log In</Link></li>) : (
            <li> <a href="/" onClick={() => Auth.logout()}>
              Sign Out
            </a></li>)
          }
          <li tabIndex={0}>
            <a>
              Products
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100 z-30">
              <li><Link to="/bundles" >Bundles</Link></li>
              <li><Link to="/bottles" >Bottles</Link></li>
              <li><Link to="/flavor-packs" >Flavor Packs</Link></li>
            </ul>
          </li>
          <li><Link to="/cart" >View Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}
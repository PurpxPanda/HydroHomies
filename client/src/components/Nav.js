import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"><Link to="/" >Home</Link></a>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {!Auth.loggedIn() ? (
            <li><Link to="/login" >Login</Link></li>) : (
            <li> <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a></li>)
          }
          <li tabIndex={0}>
            <a>
              Products
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><Link to="/bundles" >Bundles</Link></li>
              <li><Link to="/flasks" >Flasks</Link></li>
              <li><Link to="/flavor-packs" >Flavor Packs</Link></li>
            </ul>
          </li>
          <li><Link to="/cart" >View Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

        // <nav>
        //     <ul>
        //         {/* <li><Link to="/subscribe" >Subscribe</Link></li> */}
        //         <li className="dropdown" >
        //             Products
        //             <div className="dropdown-content" >
        //                 <Link to="/flasks" >Flasks</Link>
        //                 <Link to="/flavor-packs" >Flavor Packs</Link>
        //                 <Link to="/bundles" >Bundles</Link>
        //             </div>
        //         </li>
        //         {/* logo here */}
        //         <img src="" />
        //         <li><Link to="/" >Home</Link></li>
        //         {!Auth.loggedIn() ? (
        //         <li><Link to="/login" >Login</Link></li>) : (
        //         <li> <a href="/" onClick={() => Auth.logout()}>
        //         Logout
        //       </a></li>)
        //         }
        //         {/* add conditional rendering for "X Items" text */}
        //         <li><Link to="/cart" >View Cart</Link></li>
        //     </ul>
        // </nav>
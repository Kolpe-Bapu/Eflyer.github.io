import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <div>
            <img src={"../assets/images/logo.png"} id="img1" />
          </div>

          <div className="eflyer">
            <button className="btn btn-light"><NavLink to={'/cart'} id="a3"> Cart </NavLink></button>
            {/* <!-- Sign In --> */}
            <button className="btn btn-light"><NavLink to={'/signin'} id="a3">Sign In</NavLink></button>
            {/* <!-- Sign Up --> */}
            <button className="btn btn-light"><NavLink to={'/signup'} id="a3">Sign Up</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
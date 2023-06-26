import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const signIn = (e) => {

        if(user.length <= 2 || pass.length < 5){ 

            alert("Type Correct Values");

        }
        else { 

            alert("All Good :)")

        }

        e.preventDefault();

    }

    const userHandler = (e) => {

        let user = e.target.value;

        if (user === "") {

            setUserErr(true);

        }
        else if (user.length <= 2 || user.length > 20) {

            setUserErr(true);

        }
        else if (!isNaN(user)) {

            setUserErr(true);

        }
        else {

            setUserErr(false);

        }
        setUser(user)

    }

    const passHandler = (e) => {

        let pass = e.target.value;

        if (pass === "") {

            setPassErr(true);

        }
        else if (pass.length < 5 || pass.length > 8) {

            setPassErr(true);

        }
        else {

            setPassErr(false);

        }
        setPass(pass)

    }

    useEffect(() =>{ 

        setUser();
        setPass();

    },[])


    return (
        <>
            {/*<!-- Sign In --> */}
            <form action="" onClick={signIn}>
                <div className="signin" id="mymodal">
                    <div className="con2">
                        <div className="head">
                            <h3>SIGN UP</h3>
                        </div>
                        <div className="body">
                            <label> Enter Username </label> <br />
                            <input type="text" id="text" onChange={userHandler} /> <br />
                            {userErr ? <span id="sign">User Not Valid</span> : ""}
                            <br /> <br />

                            <label> Enter Password </label> <br />
                            <input type="password" id="pass" onChange={passHandler} /> <br />
                            {passErr ? <span id="sign">Password Not Valid</span> : ""}
                            <br /> <br />

                            <button className="but" type="submit">SIGN IN</button>
                            <br /> <br />
                        </div>
                        <div className="foot">
                            <input type="checkbox" /> Remember Me
                            <NavLink> Forget Password? </NavLink>
                            <br /> <br />
                            <img src={"../assets/images/google.png"} id="img4" alt="" />
                            <img src={"../assets/images/facebook.png"} id="img5" alt="" />
                            <p> Don't Have a Account? <a href="signup.html"> <b> Create New One </b> </a></p>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Signin;
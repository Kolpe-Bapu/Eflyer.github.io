import React from 'react';
import { useState, useEffect } from 'react';


const Signup = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [pass, setPass] = useState('');

    const [userErr, setUserErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [telErr, setTelErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const signUp = (e) => {

        if(user.length <= 2 || email.indexOf('@') <= 0 || tel.length !== 10 || pass.length < 5){ 

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

    const emailHandler = (e) => {

        let email = e.target.value;

        if (email === "") {

            setEmailErr(true);

        }
        else if (email.indexOf('@') <= 0) {

            setEmailErr(true);

        }
        else if (email.charAt(email.length - 3) !== '.' && email.charAt(email.length - 4) !== '.') {

            setEmailErr(true);

        }
        else {

            setEmailErr(false);

        }
        setEmail(email)

    }

    const numHandler = (e) => {

        let tel = e.target.value;

        if (tel === "") {

            setTelErr(true);

        }
        else if (tel.length !== 10) {

            setTelErr(true);

        }
        else {

            setTelErr(false);

        }
        setTel(tel)

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
        setEmail();
        setTel();
        setPass();

    },[])


    return (
        <>
            {/*<!-- Sign Up --> */}
            <form action="#" onClick={signUp}>
                <div className="signin" id="mymodal">
                    <div className="con">
                        <div className="head">
                            <h3>SIGN UP</h3>
                        </div>
                        <div className="body">
                            <label> Enter Username </label> <br />
                            <input type="text" id="text" onChange={userHandler} /> <br />
                            {userErr ? <span id="upsign1">User Not Valid</span> : ""}
                            <br /> <br />

                            <label> Enter Email </label> <br />
                            <input type="text" id="email" onChange={emailHandler}/> <br />
                            {emailErr ? <span id="upsign1">Email Not Valid</span> : ""}
                            <br /> <br />

                            <label> Enter Number </label> <br />
                            <input type="text" id="tel" onChange={numHandler}/> <br />
                            {telErr ? <span id="upsign1">Number Not Valid</span> : ""}
                            <br /> <br />

                            <label> Enter Password </label> <br />
                            <input type="password" id="pass" onChange={passHandler}/> <br />
                            {passErr ? <span id="upsign1">Password Not Valid</span> : ""}
                            <br /> <br />

                            <button className="but" type="submit">SIGN UP</button>
                            <br /> <br />
                        </div>
                        <div className="foot">
                            <img src={"../assets/images/google.png"} id="img4" alt="" />
                            <img src={"../assets/images/facebook.png"} id="img5" alt="" />
                            <p> Already Have an Account? <a href="signin.html"> <b> Sign In </b> </a></p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signup;
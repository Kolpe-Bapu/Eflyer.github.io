import React from 'react'

const Ship = () => {
    return (
        <>
            <div className="shipping">
                <div className="ship row">
                    <h2> Home Address </h2>
                    <div className="col">

                        <label for="fname"> First Name: </label> <br />
                        <input type="text" id="fname" placeholder="First Name" required />
                        <br /> <br />

                        <label for="adr"> Address: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <label for="adr"> City: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <label for="adr"> Pin Code: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <button className="shipping1" type="button"> Cancel </button>
                        <button className="shipping2" type="button"> Use This Address </button>
                        <br /> <br />
                    </div>
                    <div className="col">
                        <label for="lname"> Last Name: </label> <br />
                        <input type="text" id="lname" placeholder="Last Name" required />
                        <br /> <br />

                        <label for="adr"> Address Line 2: </label> <br />
                        <input type="text" id="adr" />
                        <br /> <br />

                        <label for="adr"> State: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />
                    </div>
                </div>

                <hr />

                <div className="ship row">
                    <h2> Office Address </h2>
                    <div className="col">

                        <label for="fname"> First Name: </label> <br />
                        <input type="text" id="fname" placeholder="First Name" required />
                        <br /> <br />

                        <label for="adr"> Address: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <label for="adr"> City: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <label for="adr"> Pin Code: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />

                        <button className="shipping1" type="button"> Cancel </button>
                        <button className="shipping2" type="button"> Use This Address </button>
                        <br /> <br />
                    </div>
                    <div className="col">
                        <label for="lname"> Last Name: </label> <br />
                        <input type="text" id="lname" placeholder="Last Name" required />
                        <br /> <br />

                        <label for="adr"> Address Line 2: </label> <br />
                        <input type="text" id="adr" />
                        <br /> <br />

                        <label for="adr"> State: </label> <br />
                        <input type="text" id="adr" required />
                        <br /> <br />
                    </div>
                </div>

                <div className="add">
                    <a className="add1" href="#"> Add New Address </a>
                </div> <br /> <br />
            </div>
            <div className="footer">
                <div>
                    <img src={"../assets/images/logo.png"} alt="" />
                </div>
                <div className="email">
                    <input type="email" className="input" placeholder="Your Email" />
                    <a href="#" className="subscribe"> Subscribe </a>
                </div>
                <div className="footer1">
                    <a href="#"> Best Sellers </a>
                    <a href="#"> Gift Ideas </a>
                    <a href="#"> New Releases </a>
                    <a href="#"> Customer Services </a>
                </div>
                <div className="help">
                    <h5> Helpline Number : <a href="#"> +1 1800 1000 1100 </a> </h5>
                </div>
                <div className="help1">
                    <h6> © 2020 All Rights Reserved. Design by <span> Bapu Kolpe </span> </h6>
                </div>
            </div> {/*<!-- End of Footer -->*/}
        </>
    )
}
export default Ship
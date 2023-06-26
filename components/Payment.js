import React from 'react'

const Payment = () => {
    return (
        <>
            <div className="payment cantainer bg-light pt-3">
                <div className="row">
                    <h3 id="h3"> <b> Make Your Payments </b> </h3>
                    <div className="col-3"></div>
                    <div className="pay col-6 pb-3 shadow-lg bg-warning">
                        <div className="images">
                            <img src={"../assets/images/Visa.png"} alt="" id="img3" />
                            <img src={"../assets/images/download.png"} alt="" id="img3" />
                            <img src={"../assets/images/master card.png"} alt="" id="img3" />
                            <img src={"../assets/images/sbi.png"} alt="" id="img3" />
                            <img src={"../assets/images/paypal.png"} alt="" id="img3" />
                        </div>
                        <div className="payment1 row">
                            <div className="col ">
                                <label for=""> Card Number </label>
                            </div>
                            <div className="col text-start">
                                <input type="number" /> <br /> <br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col ">
                                <label for=""> CVV Number </label>
                            </div>
                            <div className="col text-start">
                                <input type="number" name="" id="" /> <br /> <br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label for=""> Expiry Date </label>
                            </div>
                            <div className="col text-start">
                                <input type="month" /> <br /> <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-start">
                                <label for=""> Password </label>
                            </div>
                            <div className="col text-start">
                                <input type="password" name="" id="" /> <br /> <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for=""> Card Holder Name </label>
                            </div>
                            <div className="col text-start">
                                <input type="text" /> <br /> <br />
                            </div>
                        </div>
                        <a href="" className="button" type="submit"> Pay Now </a>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </>
    )
}

export default Payment
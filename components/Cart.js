import React from 'react'

const Cart = () => {
    return (
        <>
            <div className="cart">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart1">
                                <img src={"../assets/images/Showpeace.webp"} alt="" />
                                <div>
                                    <h4> Showpeace </h4>
                                    <p> Price: <span> $20 </span></p>
                                    <a href="#"> Buy Now </a> <br />
                                    <a href="#"> Remove </a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" /></td>
                        <td>$20</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart1">
                                <img src={"../assets/images/Samsung.jpg"} alt="" />
                                <div>
                                    <h4> Samsung Mobile </h4>
                                    <p> Price: <span> $100 </span></p>
                                    <a href="#"> Buy Now </a> <br />
                                    <a href="#"> Remove </a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" /></td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart1">
                                <img src={"../assets/images/Tshirt.jpg"} alt="" />
                                <div>
                                    <h4> T-shirt </h4>
                                    <p> Price: <span> $30 </span></p>
                                    <a href="#"> Buy Now </a> <br />
                                    <a href="#"> Remove </a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" /></td>
                        <td>$30</td>
                    </tr>
                </table>

                <div className="total-price">
                    <table>
                        <tr className="tr">
                            <td className="td"> Subtotal: </td>
                            <td> $150.00 </td>
                        </tr>
                        <tr className="tr">
                            <td className="td"> Tax: </td>
                            <td> $18.00 </td>
                        </tr>
                        <tr className="tr">
                            <td className="td"> Total: </td>
                            <td> $27.00 </td>
                        </tr>
                    </table>
                </div>
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

export default Cart;
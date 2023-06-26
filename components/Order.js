import React from 'react'

const Order = () => {
    return (
        <>
            <table className="table table-bordered">
                <h3 id="h"> Your Orders </h3>
                <tr className="trr">
                    <th> Confirm Orders </th>
                    <th> Shipped </th>
                    <th> Out For Delivered </th>
                    <th> Delivered </th>
                </tr>
                <tr>
                    <td>
                        <div className="cart1">
                            <img src={"../assets/images/Jacket.jpg"} alt="" />

                            <div>
                                <h4> Jacket </h4>
                                <p> Price: <span> $100 </span></p>
                                <button onclick="confirmOrder()" type="submit" className="order"> Confirm </button> <br />
                                <button onclick="cancelOrder()" type="reset" className="order1"> Cancel </button>
                            </div>
                        </div>
                    </td>
                    <td> Pending </td>
                    <td> 0 </td>
                    <td> Not Delivered </td>
                </tr>
                <tr>
                    <td>
                        <div className="cart1">
                            <img src={"../assets/images/Light.webp"} alt="" />
                            <div>
                                <h4> Light </h4>
                                <p> Price: <span> $100 </span></p>
                                <button type="submit" className="order"> Confirm </button> <br />
                                <button type="reset" className="order1"> Cancel </button>
                            </div>
                        </div>
                    </td>
                    <td> 1 </td>
                    <td> 1 </td>
                    <td> Not Delivered </td>
                </tr>
                <tr>
                    <td>
                        <div className="art1">
                            <img src={"../assets/images/Earbuds.jpg"} alt="" />

                            <div>
                                <h4> Earbuds </h4>
                                <p> Price: <span> $100 </span></p>
                                <button type="submit" className="order"> Confirm </button> <br />
                                <button type="reset" className="order1"> Cancel </button>
                            </div>
                        </div>
                    </td>
                    <td> 1 </td>
                    <td> 1 </td>
                    <td> Delivered </td>
                </tr>
                <tr>
                    <td>
                        <div className="cart1">
                            <img src={"../assets/images/KBR901.jpg"} alt="" />
                            <div>
                                <h4> Bracelet </h4>
                                <p> Price: <span> $100 </span></p>
                                <button type="submit" className="order"> Confirm </button> <br />
                                <button type="reset" className="order1"> Cancel </button>
                            </div>
                        </div>
                    </td>
                    <td> 1 </td>
                    <td> 1 </td>
                    <td> Delivered </td>
                </tr>
            </table>

            <div className="footer" id="footer">
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

export default Order
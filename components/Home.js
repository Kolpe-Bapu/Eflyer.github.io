import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvasExample">
                <div className="offcanvas-header">
                    <h1></h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="close"></button>
                </div>
                <div>
                    <div className="aside" id="aside">
                        <ul>
                            <li><NavLink id="a3" to={'/products'}>Products</NavLink></li>
                            <li><NavLink id="a3" to={'/ship'}>Shiping Address</NavLink></li>
                            <li><NavLink id="a3" to={'/order'}>Your Orders</NavLink></li>
                            <li><NavLink id="a3" to={'/payment'}>Your Payments</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*<!-- End Of Aside --> */}

            <div id="main">
                <div>
                    <button className="btn  clipart" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">
                        <img id='clipart' src={"../assets/images/clipart3335189.png"} alt="" />
                    </button>
                    <input type="search" placeholder="Search This Blog" id="myinput" />
                    <button className="btn btn-secondary" id="search" type="submit" onClick={'myInput'}>
                        <i> Search </i>
                    </button>
                </div> {/*<!-- End Of Search --> */}
            </div> {/*<!-- End Of Main --> */}

            <div id="text" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-target="#text" data-bs-slide-to="0">
                        <h2 className="d-block">
                            GET START <br /> YOUR FAVOURITE SHOPPING
                        </h2>
                        <div className="a">
                            <a href="" id="a"> Buy Now </a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-target="#text" data-bs-slide-to="1">
                        <h2 className="d-block">
                            GET START <br /> YOUR FAVOURITE SHOPPING
                        </h2>
                        <div className="a">
                            <a href="" id="a"> Buy Now </a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-target="#text" data-bs-slide-to="2">
                        <h2 className="d-block">
                            GET START <br /> YOUR FAVOURITE SHOPPING
                        </h2>
                        <div className="a">
                            <a href="" id="a"> Buy Now </a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" role="button" data-bs-target="#text" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" role="button" data-bs-target="#text" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div> {/*<!-- End Of Carousel --> */}

            <div id="product">
                <div>
                    <h2> Man & Woman Fashion </h2>
                    <div className="main2">
                        <div id="child">
                            <h3 id="h1"> T-shirt </h3>
                            <p> Price: <span> $30 </span></p>
                            <img src={"../assets/images/Tshirt.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Jacket </h3>
                            <p> Price: <span> $30 </span></p>
                            <img src={"../assets/images/Jacket.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Lehanga </h3>
                            <p> Price: <span> $30 </span></p>
                            <img src={"../assets/images/Lehanga.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                    </div>
                </div> {/*<!-- End Of Man & Women Fashion --> */}
                <div>
                    <h2> Electronics </h2>
                    <div className="main2">
                        <div id="child">
                            <h3> Samsung </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/Samsung.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Earbuds </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/Earbuds.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Television </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/TV.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart</a>
                        </div>
                    </div>
                </div> {/*<!-- End Of Electronics --> */}
                <div>
                    <h2> Home Decoration </h2>
                    <div className="main2">
                        <div id="child">
                            <h3> Light </h3>
                            <p> Price: <span> $20 </span></p>
                            <img src={"../assets/images/Light.webp"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Showpeace </h3>
                            <p> Price: <span> $20 </span></p>
                            <img src={"../assets/images/Showpeace.webp"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Zumber </h3>
                            <p> Price: <span> $20 </span></p>
                            <img src={"../assets/images/Zumber.webp"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                    </div>
                </div> {/*<!-- End Of Home Decoration --> */}
                <div>
                    <h2> Jewellery Accessories </h2>
                    <div className="main2">
                        <div id="child">
                            <h3> Bracelet </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/KBR901.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart</a>
                        </div>
                        <div id="child">
                            <h3> Bangles </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/KBL569.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                        <div id="child">
                            <h3> Neckless </h3>
                            <p> Price: <span> $100 </span></p>
                            <img src={"../assets/images/Neckless.jpg"} alt="" id="img2" />
                            <a href="#" className="a1"> Buy Now </a>
                            <a href="#" className="a1"> Add Cart </a>
                        </div>
                    </div>
                </div> {/*<!-- End Of Jewellary Accessories --> */}
            </div> {/*<!-- End Of Product --> */}

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
            </div> {/*<!-- End Of Footer --> */}
    </>
  )
}

export default Home;
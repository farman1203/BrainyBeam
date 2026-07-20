import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const Movies = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [booking, setBooking] = useState({
        name: "",
        theatre: "",
        timing: "",
        seat: 1,
    });

    const seatprice = 250;
    const totalprice = count * seatprice;

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value, });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3000/book-ticket",
                booking
            );

            toast.success("Ticket Booked Successfully", { theme: 'colored' });
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then((res) => {
                console.log(res.data);
                setData(res.data.movie)
            })
    }, [])


    return (
        <div className='clr'>
            {/* crousel */}
            <div className="container">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to={2} /> */}
                    </div>

                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778912523150_sardarweb.jpg" alt="Los Angeles" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1782988193693_thedramaweb.jpg" alt=" Chicago" className="d-block w-100" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>


            <div className="movie-container">

                <aside className="sidebar">
                    <h2>Filters</h2>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Languages</h3>
                            <span>Clear</span>
                        </div>

                        <div className="tags">
                            <button>English</button>
                            <button>Hindi</button>
                            <button>Gujarati</button>
                            <button>Tamil</button>
                            <button>Malayalam</button>
                            <button>Telugu</button>
                            <button>Kannada</button>
                            <button>Punjabi</button>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Genres</h3>
                            <span>Clear</span>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header1">
                            <h3>Format</h3>
                            <span>Clear</span>
                        </div>
                    </div>

                    <button className="cinema-btn">
                        Browse by Cinemas
                    </button>
                </aside>

                <main className="content">
                    <h1>Movies In Ahmedabad</h1>

                    <div className="chips">
                        <span>English</span>
                        <span>Hindi</span>
                        <span>Gujarati</span>
                        <span>Tamil</span>
                        <span>Malayalam</span>
                        <span>Telugu</span>
                        <span>Kannada</span>
                        <span>Punjabi</span>
                    </div>

                    <div className="banner">
                        <h2 style={{ fontSize: 'x-large' }}>Coming Soon</h2>
                        <a href="#">Explore Upcoming Movies →</a>
                    </div>

                    <div className="movies">
                        {
                            data.map((item) => (
                                <div className="movie">
                                    <img
                                        src={item.image}

                                        alt={item.name}
                                    />
                                    <h5>{item.name}</h5>
                                    <p>{item.language}</p>

                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Book Tickets
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                    {/* Booking Modal */}
                    <div
                        className="modal fade"
                        id="myModal"
                        tabIndex="-1"
                        aria-labelledby="bookingModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content shadow-lg border-0 rounded-4">


                                <div className="modal-header bg-primary text-white rounded-top-4">
                                    <h4 className="modal-title" id="bookingModalLabel">
                                        Book Your Ticket
                                    </h4>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        data-bs-dismiss="modal"
                                    ></button>
                                </div>


                                <div className="modal-body p-4">
                                    <form onSubmit={handleSubmit}>


                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="form-control rounded-3"
                                                placeholder="Enter your full name"
                                                value={booking.name}
                                                onChange={handleChange}
                                            />
                                        </div>


                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">
                                                Select Theatre
                                            </label>
                                            <select
                                                name="theatre"
                                                required
                                                className="form-select rounded-3"
                                                value={booking.theatre}
                                                onChange={handleChange}
                                            >
                                                <option>--Choose Theatre--</option>
                                                <option>PVR Ahmedabad</option>
                                                <option>INOX</option>
                                                <option>Rajhans Cinema</option>
                                                <option>INOX Nadiad</option>
                                                <option>PVR Palladium Mall</option>
                                            </select>
                                        </div>


                                        <div className="mb-3">
                                            <label className="form-label fw-semibold"
                                            >
                                                Show Timing
                                            </label>
                                            <select
                                                name="timing"
                                                required
                                                className="form-select rounded-3"
                                                value={booking.timing}
                                                onChange={handleChange}
                                            >
                                                <option>--Select Time--</option>
                                                <option>09:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>03:00 PM</option>
                                                <option>06:00 PM</option>
                                                <option>09:00 PM</option>
                                            </select>
                                        </div>


                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                Number of Seats
                                            </label>

                                            <div className="d-flex align-items-center gap-3">

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    style={{ width: "45px", height: "45px" }}
                                                    onClick={() => {
                                                        if (count > 1) {
                                                            setCount(count - 1);
                                                            setBooking({ ...booking, seat: newCount });
                                                        }
                                                    }}
                                                >
                                                    -
                                                </button>

                                                <h3 value={booking.seat}
                                                    onChange={handleChange}>{count}</h3>

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success"
                                                    style={{ width: "45px", height: "45px" }}
                                                    onClick={() => {
                                                        setCount(count + 1);
                                                        setBooking({ ...booking, seat: newCount });
                                                    }}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="alert alert-info d-flex justify-content-between">
                                            <span>Total Price</span>
                                            <strong>₹{totalprice}</strong>
                                        </div>

                                        {/* Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 py-2 rounded-3 fw-bold"
                                        >
                                            Confirm Booking
                                        </button>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>

        </div>



    )
}

export default Movies

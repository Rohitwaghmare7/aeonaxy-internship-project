import React from 'react';
import Avatar from 'react-avatar';
import { Link } from "react-router-dom"

export default function Navbar() {
    // Retrieve the image from sessionStorage
    const profileImage = sessionStorage.getItem('profileImage');

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3" style={{ padding: "5px 10px" }}>
                <Link className="navbar-brand logo" href="/" style={{ fontSize: "20px" }}>
                    Project
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarNav"
                >
                    <ul className="navbar-nav" style={{ fontSize: "14px" }}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">
                                Inspiration
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Find Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Learn Design
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Go Pro
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Hire Designers
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <form className="form-inline my-2 my-1 ml-auto">
                            <input
                                className="form-control form-control-rounded form-control-lg  mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ fontSize: "14px", padding: "6px" }}
                            />
                        </form>
                        {profileImage ? (
                            <Avatar
                                src={profileImage}
                                size="30"
                                round={true}
                                className="mx-2 my-1"
                            />
                        ) : (
                            <Avatar
                                name="John Doe"
                                size="30"
                                round={true}
                                className="mx-2 my-1"
                            />
                        )}
                        <Link to="#" className="mx-2 my-2" style={{ fontSize: "14px" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="black"
                                className="bi bi-cart"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </Link>
                        <button className="btn mx-2 my-2 fw-bold" style={{ width: "80px", fontSize: "14px", backgroundColor: "#EA4B8B" }}> Upload</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

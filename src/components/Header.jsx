import React from 'react'
import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <>
            <div className='bg-black'>
                <nav className=" navbar navbar-expand-lg navbar-light text-white">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt='logo' className='w-25' style={{ borderRadius: '100%' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our Service
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Same Day Delivery</a>
                                    <a className="dropdown-item" href="#">Courier Services</a>
                                    <a className="dropdown-item" href="#">Trucking</a>
                                    <a className="dropdown-item" href="#">Airfrieght</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Solutions by industry
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Medical</a>
                                    <a className="dropdown-item" href="#">Automotive</a>
                                    <a className="dropdown-item" href="#">Aviation</a>
                                    <a className="dropdown-item" href="#">Retail & E-Commerce</a>
                                    <a className="dropdown-item" href="#">Industry</a>
                                    <a className="dropdown-item" href="#">Legal</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Career
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Join Our Team</a>
                                    <a className="dropdown-item" href="#">Become Our Delivery Partner</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Blog</a>
                                    <a className="dropdown-item" href="#">Events</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className='border border-gray mr-5 rounded text-white p-2'>Request Quote</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

           
        </>
    )
}

export default Header
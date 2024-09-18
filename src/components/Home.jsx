import React from 'react'
import Header from './Header'
import one from '../assets/02.jpg'
import two from '../assets/01.jpg'
import zero from '../assets/00.jpg'

const Home = () => {
    return (
        <>
            <Header />

            <div id='image'>
                <div className='head'>
                    <p className='fs-1 fw-bold'>We prioritize humans first.</p>
                    <p className='fs-5'>Harness the power of advanced technology and world- class logistics solutions to drive big results for your business
                    </p>
                    <button className='btn btn-white bg-white fw-bold fs-5 p-2 text-black'>Request Quote</button>
                </div>
            </div>


            <div className='container fs-5 mb-5 mt-5 fw-bold'>
                <p>Empeiric is an American logistics and courier service company that is governed by expertise and technology. Our effective and efficient solutions help clients to reach point B from point A and get their loads delivered on time and within budget.</p>
            </div>

            <div className=' jumbotron'>
                <div className='container'>

                    <p className='text-center fs-3'>You Allocate, We Deliver. We Provide Four Steps To Success</p>
                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <i className="fs-3 fa-solid fa-truck"></i>
                            <h2>Request and Schedule </h2>
                            <p>Receive client requests via online portal or phone, collect details, and schedule pickups using route optimization software.</p>
                        </div>
                        <div className='col-lg-3'>
                            <i className="fs-3 fa-solid fa-truck"></i>
                            <h2>Pickup </h2>
                            <p>Verify client and item details, inspect items, secure items in the vehicle, and complete necessary documentation.</p>
                        </div>
                        <div className='col-lg-3'>
                            <i className="fs-3 fa-solid fa-truck"></i>
                            <h2>Transport </h2>
                            <p>Use GPS for real-time tracking and ensure compliance with safety protocols.</p>
                        </div>
                        <div className='col-lg-3'>
                            <i className="fs-3 fa-solid fa-truck"></i>
                            <h2>Delivery </h2>
                            <p>Verify recipient, inspect items, complete documentation, and secure handoff. Update system and notify the client.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <p className='fs-2 text-center fw-bold'>We provide Best on Demand Logistics and Courier Services </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='card shadow-sm '>
                            <img src={one} alt="two" className='w-100' />
                            <div className='card-body'>
                                <p className='fw-bold fs-3'>Companies</p>
                                <p>
                                    Whether you’re a small business or a large enterprise, we have the software and solutions that you can tailor to your business to easily drive improvements.
                                </p>
                                <a href='#' className='text-black fs-5'>Request Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card shadow-sm '>
                            <img src={two} alt="two" className='w-100' />
                            <div className='card-body'>
                                <p className='fw-bold fs-3'>Shippers</p>
                                <p>
                                    Empeiric is an American logistics and courier service company that is governed by expertise and technology. Our effective and efficient solutions help clients to reach point A from point B and get their loads delivered on time and within budget.
                                </p>
                                <a href='#' className='text-black fs-5'>Request Quote</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='images mt-5'>
                <div className='move'>
                    <p className='fw-bold fs-1 text-white'>Move a load today </p>
                    <button className='btn btn-black bg-dark rounded text-white p-2'>Get Instant Quote</button>
                </div>
            </div>

            <div className='container m-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={zero} alt='show' className='w-100' />
                    </div>
                    <div className='col-md-6 mt-5'>
                        <p className='fs-3 fw-bold text-center'> Optimize every aspect of your supply chain </p>
                        <p className=''>
                            Our comprehensive range of managed services empower you to harness the full potential of advanced technology and the world’s best logistics experts to optimize your supply chain operations. Outsource all your transportation needs or choose from our menu of add-on logistics solutions and services.
                        </p>
                    <button className='btn btn-black bg-dark rounded-sm text-white p-2'>Request A Quote</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
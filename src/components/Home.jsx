import React from 'react'
import Header from './Header'

const Home = () => {
    return (
        <>
            <Header />

            <div id='image'>
                <h1>We prioritize humans first.</h1>
                <p>Harness the power of advanced technology and world- class logistics solutions to drive big results for your business
                    <button className='btn btn-white p-2'>Request Quote</button>
                </p>
            </div>

            <div className='bg-lightgray'>
                <div>
                    <p>Empeiric is an American logistics and courier service company that is governed by expertise and technology. Our effective and efficient solutions help clients to reach point B from point A and get their loads delivered on time and within budget.</p>
                </div>

                <div>
                    <p>You Allocate, We Deliver. We Provide Four Steps To Success</p>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h2>Request and Schedule </h2>
                            <p>Receive client requests via online portal or phone, collect details, and schedule pickups using route optimization software.</p>
                        </div>
                        <div className='col-lg-3'>
                            <h2>Pickup </h2>
                            <p>Verify client and item details, inspect items, secure items in the vehicle, and complete necessary documentation.</p>
                        </div>
                        <div className='col-lg-3'>
                            <h2>Transport </h2>
                            <p>Use GPS for real-time tracking and ensure compliance with safety protocols.</p>
                        </div>
                        <div className='col-lg-3'>
                            <h2>Delivery </h2>
                            <p>Verify recipient, inspect items, complete documentation, and secure handoff. Update system and notify the client.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
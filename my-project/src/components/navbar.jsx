import React from 'react'

export const Navbar=()=> {
    return (
        <>
            <div className='flex  px-20 justify-between items-center py-6 bg-darkBlue text-white font-sans'>
                <img src="/assets/logo.png" className='w-24' alt="" />
                <ul className='flex gap-10 items-center z-40'>
                    <li>Product</li>
                    <li>Services</li>
                    <li>About</li>
                    <button className='px-10 py-3 bg-white text-darkBlue rounded-full font-bold'>Log In</button>
                </ul>
            </div>
        </>
    )
}
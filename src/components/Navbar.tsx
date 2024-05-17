import React from 'react'

const Navbar = () => {
    return (
        <div className='p-10 bg-black text-white'>
            <div className='flex justify-between'>
                <h1 className='text-3xl'>Vikas Yadav</h1>

                <div className='flex justify-between gap-10'>
                    <a href='#' className='text-white'>Home</a>
                    <a href='#' className='text-white'>About</a>
                    <a href='#' className='text-white'>Contact</a>
                </div>
            </div>

        </div>
    )
}

export default Navbar
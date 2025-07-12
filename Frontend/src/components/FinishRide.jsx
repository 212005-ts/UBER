import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => props.setFinishRidePanel(false)}
                className='p-1 text-center w-[93%] absolute top-0'
            >
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
                <div className='gap-3 flex items-center'>
                    <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbSPvKEqdLc6ychr98s0fzXXnK_aQ9KLYjQ&s" alt="" />
                    <h2 className='text-lg font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-700'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-700'>Kankariya Talab, Ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>₹227.40</h3>
                            <p className='text-sm -mt-1 text-gray-700'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-[85%]'>
                    <Link to='/captain-home' className='w-full mt-5 flex justify-center bg-green-600 text-white text-lg font-semibold p-3 rounded-lg'>Finish Ride</Link>
                    <p className='text-gray-700 items-center justify-between flex px-3 mt-10 text-xs'>*Click on Finish Ride after completing the payment.</p>
                </div>
            </div>
        </div>
    )
}

export default FinishRide

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopUpPanel(false);
            navigate('/captain-riding');
        }
    }

    return (
        <div>
            <h5
                onClick={() => props.setConfirmRidePopUpPanel(false)}
                className='p-1 text-center w-[93%] absolute top-0'
            >
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start.. </h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='gap-3 flex items-center'>
                    <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbSPvKEqdLc6ychr98s0fzXXnK_aQ9KLYjQ&s" alt="" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-700'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-700'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-fill"></i>
                        <div>
                            <h3 className='text-kg font-medium'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-700'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-[85%]'>
                    <form onSubmit={submitHandler}>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
                        <button className='w-full mt-5 flex justify-center bg-green-600 text-white text-lg font-semibold p-3 rounded-lg'>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopUpPanel(false);
                            props.setRidePopUpPanel(false);
                        }} className='w-full mt-1 bg-red-500 text-white text-lg font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp

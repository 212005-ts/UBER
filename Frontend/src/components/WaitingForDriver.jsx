import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.waitingForDriver(false)}
        className='p-1 text-center w-[93%] absolute top-0'
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600'>G-Wagon</p>
          <h1 className='text-lg font-semibold'>{props.ride?.otp}</h1>
        </div>
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
      </div>
    </div>
  )
}

export default WaitingForDriver

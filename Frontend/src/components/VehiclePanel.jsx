import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true)
          props.selectVehicle('car')
        }}
        className='flex w-full border-2 mb-2 active:border-black  rounded-xl p-3 justify-between items-center'
      >
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
        <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='font-medium text-sm'>5 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true)
          props.selectVehicle('moto')
        }}
        className='flex w-full border-2 mb-2 active:border-black  rounded-xl p-3 justify-between items-center'
      >
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="" />
        <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className='font-medium text-sm'>1 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true)
          props.selectVehicle('auto')
        }}
        className='flex w-full border-2 mb-2 active:border-black  rounded-xl p-3 justify-between items-center'
      >
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
      </div>
    </div>
  )
}

export default VehiclePanel

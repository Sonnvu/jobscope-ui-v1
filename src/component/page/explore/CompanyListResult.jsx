import React from 'react'

export default function CompanyListResult() {
  return (
    <div className="relative flex flex-col w-2/5 px-7 py-7 bg-white rounded-2xl">
        <div className="">
            <p className="text-lg font-poppins font-medium text-gray-600">
                Company List
                <span className="pl-3 text-md font-normal text-gray-400">Per Number of Positions</span>
            </p>
        </div>
        <div className="">
            <p className="text-sm font-poppins text-gray-400">Last 1 month</p>
        </div>
        
        <div className="grid grid-cols-1 h-full divide-y">
            <div className='flex items-end pb-3 space-x-4'>
                <p className="text-md font-poppins font-medium text-gray-600">1. </p>
                <p className="text-md font-poppins font-medium text-gray-600">NVIDA</p>
            </div>
            <div className='flex items-end pb-3 space-x-4'>
                <p className="text-md font-poppins font-medium text-gray-600">2. </p>
                <p className="text-md font-poppins font-medium text-gray-600">Intel Corporation</p>
            </div>
            <div className='flex items-end pb-3 space-x-4'>
                <p className="text-md font-poppins font-medium text-gray-600">3. </p>
                <p className="text-md font-poppins font-medium text-gray-600">TCE Electronics</p>
            </div>
            <div className='flex items-end pb-3 space-x-4'>
                <p className="text-md font-poppins font-medium text-gray-600">4. </p>
                <p className="text-md font-poppins font-medium text-gray-600">Microsoft</p>
            </div>
            <div className='flex items-end pb-3 space-x-4'>
                <p className="text-md font-poppins font-medium text-gray-600">5. </p>
                <p className="text-md font-poppins font-medium text-gray-600">CMU</p>
            </div>
        </div>     
    </div>
  )
}

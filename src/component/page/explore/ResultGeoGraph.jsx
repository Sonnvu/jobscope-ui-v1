import React from 'react'
import DemoGeoGraph from '../../util/chart/DemoGeoGraph'

export default function ResultGeoGraph() {
  return (
    <div className="relative bg-slate-100 w-3/5">
        <div className="relative px-10 py-7 pr-20 w-full rounded-2xl bg-white">
            <div className="">
                <p className="text-lg font-poppins font-medium text-gray-600">Job Demograph</p>
            </div>
            <div className="">
                <p className="text-sm font-poppins text-gray-400">Last 1 month</p>
            </div>
            <div className="relative h-72 flex">
                <DemoGeoGraph />
            </div>
        </div>
    </div>
  )
}

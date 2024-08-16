import React from 'react'
import DemoGeoGraph from '../../util/chart/DemoGeoGraph'

export default function ResultGeoGraph() {
  return (
    <div className="bg-slate-100">
        <div className="relative mx-80 w-2/5 px-10 py-7 pr-20 rounded-2xl bg-white">
            <div className="">
                <p className="text-lg font-poppins font-medium text-gray-600">Skill Requirement for: FPGA Design Engineer</p>
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

import React from "react";
import {
  LineChart, Line, ResponsiveContainer, Tooltip,
} from "recharts"
import pic from '../../assets/herry.jpg'

const data = [
  { day: "Mo", food: 20000, toys: 15000, medicine: 10000 },
  { day: "Tu", food: 15000, toys: 10000, medicine: 8000 },
  { day: "We", food: 25000, toys: 22000, medicine: 15000 },
  { day: "Th", food: 23000, toys: 20000, medicine: 9000 },
  { day: "Fr", food: 35000, toys: 26000, medicine: 14000 },
  { day: "Sa", food: 40000, toys: 28000, medicine: 12000 },
  { day: "Su", food: 63000, toys: 39000, medicine: 22000 },
];
const Dashboard = () => {
  return (
    <div className="w-full max-w-sm space-y-6">


      <div className="bg-white rounded-2xl p-5 shadow">
        <div className="flex justify-between mb-3">
          <h2 className="font-semibold text-gray-700 text-center ml-5 text-xl">
            Top Product Revenue
          </h2>
          <span className="text-gray-400 text-xl">⋯</span>
        </div>

        <p className="text-sm text-gray-500 text-center">29 March</p>
        <h1 className="text-2xl font-bold text-center">$90,000</h1>
        <div className="flex gap-1 ">
          <p className="text-green-500 text-sm px-1 mt-1 bg-green-300  ml-17">+6</p>
          <p className="text-center "> higher than yesterday</p>
        </div>

        <div className="h-40 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Tooltip />
              <Line type="monotone" dataKey="food" stroke="#ff5a3c" strokeWidth={2} />
              <Line type="monotone" dataKey="toys" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="medicine" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-orange-500">● Food</span>
            <span className="font-bold">$40,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-500">● Toys</span>
            <span className="font-bold"> $30,000 </span>
          </div>
          <div className="flex justify-between">
            <span className="text-yellow-500">● Medicine</span>
            <span className="font-bold">$20,000</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-200 rounded-2xl p-5 shadow">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-800">
            Monthly Target
          </h2>
          <span className="text-gray-600 text-xl">⋯</span>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full">
              <circle
                cx="64" cy="64" r="55" stroke="#f3f4f6" strokeWidth="10" fill="none"/>
         <circle cx="64" cy="64" r="55" stroke="#ff5a3c" strokeWidth="10" fill="none" strokeDasharray="345" strokeDashoffset="62" strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">82%</span>
            </div>
          </div>

         <div className="flex gap-2">
           <p className="text-green-500 text-sm mt-2">
            +5%</p>
            <p className="text-gray-700 text-xl">than last month</p>
         </div>
        
        </div>
<p className="font-semibold">Top Performer</p>
        <div className="mt-2  bg-gray-50 rounded-xl p-4 flex items-center justify-between drop-shadow-white hover:transition">
          <div className="flex items-center gap-5">
            <img
              src={pic} alt="user" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold text-sm">Herry Jain</h3>
              <p className="text-xs text-gray-500">
                Target:1,000pts
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-sm">1270pts</p>
            <p className="text-green-500 text-xs">+40</p>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
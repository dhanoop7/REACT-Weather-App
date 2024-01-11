import React from "react";
import { useState } from "react";
import axios from 'axios'
import icon from './weathericon.png';
import wind from './wind.png'
import hum from './droplet.png'

export const Container = ({ darkMode }) => {

    const[value, setValue] = useState('');

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const[data, setdata] = useState(null)
    const[loading, setLoading] = useState(true)

    const handleClick = () =>{
        axios.get(`http://api.weatherapi.com/v1/current.json?key=3718c461678842e1b9044637230612&q=${value}&aqi=no`)
            .then((response) =>{
            setdata(response.data)
            console.log(response.data);
            setLoading(false);
        }).catch((error) =>{
            console.log(error)
            setLoading(false);
            
        })

    }



  return (
    <div  className={`absolute ${darkMode ? 'bg-gray-800 text-white' : 'bg-transparent'} top-28`}>

      <div  className={`flex justify-center text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        <h1 className="text-white text-5xl">Weather Today</h1>
        <img src={icon} className=" relative w-44 mb-3 bottom-9"></img>

      </div>

      <div className="flex gap-6">
        <input
          type="text"
          className="relative  bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-96 p-2.5 checked:bg-emerald-500"
          placeholder="Enter your Region"
          value={value}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick} className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-36 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
          <p className="z-10">Search</p>
        </button>
      </div>

      {loading ? (
        <p className="text-center ">Loading...</p>
      ) : (
        data && (<div>
      
          <div className="relative flex mt-14 justify-between">
            
            <div>
                <p className="text-7xl font-light">{data.current.feelslike_c}°C</p>
                <div className="flex">
                <p>{data.location.name}, </p><p>{data.location.region}</p>
                </div>
            </div>
    
            <div className="relative bottom-12">
                <img className="w-32" src={data.current.condition.icon}></img>
                <p>{data.current.condition.text}</p>
            </div>
    
            <div className="">
                <div className="flex  gap-3">
                    <img src={wind} className="w-8"></img>
                    <p>{data.current.wind_kph} km/h</p>
                </div>
    
                <div className="flex gap-3 mt-9">
                    <img src={hum} className="w-8"></img>
                    <p>{data.current.humidity}%</p>
                </div>
            </div>
          </div>
          </div>))}

    </div>
  );
};

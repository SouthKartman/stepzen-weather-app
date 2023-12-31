import React from 'react'
import CityPicker from './CityPicker';
import SunIcon from '@heroicons/react/solid/SunIcon';
import { MoonIcon } from '@heroicons/react/solid';

type Props =
{
    city: string;
    lat: string;
    long: string;
    results: string;
};

function InfPanel({city,lat,long}:Props) {
  return (
    // <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E]
    // text-white p-10'>
    <div>
        <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10">
            <div className='pb-5'>
                <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
                <p className='text-xs text-gray-400'>Longitude/Latitude: {decodeURI(long)}/ {decodeURI(lat)} </p>
            </div>
            <div className='text-black'><CityPicker/></div>

            <hr className='my-10'></hr>
            <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
                <div>
                    <p className='text-xl'>
                    {new Date().toLocaleDateString("ru-RU",{
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
                    
                    <p className='font-extralight'>
                        Часовой пояс: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                </div>

                <p className='text-xl font-bold uppercase'>
                    {new Date().toLocaleTimeString("ru-RU",{
                        hour: "numeric",
                        minute: "numeric",
                        hour12:true,
                        
                    })}
                </p>

            </div>

            <hr className="my-10"/>

            <div className="flex items-center justify-between">
                <div>
                    {/* image */}
                    
                    <div className='flex items-center justify-between space-x-10'>
                        <p className='text-6xl mr-10 font-semibold'>
                            {/* {results.current_weather.temperature.toFixed(1)} */}
                            1.0C°
                        </p>

                        <p className='text-right font-extralight ml-10 text-lg'>
                            {/* weather code */}
                            {/* {weatherCodeToString[results.current_weather.weathercode].label} */}
                            Snowy
                        </p>

                    </div>
                </div>
            </div>
            
            <hr className="my-10"/>
            <div className='space-y-2 py-5'>
                <div className='flex items-center space-x-2 py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] '>
                    <SunIcon className="h-10 w-10 text-gray-400"/>

                    <div className='flex-1 flex justify-between items-center'>
                        <p className="font-extralight">Sunrise</p>
                        <p className="uppercase text-2xl">
                            {/* {new Date(results.daily.sunrise[0]).toLocaleTimeString("ru-RU",{
                                    hour:"numeric",
                                    minute:"numeric",
                                    hour12: true,
                            })} */}
                            10 AM
                        </p>
                    </div>

                </div>
                <div className='flex items-center space-x-2 py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] '>
                    <MoonIcon className="h-10 w-10 text-gray-400"/>

                    <div className='flex-1 flex justify-between items-center'>
                        <p className="font-extralight">Sunset</p>
                        <p className="uppercase text-2xl">
                            {/* {new Date(results.daily.sunset[0]).toLocaleTimeString("ru-RU",{
                                    hour:"numeric",
                                    minute:"numeric",
                                    hour12: true,
                            })} */}
                            19 PM
                        </p>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default InfPanel

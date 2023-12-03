import React, { useState, useEffect } from 'react';
import { getClient } from '@/apollo-client';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
import CalloutCard from '@/components/CalloutCard';
import StatCard from '@/components/StatCard';
import InfPanel from '@/components/InfPanel';
import TempChart from '@/components/TempChart';


type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
}

async function weatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  try {
    const { data } = await client.query({
      query: fetchWeatherQuery,
      variables: {
        current_weather: "true",
        longitude: long,
        latitude: lat,
        timezone: "GMT",
      },
    });

    const results: Root = data.MyQuery;

    console.log(results);

  } catch (error) {
    // Handle and log the error
    console.error('Error while fetching weather data:', error);

    // You can also set a state variable to display an error message to the user
    // Example: setError('An error occurred while fetching weather data.');

    // Handle the error gracefully or show an error message to the user
  }

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      {/* information_panel */}
      <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E]'>
        <InfPanel city={city} long={long} lat={lat} results={''}></InfPanel>
      </div>
      
      {/* <InformationPanel city={city} long={long} lat={lat} results={results}/> */}
      
      <div className='p-5 flex-1 lg:p-10'>
        <div className='pb-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Погода на сегодня</h2>
            <p className='text-sm text-gray-400'>Последнее обновление в: 12:12{""}
            {/* {new Date(results.current_weather.time).toLocaleString()}
            ({results.timezone}) */}
            </p>
          </div>

          <div>
            <CalloutCard
            message='This is where Chat GPT'></CalloutCard>
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <div className='pt-5'>
              <StatCard
              title="Maximum Tempreture"
              metric='21.1C°'
              //metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"></StatCard>
            </div>
            
            <div className='pt-5'>
              <StatCard
              title="Minimum Tempreture"
              metric='7.7C°'
              //metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="green"></StatCard>
            </div>
            
            <div className='pt-5'>
              <StatCard
              title="UV Index"
              metric='25.0%'
              //metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="rose"></StatCard>
            </div>

           

                
            <div className='flex space-x-3 justify-center'>
                <div className='pt-5 w-2/4'>
                  <StatCard
                  title="Wind Speed"
                  metric='14.8m/s'
                  //metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                  color="rose"></StatCard>
                </div>

                <div className='pt-5  w-2/4'>
                  <StatCard
                  title="Wind Derection"
                  metric='315.7°'
                  //metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                  color="rose"></StatCard>
                </div>
            </div>
            <div className='pt-5'>
             {/* {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && ( */}
                <CalloutCard
                  message={"The UV is high today, be sureto wear SPF!"}
                  warning
                />
              {/* )} */}
            </div>

            

            
          </div>
        </div>
        <hr></hr>

        <div className='space-y-3'>
            {/* <TempChart results={results}/> */}
        </div>

      </div>

      


      {/* Welcome to weatherPage: {city} {lat} {long} */}
      {/* You can display an error message here if needed */}
    </div>
  );
}

export default weatherPage;
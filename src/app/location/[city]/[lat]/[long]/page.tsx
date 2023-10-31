import React from 'react'
import { getClient } from '@/apollo-client'
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';


type Props ={

    params:
    {
      city:string;
      lat:string;
      long:string;
    }

}

async function weatherPage({params: { city ,lat,long}}: Props) {
const client = getClient();

const {data} = await client.query(
  {
    query: fetchWeatherQuery,
    variables:{
      current_weather:"true",
      longitude:long,
      latitude:lat,
      timezone:"GMT",
    }
  }
)

const results:Root = data.MyQuery;

console.log(results);

  return (
    <div>
        Welcome to weatherPage: {city} {lat} {long}
    </div>
  )
}

export default weatherPage 
    
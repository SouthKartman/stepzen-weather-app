import { gql, useQuery  } from '@apollo/client';

const fetchWeatherQuery = gql`



query MyQuery (

    $current_weather:String
    $daily: String = "weathercode, temperature_2m_max, temperature_2m_min, apparent_temperature_max, apparent_temperature_min, sunrise, sunset, uv_index_max, uv_index_clear_sky_max"
    $hourly: String = "temperature_2m, relativehumidity_2m, apparent_temperature, precipitation_probability, precipitation, rain, showers,snowfall,snow_depth,windgusts_10m,uv_index, uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
)
{
    
    myQuery(
      current: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
        
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      
      current {
        is_day
        temperature_2m
        weathercode
        time
        windspeed_10m
      }

      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        showers
        snowfall
        snow_depth
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      
      }
    }
  }

`;

export default fetchWeatherQuery;





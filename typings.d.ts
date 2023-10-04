interface CurrentWeather {
    is_day: Int
    temperature: Float
    time: DateTime
    weathercode: Int
    winddirection: Int
    windspeed: Float
  }

interface DailyUnits {
    temperature_2m_max: String
    time: String
    weathercode: String
  }

  interface Hourly {
    apparent_temperature: [Float]
    dewpoint_2m: [Float]
    precipitation_probability: [Int]
    relativehumidity_2m: [Int]
    temperature_2m: [Float]
    time: [DateTime]
    uv_index: [Float]
    uv_index_clear_sky: [Float]
  }

  interface HourlyUnits {
    apparent_temperature: String
    dewpoint_2m: String
    precipitation_probability: String
    relativehumidity_2m: String
    temperature_2m: String
    time: String
    uv_index: String
    uv_index_clear_sky: String
  }

  interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: Int
    generationtime_ms: Float
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: Float
    longitude: Float
    timezone: String
    timezone_abbreviation: String
    utc_offset_seconds: Int
  }
  
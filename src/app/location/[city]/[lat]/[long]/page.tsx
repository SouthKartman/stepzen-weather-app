import React from 'react'


type Props ={

    params:
    {
      city:string;
      lat:string;
      long:string;
    }

}

function weatherPage({params: { city ,lat,long}}: Props) {
  return (
    <div>
        Welcome to weatherPage: {city} {lat} {long}
    </div>
  )
}

export default weatherPage
    
"use client"

import {Country, City} from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import {GlobeIcon} from "@heroicons/react/solid";


type option = {
    value:{
        latitude:string;
        longitude:string;
        isoCode:string;
      };
      label: string;
} | null;

type cityOption = {
    value:{
        latitude: string;
        longitude: string;
        name: string;
        countryCode: string;
        stateCode: string;
      };
      label: string;
} | null;

const options = Country.getAllCountries().map ((Country) => ({
    value:{
      latitude: Country.latitude,
      longitude:Country.latitude,
      isoCode:Country.latitude
    },
    label: Country.name,
  }));


export default function CityPicker (){
    const [selectedCountry,setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);
    const router = useRouter();

    const handleSelectedCountry = (option: option) =>
    {
        setSelectedCountry(option);
        setSelectedCity(null);
    }
    return <div className="space-y-4" >
                <div className="flex flex-wrap justify-start text-white/80 ">
                    <GlobeIcon className=" space-x-3 w-5 h-5 text-white"></GlobeIcon>
                    <label htmlFor="country" className="text-white ml-1 font-medium">Страна</label>
                </div>
                    <Select 
                        className=""
                        value={selectedCountry} 
                        options={options}
                        onChange={handleSelectedCountry}
                    />
            </div>

            //https://www.youtube.com/watch?v=DS5TZCn-pk8&t=2195s&ab_channel=SonnySangha - 45:36mm
}
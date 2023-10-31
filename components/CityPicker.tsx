"use client"

import {Country, City} from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import GlobeIcon from "@heroicons/react/solid";

import {HomeIcon} from "@heroicons/react/solid";


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
      longitude:Country.longitude,
      isoCode:Country.isoCode
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
    const handleSelectedCity = (option: cityOption) =>
    {
        setSelectedCity(option);
        router.push(
            `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
        );
    };

    return ( 
            <div className="space-y-4" >
                <div className="space-y-3">
                <div className="flex flex-wrap py-2 justify-start text-white/80 ">
                  
                    <label htmlFor="country" className="text-white ml-1 font-medium">Страна</label>
                </div>
                    <Select 
                        className=""
                        value={selectedCountry} 
                        options={options}
                        onChange={handleSelectedCountry}
                    />
                </div>
                {selectedCountry && (
                     <div className="space-y-3">
                     <div className="flex flex-wrap py-2 justify-start text-white/80 ">
                         <HomeIcon className=" space-x-3 w-5 h-5 text-white"></HomeIcon>
                         <label htmlFor="country" className="text-white ml-1 font-medium">Город</label>
                     </div>
                         <Select 
                             className=""
                             value={selectedCity} 
                             onChange={handleSelectedCity}

                             options={City.getCitiesOfCountry(
                                selectedCountry.value.isoCode
                             )?.map((state) => ({
                                value:{
                                    latitude: state.latitude!,
                                    longitude: state.longitude!,
                                    name: state.name,
                                    countryCode: state.countryCode,
                                    stateCode: state.stateCode,
                                  },
                                  label: state.name,
                             }))}
                             
                         />
                     </div>
                )}
               
             </div>
    );

            //https://www.youtube.com/watch?v=DS5TZCn-pk8&t=2195s&ab_channel=SonnySangha - 1:25:40
}
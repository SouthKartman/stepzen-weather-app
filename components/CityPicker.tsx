import {Country, City} from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";

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
    return <div>
            <div>
                <label htmlFor="country"></label>
            </div>
                <Select 
                    className="text-black"
                    value={selectedCountry} 
                    options={options}
                    onChange={handleSelectedCountry}
                />
            </div>
}
"use client";
import { Card,Divider,Subtitle,Text } from "@tremor/react"
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen p-10 flex flex-col-1 bg-gradient-to-br justify-center items-center from-[#b552e4] to-pink-500 ">
      
      <Card className="bg-white mx-auto rounded-lg max-w-4xl">
        <Text className="text-6xl text-gray-600 font-bold text-center mb-4 ">
            Weather AI
        </Text>
        <Subtitle className="text-l text-slate-400 font-medium text-center">Сделано на базе OpenAI,Next.js 13.3,Tailwind.css, Tremor, StepZen, GraphQL и API Open-Meteo</Subtitle>
        {/* <hr/> */}
        <Divider className="my-10">
          <hr/>
        </Divider>
          <Card className="bg-gradient-to-br rounded-md from-[#b552e4] to-pink-500">
          {/*CITY PICKER*/}
          <CityPicker/>

          </Card>
      </Card>
      
      
      
    </div>
  )
}

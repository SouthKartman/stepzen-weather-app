"use client";
import { Card,Divider,Subtitle,Text } from "@tremor/react";


export default function Home() {
  return (
    <div className="">
      
      <Card>
        <Text className="text-6xl text-gray-600 font-bold text-center mb-4 ">
            Weather AI
        </Text>
        <Subtitle className="text-l text-center">Сделано на базе OpenAI,Next.js 13.3,Tailwind.css, Tremor, StepZen, GraphQL и API Open-Meteo</Subtitle>
        {/* <hr/> */}
        <Divider className="my-10">
          <hr/>
        </Divider>
          <Card className="bg-gradient-to-br from-[#a100c9] -to[#fff]">
          {/*CITY PICKER*/}

          </Card>
      </Card>
      
      
      
    </div>
  )
}

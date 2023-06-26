"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@tremor/react");
var CityPicker_1 = require("@/components/CityPicker");
function Home() {
    return (React.createElement("div", { className: "min-h-screen p-10 flex flex-col-1 bg-gradient-to-br justify-center items-center from-[#b552e4] to-pink-500 " },
        React.createElement(react_1.Card, { className: "bg-white mx-auto rounded-lg max-w-4xl" },
            React.createElement(react_1.Text, { className: "text-6xl max-[520px]:text-xl text-gray-600 font-bold text-center mb-4 " }, "Weather AI"),
            React.createElement(react_1.Subtitle, { className: "text-l text-slate-400 font-medium text-center" }, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u043D\u0430 \u0431\u0430\u0437\u0435 OpenAI,Next.js 13.3,Tailwind.css, Tremor, StepZen, GraphQL \u0438 API Open-Meteo"),
            React.createElement(react_1.Divider, { className: "my-10" },
                React.createElement("hr", null)),
            React.createElement(react_1.Card, { className: "bg-gradient-to-br rounded-md from-[#b552e4] to-pink-500" },
                React.createElement(CityPicker_1["default"], null)))));
}
exports["default"] = Home;

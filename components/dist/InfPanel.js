"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CityPicker_1 = require("./CityPicker");
var SunIcon_1 = require("@heroicons/react/solid/SunIcon");
var solid_1 = require("@heroicons/react/solid");
function InfPanel(_a) {
    var city = _a.city, lat = _a.lat, long = _a.long;
    return (
    // <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E]
    // text-white p-10'>
    react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10" },
            react_1["default"].createElement("div", { className: 'pb-5' },
                react_1["default"].createElement("h1", { className: 'text-6xl font-bold' }, decodeURI(city)),
                react_1["default"].createElement("p", { className: 'text-xs text-gray-400' },
                    "Longitude/Latitude: ",
                    decodeURI(long),
                    "/ ",
                    decodeURI(lat),
                    " ")),
            react_1["default"].createElement("div", { className: 'text-black' },
                react_1["default"].createElement(CityPicker_1["default"], null)),
            react_1["default"].createElement("hr", { className: 'my-10' }),
            react_1["default"].createElement("div", { className: 'mt-5 flex items-center justify-between space-x-10 mb-5' },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: 'text-xl' }, new Date().toLocaleDateString("ru-RU", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })),
                    react_1["default"].createElement("p", { className: 'font-extralight' },
                        "\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441: ",
                        Intl.DateTimeFormat().resolvedOptions().timeZone)),
                react_1["default"].createElement("p", { className: 'text-xl font-bold uppercase' }, new Date().toLocaleTimeString("ru-RU", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }))),
            react_1["default"].createElement("hr", { className: "my-10" }),
            react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'flex items-center justify-between space-x-10' },
                        react_1["default"].createElement("p", { className: 'text-6xl mr-10 font-semibold' }, "1.0C\u00B0"),
                        react_1["default"].createElement("p", { className: 'text-right font-extralight ml-10 text-lg' }, "Snowy")))),
            react_1["default"].createElement("hr", { className: "my-10" }),
            react_1["default"].createElement("div", { className: 'space-y-2 py-5' },
                react_1["default"].createElement("div", { className: 'flex items-center space-x-2 py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] ' },
                    react_1["default"].createElement(SunIcon_1["default"], { className: "h-10 w-10 text-gray-400" }),
                    react_1["default"].createElement("div", { className: 'flex-1 flex justify-between items-center' },
                        react_1["default"].createElement("p", { className: "font-extralight" }, "Sunrise"),
                        react_1["default"].createElement("p", { className: "uppercase text-2xl" }, "10 AM"))),
                react_1["default"].createElement("div", { className: 'flex items-center space-x-2 py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] ' },
                    react_1["default"].createElement(solid_1.MoonIcon, { className: "h-10 w-10 text-gray-400" }),
                    react_1["default"].createElement("div", { className: 'flex-1 flex justify-between items-center' },
                        react_1["default"].createElement("p", { className: "font-extralight" }, "Sunset"),
                        react_1["default"].createElement("p", { className: "uppercase text-2xl" }, "19 PM")))))));
}
exports["default"] = InfPanel;

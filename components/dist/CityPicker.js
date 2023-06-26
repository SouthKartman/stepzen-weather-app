"use client";
"use strict";
exports.__esModule = true;
var country_state_city_1 = require("country-state-city");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var react_select_1 = require("react-select");
var solid_1 = require("@heroicons/react/solid");
var options = country_state_city_1.Country.getAllCountries().map(function (Country) { return ({
    value: {
        latitude: Country.latitude,
        longitude: Country.latitude,
        isoCode: Country.latitude
    },
    label: Country.name
}); });
function CityPicker() {
    var _a = react_1.useState(null), selectedCountry = _a[0], setSelectedCountry = _a[1];
    var _b = react_1.useState(null), selectedCity = _b[0], setSelectedCity = _b[1];
    var router = navigation_1.useRouter();
    var handleSelectedCountry = function (option) {
        setSelectedCountry(option);
        setSelectedCity(null);
    };
    return React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "flex flex-wrap justify-start text-white/80 " },
            React.createElement(solid_1.GlobeIcon, { className: " space-x-3 w-5 h-5 text-white" }),
            React.createElement("label", { htmlFor: "country", className: "text-white ml-1 font-medium" }, "\u0421\u0442\u0440\u0430\u043D\u0430")),
        React.createElement(react_select_1["default"], { className: "", value: selectedCountry, options: options, onChange: handleSelectedCountry }));
    //https://www.youtube.com/watch?v=DS5TZCn-pk8&t=2195s&ab_channel=SonnySangha - 45:36mm
}
exports["default"] = CityPicker;

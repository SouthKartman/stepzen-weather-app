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
        longitude: Country.longitude,
        isoCode: Country.isoCode
    },
    label: Country.name
}); });
function CityPicker() {
    var _a;
    var _b = react_1.useState(null), selectedCountry = _b[0], setSelectedCountry = _b[1];
    var _c = react_1.useState(null), selectedCity = _c[0], setSelectedCity = _c[1];
    var router = navigation_1.useRouter();
    var handleSelectedCountry = function (option) {
        setSelectedCountry(option);
        setSelectedCity(null);
    };
    var handleSelectedCity = function (option) {
        setSelectedCity(option);
        router.push("/location/" + (option === null || option === void 0 ? void 0 : option.value.name) + "/" + (option === null || option === void 0 ? void 0 : option.value.latitude) + "/" + (option === null || option === void 0 ? void 0 : option.value.longitude));
    };
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement("div", { className: "flex flex-wrap py-2 justify-start text-white/80 " },
                React.createElement("label", { htmlFor: "country", className: "text-white ml-1 font-medium" }, "\u0421\u0442\u0440\u0430\u043D\u0430")),
            React.createElement(react_select_1["default"], { className: "text-black", value: selectedCountry, options: options, onChange: handleSelectedCountry })),
        selectedCountry && (React.createElement("div", { className: "space-y-3" },
            React.createElement("div", { className: "flex flex-wrap py-2 justify-start text-white/80 " },
                React.createElement(solid_1.HomeIcon, { className: " space-x-3 w-5 h-5 text-white" }),
                React.createElement("label", { htmlFor: "country", className: "text-white ml-1 font-medium" }, "\u0413\u043E\u0440\u043E\u0434")),
            React.createElement(react_select_1["default"], { className: "text-black", value: selectedCity, onChange: handleSelectedCity, options: (_a = country_state_city_1.City.getCitiesOfCountry(selectedCountry.value.isoCode)) === null || _a === void 0 ? void 0 : _a.map(function (state) { return ({
                    value: {
                        latitude: state.latitude,
                        longitude: state.longitude,
                        name: state.name,
                        countryCode: state.countryCode,
                        stateCode: state.stateCode
                    },
                    label: state.name
                }); }) })))));
    //https://www.youtube.com/watch?v=DS5TZCn-pk8&t=2195s&ab_channel=SonnySangha - 2:13:40
}
exports["default"] = CityPicker;

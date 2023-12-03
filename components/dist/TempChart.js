'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@tremor/react");
function TempChart(_a) {
    var results = _a.results;
    var hourly = results === null || results === void 0 ? void 0 : results.hourly.time.map(function (time) {
        return new Date(time)
            .toLocaleString('ru-RU', {
            hour: 'numeric',
            hour12: false
        })
            .slice(0, 24);
    });
    var data = hourly.map(function (hour, i) { return ({
        time: Number(hour),
        "UV Index": results.hourly.temperature_2m[i]
    }); });
    var dataFormatter = function (number) { return number + " \u00B0C"; };
    return (React.createElement(react_1.Card, null,
        React.createElement(react_1.Title, null, "Temperature & UV Index"),
        React.createElement(react_1.AreaChart, { className: "mt-6", data: data, showLegend: true, index: "time", categories: ["Temperature (C) ", "UV Index"], colors: ["yellow", "rose"], minValue: 0, valueFormatter: dataFormatter, yAxisWidth: 40 })));
}
exports["default"] = TempChart;

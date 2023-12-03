'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@tremor/react");
function StatCard(_a) {
    var title = _a.title, metric = _a.metric, color = _a.color;
    return (React.createElement(react_1.Card, { decoration: 'top', decorationColor: color },
        React.createElement(react_1.Text, null, title),
        React.createElement(react_1.Metric, null, metric)));
}
exports["default"] = StatCard;

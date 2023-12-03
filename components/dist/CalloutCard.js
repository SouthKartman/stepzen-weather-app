"use strict";
exports.__esModule = true;
var solid_1 = require("@heroicons/react/solid");
var react_1 = require("react");
var react_2 = require("@tremor/react");
function CalloutCard(_a) {
    var message = _a.message, warning = _a.warning;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Callout, { className: 'mt-4', title: message, icon: warning ? solid_1.ExclamationIcon : solid_1.CheckCircleIcon })));
}
exports["default"] = CalloutCard;

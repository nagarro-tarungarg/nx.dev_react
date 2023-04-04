"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var DButton_module_scss_1 = __importStar(require("./DButton.module.scss"));
function DButton(_a) {
    var id = _a.id, title = _a.title, type = _a.type, _b = _a.primary, primary = _b === void 0 ? true : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, tabIndex = _a.tabIndex, role = _a.role, icon = _a.icon, onClick = _a.onClick;
    var additionalClassNames = className.includes("purple") ? DButton_module_scss_1.purple : "";
    return ((0, jsx_runtime_1.jsx)("button", __assign({ id: id, className: "".concat(DButton_module_scss_1.default.base, " ").concat(primary ? DButton_module_scss_1.default.primary : DButton_module_scss_1.secondary, " ").concat(additionalClassNames, " ").concat(className), onClick: onClick, type: type, disabled: disabled, name: "".concat(title), "data-testid": "id-button-".concat(title), tabIndex: tabIndex, role: role }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: DButton_module_scss_1.default.content }, { children: title })) })));
}
exports.default = DButton;

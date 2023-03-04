"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputString = exports.inputInt = void 0;
const PromptSync = require("prompt-sync");
let Input = PromptSync();
const inputString = () => {
    let str = Input("").toString();
    return str;
};
exports.inputString = inputString;
const inputInt = () => {
    let n = parseInt(Input(""));
    return n;
};
exports.inputInt = inputInt;
//# sourceMappingURL=input.js.map
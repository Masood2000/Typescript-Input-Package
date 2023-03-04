"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputInt = void 0;
const PromptSync = require("prompt-sync");
let Input = PromptSync();
const inputInt = () => {
    let n = parseInt(Input(""));
    return n;
};
exports.inputInt = inputInt;
//# sourceMappingURL=input.js.map
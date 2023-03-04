import PromptSync = require("prompt-sync");

let Input = PromptSync()
const inputInt = ():number=>{

    let n:number = parseInt(Input(""))

    return n;

};

export{inputInt};
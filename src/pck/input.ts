import PromptSync = require("prompt-sync");

let Input = PromptSync()

const inputString = ():string=>{
      let str:string = Input("").toString()

    return str;
}
const inputInt = ():number=>{

    let n:number = parseInt(Input(""))

    return n;

};

export{inputInt};
export{inputString};
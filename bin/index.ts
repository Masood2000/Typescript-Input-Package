#! /usr/bin/env node
import PromptSync from "prompt-sync";
let input = PromptSync()

class Input{

 inputInt():number{
    
    let n: number = parseInt(input(""))
    
    return n;
    }

};

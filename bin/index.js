#! /usr/bin/env node
import PromptSync from "prompt-sync";
let input = PromptSync();
class Input {
    inputInt() {
        let n = parseInt(input(""));
        return n;
    }
}
;

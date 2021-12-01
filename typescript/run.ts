import { readFileSync } from "fs";
import { resolve } from "path";

const [task, part] = process.argv.slice(2);
const inputFile = resolve(__dirname, "inputs", `${task}.txt`);
const scriptFile = `./${task}-${part}.ts`;

const input = readFileSync(inputFile, {
  encoding: "utf-8",
});

console.log(require(scriptFile).default(input));

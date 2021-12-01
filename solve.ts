import { readFileSync } from "fs";
import { resolve } from "path";

const entryFile = process.argv[1];
const taskNumber = /(\d+)\.ts/.exec(entryFile)[1];

export const solve = (func: (input: string) => any) => {
  const input = readFileSync(
    resolve(__dirname, "inputs", `${taskNumber}.txt`),
    {
      encoding: "utf-8",
    }
  );

  const output = func(input);
  console.log(output);
};

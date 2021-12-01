import { solve } from "./solve";

solve((input) => {
  const numbers = input.split(/\n/).map((num) => parseInt(num, 10));
  const { increases } = numbers.reduce(
    ({ increases, prev }, curr) => ({
      increases: increases + Number(curr > prev && prev !== undefined),
      prev: curr,
    }),
    { increases: 0, prev: undefined }
  );
  return increases;
});

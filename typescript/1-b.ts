export default (input) => {
  const numbers = (input as string).split(/\n/).map((num) => parseInt(num, 10));

  const sum = (arr: number[]) => arr.reduce((acc, curr) => curr + acc);

  let increases = 0;
  let prevWindow = sum(numbers.slice(0, 3));

  for (let i = 1; i + 2 < numbers.length; i++) {
    const nextWindow = prevWindow - numbers[i - 1] + numbers[i + 2];
    increases += Number(prevWindow < nextWindow);
    prevWindow = nextWindow;
  }

  return increases;
};

export default (input: string) => {
  const parsed = input.split("\n").map((line) => {
    const [opcode, arg] = line.split(" ");
    return {
      opcode,
      arg: parseInt(arg, 10),
    };
  });

  const final = parsed.reduce(
    (acc, { opcode, arg }) => {
      const copy = { ...acc };
      ({
        forward: () => {
          copy.horizontal += arg;
          copy.vertical += copy.aim * arg;
        },
        down: () => (copy.aim += arg),
        up: () => (copy.aim -= arg),
      }[opcode]());
      return copy;
    },
    { vertical: 0, horizontal: 0, aim: 0 }
  );

  return final.vertical * final.horizontal;
};

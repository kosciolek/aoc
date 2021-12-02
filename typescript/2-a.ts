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
        forward: () => (copy.horizontal += arg),
        down: () => (copy.vertical += arg),
        up: () => (copy.vertical -= arg),
      }[opcode]());
      return copy;
    },
    { vertical: 0, horizontal: 0 }
  );

  return final.vertical * final.horizontal;
};

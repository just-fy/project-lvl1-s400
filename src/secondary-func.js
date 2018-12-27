const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = value => value % 2 === 0;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  const opIndex = Math.random() * 4;
  return operators[opIndex];
};

export { getRandomInt, isEven, getRandomOperator };

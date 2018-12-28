const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = value => value % 2 === 0;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  const opIndex = Math.floor(Math.random() * 3);
  return operators[opIndex];
};

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

export { getRandomInt, isEven, getRandomOperator };
export { getGcd };

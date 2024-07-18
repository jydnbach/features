// expects to return number (inference)
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {};
// void

//// anoynymous function ////
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//// void and never ////
const logger = (message: string): void => {
  console.log(message);
};
// it's not gonna return anything

const throwError = (message: string): never => {
  throw new Error(message);
};
//////////

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};

logWeather(todaysWeather);

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

console.log("hola mundo");

// multiplicator(2, 4, "multipliet tow and four, the result is: "); // 8
// multiplicator("String", 4, "multipliet String and four, the result is: "); //error NaN

const parseArguments = args => {
  console.log(args);
  if (args.length !== 4) throw new Error("wrong number of arguments");

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber];
  }
  throw new Error("Provider number is not numbers");
};

const cleanArguments = parseArguments(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiplicator(a, b, `Multplied ${a} and ${b} the result is: `);

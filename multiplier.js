var multiplicator = function (a, b, printText) {
    console.log(printText, a * b);
};
console.log("hola mundo");
// multiplicator(2, 4, "multipliet tow and four, the result is: "); // 8
// multiplicator("String", 4, "multipliet String and four, the result is: "); //error NaN
var parseArguments = function (args) {
    console.log(args);
    if (args.length !== 4)
        throw new Error("wrong number of arguments");
    var firstNumber = Number(args[2]);
    var secondNumber = Number(args[3]);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [firstNumber, secondNumber];
    }
    throw new Error("Provider number is not numbers");
};
var cleanArguments = parseArguments(process.argv);
var a = Number(cleanArguments[0]);
var b = Number(cleanArguments[1]);
multiplicator(a, b, "Multplied ".concat(a, " and ").concat(b, " the result is: "));

var calculator = function (a, b, op) {
    // if (!operations.includes(op)) {
    //   console.log("This operation is not defined");
    // }
    if (op == "multiply")
        return a * b;
    if (op == "add")
        return a + b;
    if (op == "divide") {
        if (b == 0)
            throw new Error("can't divide by 0");
        return a / b;
    }
    throw new Error("Operation is not valid");
};
try {
    console.log(calculator(1, 0, "divide"));
}
catch (err) {
    console.log("sometimes wrong ", err);
}

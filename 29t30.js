/*Write a function called make_shirt() that accepts a size
 and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of
 the shirt and the message printed on it. Call the function.*/
function make_shirt(size, message) {
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
make_shirt('L', 'Not BTS Fan');
make_shirt('M', 'Kpop Fan');
make_shirt('S', 'Pink Venom');
function makeshirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
makeshirt();
makeshirt('M');
makeshirt('S', 'Hello, World!');

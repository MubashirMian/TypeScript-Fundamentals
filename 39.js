/*s: Write a function that accepts a array of items a
 person wants on a sandwich. The function should have
 one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered.*/
// ..items means any number of items, string[] means this array contains str as datatype
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order: ".concat(items.join(', ')));
}
make_sandwich('bread', 'cheese', 'cucumber');
make_sandwich('bread', 'chicken', 'kecthup', 'mayogarlic');
make_sandwich('bread', 'butter', 'jelly');

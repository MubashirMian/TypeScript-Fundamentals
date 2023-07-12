/*Make a array of magician’s names. Pass the array to a function
 called show_magicians(), which prints the name of each magician in the array.*/
// any indicates it can accept any type of datatype , string[] means array has str as data type
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
var magician = ['Harry ', 'Voldermort', 'Hermoine', 'Ron'];
show_magicians(magician);
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician_2 = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician_2));
    }
    return great_magicians;
}
var magicians = ['Harry ', 'Voldermort', 'Hermoine', 'Ron'];
show_magicians(magicians);

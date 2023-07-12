/*Write a function that stores information about a car
in a Object. The function should always receive a manufacturer
 and a model name. It should then accept an arbitrary number
  of keyword arguments. Call the function with the required
  information and two other name-value pairs, such as a color
   or an optional feature. Print the Object that’s returned
   to make sure all the information was stored correctly.*/
function describe_car(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    if (features.length > 0) {
        car['features'] = features;
    }
    return car;
}
var car1 = describe_car('Toyota', 'Corolla', 'Bluetooth', 'Backup Camera');
console.log(car1);
var car2 = describe_car('Honda', 'Civic', 'Sunroof');
console.log(car2);
var car3 = describe_car('Ford', 'Mustang');
console.log(car3);

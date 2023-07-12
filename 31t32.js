/*Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan*?*/
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Sydney', 'Australia');
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Sydney', 'Australia'));

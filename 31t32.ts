/*Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan*?*/

function describe_city(city: string, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('Karachi');
  describe_city('Lahore');
  describe_city('Sydney', 'Australia');
  
  function city_country(city: string, country: string) {
    return `${city}, ${country}`;
  }
  
  console.log(city_country('Karachi', 'Pakistan'));
  console.log(city_country('Lahore', 'Pakistan'));
  console.log(city_country('Sydney', 'Australia'));
  
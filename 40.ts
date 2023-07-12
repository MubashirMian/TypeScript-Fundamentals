/*Write a function that stores information about a car 
in a Object. The function should always receive a manufacturer
 and a model name. It should then accept an arbitrary number
  of keyword arguments. Call the function with the required 
  information and two other name-value pairs, such as a color
   or an optional feature. Print the Object that’s returned 
   to make sure all the information was stored correctly.*/

   function describe_car(manufacturer: string, model: string, ...features: string[]) {
    const car = {
      manufacturer,
      model,
    };
    if (features.length > 0) {
      car['features'] = features;
    }
    return car;
  }
  
  const car1 = describe_car('Toyota', 'Corolla', 'Bluetooth', 'Backup Camera');
  console.log(car1);
  
  const car2 = describe_car('Honda', 'Civic', 'Sunroof');
  console.log(car2);
  
  const car3 = describe_car('Ford', 'Mustang');
  console.log(car3);
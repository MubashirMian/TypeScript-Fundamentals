/*Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that 
stores several examples. Use your list to print a series
 of statements about these items, such as “I would like to own a Honda motorcycle.”*/

 const fav_car= ["Rimac","Chiron","Supra","La Ferrai"];

 for( let i=0;i<fav_car.length;i++)
 {
    const car=fav_car[i];
    console.log(`I wan to buy this car some day ${car}`);
 };
 
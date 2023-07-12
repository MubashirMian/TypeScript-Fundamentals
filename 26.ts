/* Ordinal numbers indicate their position in a array, such 
as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
  let ordinal;
  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  console.log(`${number}${ordinal}`);
}

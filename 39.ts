/*s: Write a function that accepts a array of items a
 person wants on a sandwich. The function should have 
 one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered.*/

 // ..items means any number of items, string[] means this array contains str as datatype
 function make_sandwich(...items: string[]) {
    console.log(`Sandwich Order: ${items.join(', ')}`);
  }
  
  make_sandwich('bread', 'cheese', 'cucumber');
  make_sandwich('bread', 'chicken', 'kecthup', 'mayogarlic');
  make_sandwich('bread', 'butter', 'jelly');
  
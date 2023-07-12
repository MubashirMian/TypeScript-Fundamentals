/*Write a function called make_shirt() that accepts a size
 and the text of a message that should be printed on the shirt. 
 The function should print a sentence summarizing the size of 
 the shirt and the message printed on it. Call the function.*/

 function make_shirt(size: string, message: string) {
    console.log(`Size: ${size}, Message: ${message}`);
  }
  
  make_shirt('L', 'Not BTS Fan');
  make_shirt('M', 'Kpop Fan');
  make_shirt('S', 'Pink Venom');
  
  function makeshirt(size : string = 'L' , message : string = 'I love TypeScript') {
    console.log(`Size: ${size}, Message: ${message}`);
  }
  
  makeshirt();
  makeshirt('M');
  makeshirt('S', 'Hello, World!');
  
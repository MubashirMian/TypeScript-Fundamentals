/*Make a array of magician’s names. Pass the array to a function
 called show_magicians(), which prints the name of each magician in the array.*/

 // any indicates it can accept any type of datatype , string[] means array has str as data type
 function show_magicians(magicians: any[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }

  const magician = ['Harry ', 'Voldermort', 'Hermoine', 'Ron'];
  show_magicians(magician);
  
  function make_great(magicians: string[]) {
    const great_magicians = [];
    for (const magician of magicians) {
      great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
  }
 
  
  const magicians = ['Harry ', 'Voldermort', 'Hermoine', 'Ron'];
  show_magicians(magicians);
  

  
  
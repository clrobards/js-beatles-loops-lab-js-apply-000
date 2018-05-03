var musicians = ["John Lennon", "Paul","George", "Ringo"];
var instruments = ["Guitar"," Bass", "Lead guitar","Drums"];

musicians.forEach(function theBeatlesPlay(musicians, instruments){
  for(var i =[0]; i>=[3];i++);
    return (`${musicians} plays ${instruments}`);
});

 // So you'll need to loop through with musicians & instruments
  // Each loop will then create a string
  // Where the string 'John Lennon plays Guitar' is created with `${ musicians[i] } plays ${ instruments }`
  // Then push each string into a new array
  // Return the new array  
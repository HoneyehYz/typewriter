const sentence = "hello there from lighthouse labs";
let timer = 0;
for(const char of sentence){

  setTimeout( function(){console.log(char)}, timer );
  timer += 500;
  
}



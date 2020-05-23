(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (i in names) {
    name=names[i];
   namess=names[i].toLowerCase();
   var firstLetter =namess.charAt(0);
  if (firstLetter==="j") {
     byeSpeaker.speak();
  } else {
     helloSpeaker.speak();
  }
}
})()

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
var refmusician = [];
for (var i=0; i < musicians.length; i++) {
refmusician.push(`${musicians[i]} plays ${instruments[i]}`);
}
return refmusician;
}

function johnLennonFacts() {
  var facts = ["he was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and a boy scout", "He hated the sound of his own voice" ]
  var jfactexp = []
  var i = 0;
  while (i < facts.length) {
  jfactexp.push(facts[i] + "!!!" );
  i++;
  }
}

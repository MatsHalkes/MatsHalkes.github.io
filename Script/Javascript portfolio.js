var gratis = 0;
var barn = 4;
var honør = 67;

var alder = Number(prompt("Hvor gammel er du?"));

if (alder >= 0 && alder <= 3) {
    console.log("Du er gratis");
}
else if (alder >= barn && alder <=15){
    console.log("Du får 50% rabatt siden du er barn");
}
else if (alder >= honør) {
    console.log("Du får 50% rabatt siden du er honør");
}
else if (alder >= 16 && alder <= honør) {
  console.log("Du får ikke noe rabatt");
}

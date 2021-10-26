var tall1 = Number(prompt("Skriv inn et tall:"));
var tall2 = Number(prompt("Skriv inn et tall til:"));

if (tall1>= tall2) {
    console.log(tall1);
}
else if (tall2 >= tall1){
    console.log(tall2);
}
else if (tall1 == tall2) {
    console.log("Tallene er like");
}
//Diffence entre let et var
//LET: est une déclaration de variable qui permet de déclarer une variable dont 
//la portée est limitée dans lequel elle est déclarée.( une fonction, une boucle ou une instruction conditionnelle)
//càd si tu déclares une avec "let" à l'interieur d'une fonction, elle ne sera accessible que dans cette fonction.
//De plus "let" n'autorise pas la réutilisation d'une variable avec le meme bloc.
//VAR: est une déclaration utilisée dans l'ancienne version JS; elle a une portée de fonction ce qui signifie qu'une  
// variable déclarée avec "var" est accessible dans toute la fonction dans la quelle elle est déclarée.
//Contrairement à "let" "var" autorise la réutilisation d'une variable avec le meme bloc, ce qui peut parfois causer
//des problemes de confusion.
//il est recommandé d'utiliser "let" plutot que "var" pour déclarer les variables en JS, car cela permet
//une meilleure gestion de la portée et évite les problemes de réutilisation accidentelle de variables.

//Write a program that prints ‘Hello World’ to the screen.
let salutation = "Hello, World";
console.log(salutation);
//Write a program that asks the user for their name and greets them with their name.
const name = prompt("what is your name");
console.log("hey Jemuel");
//Modify the previous program such that only the users Alice and Bob are greeted with their names.
if (name === Alice){
    console.log( "bonjour Alice" )
}else if(name === Bob){
    console.log( "bonjour Bob")
}else{
    console.log("Désolé, seuls Alice et Bob sont autorisés")
}
//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
const number = parseInt("écris un nombre")
let sum = 0
for (let i = 1; i>=n ;i++ ) {
    sum = sum + i
}

//Modify the previous program such that only multiples of three or five are considered in the sum,
// e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
sum = 0
for (let i = 1; i<=n; i++){
    if(i%3=== 0){
        sum = sum+i
    }else if (i%5 ===0){
        sum = sum+i
    }
}

//les jours de la semaine avec swich
let jour = 1;
switch (jour) {
   
    case 1:
        console.log('Lundi');
        break;
    case 2:
        console.log('Mardi');
        break;
    case 3:
        console.log('Mercredi');
        break;
    case 4:
        console.log('Jeudi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 6:
        console.log('Samedi');
        break;
        default:
        console.log('Bon dimanche')
}

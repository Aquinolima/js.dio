/* Comentários de
    várias
    linhas */

// Comentários de Linha

// Atalhos para comentários  ( Shift + Alt + A )


/* Exemplo de Função */

console.log("Hello World!");
console.log(" ");
console.log("Exemplo de Função!");
console.log("De 1 a 10, qual é par?");
console.log(" ");

let evenNums = [];

function returnEvenValues(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 ===0 ){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log(" ");
    console.log(`${evenNums} são números par!`);
    console.log(" ");
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

returnEvenValues(array);
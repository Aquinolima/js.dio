function SomaCompara(num1, num2) {
    //Conferir números iguais
    var comp1 = ` Os números ` + num1 + ` e ` + num2 + ` são iguais. `;
    var comp2 = ` Os números ` + num1 + ` e ` + num2 + ` não são iguais. `;
    var resultado1 = (num1 === num2) ? comp1 : comp2;

    //Conferir soma maior/menor que 10 e maior/menor que 20

    var soma = num1 + num2;

    var maior = "maior";
    var menor = "menor";
    
    var mM10 = (soma > 10) ? maior : menor;
    var mM20 = (soma > 20) ? maior : menor;
 
    var resultadoFinal = resultado1 + `Sua soma é ` + soma + `, que é ` + mM10 + ` que 10 e ` + mM20 + ` que 20.`

    return resultadoFinal;
}
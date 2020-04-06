//QUAL O MÊS

mes = parseInt(prompt("Informe o numero do mês: "));
nomeMes = "";
 
switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente";
} 
console.log(nomeMes);


// CALCULO IMC

peso = parseFloat(prompt('Informe seu peso: '));
altura = parseFloat(prompt('Informe sua altura: '));

imc = peso / altura ** 2;

text = ""

if(imc < 17) text = "Muito baixo do peso";
if(imc >= 17 && imc <= 18.49) text = "Abaixo do peso";
if(imc >= 18.5 && imc < 25) text = "Peso normal";
if(imc >= 25 && imc < 30) text = "Acima do peso";
if(imc >= 30 && imc < 35) text = "Obesidade I";
if(imc >= 35 && imc < 40) text = "Obesidade II";

console.log(text)

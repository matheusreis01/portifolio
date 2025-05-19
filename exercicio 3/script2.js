//esta é uma calculadora simples
let n1;
let n2;
let res;
let numero;
function sobra(){ 
     n1 = Number(window.prompt("Digite o 1° número"));
     n2 = Number(window.prompt("Digite o 2° número"));
     res = n1 % n2;
  numero = res % 2;
     alert("O resultado é " + res + ".") ; 
     if (numero == 0){
         alert ("este numero é par")
    } else {
        alert("este numero é impar")
    }
    alert ("o resultado é" + res + ".");
}
function multiplicacao(){ 
    n1 = Number(window.prompt("Digite o 1° número"));
    n2 = Number(window.prompt("Digite o 2° número"));
    res = n1 * n2;
    numero = res % 2;
    alert("O resultado é " + res + ".") ; 
    if (numero == 0){
        alert("este numero é par");
    } else {
        alert("este numero é impar");
    }
}
function soma(){
 n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 + n2;
    numero = res % 2
    alert("O resultado é " + res + ".");
    if ( numero == 0){
        alert("este numero é par");
    }else{
        alert ("impar");
    }
    //essa função é a da soma, ele soma os 2 números e mostra o resultado
}
function subtracao(){
 n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 - n2;
    nu = res % 2;
    alert("O resultado é " + res + ".");
    if (nu == 0){
        alert ("esse numero é par")
    }else{
        alert ("este numero é impar")
    }
 }
function divisao(){
 n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 / n2;
    alert("O resultado é " + res + ".");
   if (nu == 0){
        alert ("esse numero é par")

    } else {
        alert ("este numero é impar")
    }
}

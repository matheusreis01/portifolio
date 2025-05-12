function somar (){
    let n1= 0;
    n1= number(window.prompt('digite seu ano de nascimento:'));
    let idade = n1
    alert (idade);

    if(idade <=2007){
        alert("voce pode tirar a carteira");
    } else{
        alert("Voce nao nao pode tirar a carteira");
    }
}
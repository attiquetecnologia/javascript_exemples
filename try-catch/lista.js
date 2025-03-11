// Erro Simples:
// Escreva um código que tente acessar uma variável não definida dentro de um try...catch e exiba uma mensagem personalizada.
try {
    a + 1;
} catch (erro){
    console.log("Variável não declarada", erro);
}
// Divisão Segura:
// Crie uma função que receba dois números e trate o 
// erro caso o denominador seja zero.
function divide(a,b){
    if (b === 0){
        throw new Error("Não é possível dividir por zero!")
    }
    return a/b;
}
try {
    console.log(divide(10,0));
} catch(erro) {
    console.log("Erro: ", erro.message);
}
// Validação de JSON:
// Escreva um código que tente fazer um JSON.parse() de uma 
// string inválida e capture o erro.
const valores = '{"a":10';
try {
    JSON.parse(valores);
} catch(erro){
    console.log("Não é um json válido", erro);
}
// Erro Personalizado:
// Crie uma classe de erro personalizada chamada ErroDeIdade e use-a para validar se a idade informada está entre 0 e 120.
class ErroDeIdade extends Error {
    constructor(message){
        super(message);
        this.name = "Idade inválida"
    }
}
try {
    var idade = 140;
    if (idade <0 || idade > 120){
        throw new ErroDeIdade("Idade Inválida");
    }
} catch(erro){
    console.log("", erro);
}
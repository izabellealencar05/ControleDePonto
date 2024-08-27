function submeter() {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    //console.log(cpf);
    console.log(validaCpf(cpf));

}

function validaCpf(cpf) {

    if(cpf == "") {
        alert("Campo CPF não pode ser vazio.");
        return false;
    }

    cpf = cpf.trim(); /*Retira os espaços*/

    //Verificar se é composto SOMENTE de números, "." ou "-"
    if(/[a-zA-Z]/.test(cpf)) {  /*Para procurar letras maiusculas e miniusculas no CPF*/
        alert("CPF não pode conter letras.");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {  /*Serve para validar número, '.' e  o '-' atravês do [\d.-] e para não validar os outros caracteres atraves do ^ +$*/
        alert("O CPF só pode ter números, '.' ou '-'");
        return false;
    }
    
    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido!");
        return false;
    }

    cpf = cpf.replace(/\./g, ''); /*Substitui o ponto por nada*/

    //console.log(typeof(cpf));

    // Interar 9 primeiros digitos, respeitando a seguinte regra:
    let soma = 0;

    // digito1 * 10 + digito2 * 9 + digito3 * 8 + ... + digito9 * 2 = resultado
    for(let i = 0; i < 9; i++) {
        //console.log(cpf.charAt(i-1));
        soma = soma + (cpf.charAt(i-1) * (10 - (i-1)));
    }
    console.log(soma);

    // Dividir resultado por 11
    // Recuperar o RESTO da divisão por 11
    // Calcular (11 - RESTO)
    let resto = soma % 11;
    
    if (resto < 2) {
        if (cpf.charAt(9) != 0) {
            alert("CPF inválido");
            return false;
        }
        // verificar se o primeiro dígito verificador 
        // (10º dígito do cpf) é igual a zero
        // 10º dígito do cpf é recuperado com cpf.charAt(9)
        return true;
    }

    let digitoVerificador1 = 11 - resto;

    if (digitoVerificador1 != cpf.charAt(9)) {
        alert("CPF inválido");
        return false;
    }
    // verificar se o primeiro dígito verificador
    // (10º dígito do cpf) é igual ao digitoVerificador1

    return true;

    // multiplicar cada digito do cpf atéo 1º digito verificador
    // por 11, 10, 9 ... 2
    // recuperar o resto da divisão da soma de todas as 
    // multiplicações por 11. Se o resto for menor que 2, o 2º
    // digito verificador deve ser zero. Caso contrário deve ser igual
    // ao resto
    // o segundo digito é o cpf.charAt(10)
    // o primeiro digito é o cpf.charAt(9)

}
function calcularMedia(notas){

    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    let media = soma / notas.length;

    return media;

}

    console.log("Média = " + calcularMedia([8, 8, 9]))
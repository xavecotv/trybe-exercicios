// 1- 

const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = "Não devo ser utilizada fora meu escopo (else)";
        console.log(elseScope);
    }
};

testingScope(true);


// 2- 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordem = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13

    return oddsAndEvens
}

const ordenado = ordem()

console.log(`Os números ${ordenado} se encontram ordenados de forma crescente!`);
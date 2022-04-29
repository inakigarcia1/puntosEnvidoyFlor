function valorEnvido (numeroCarta) {
    if (numeroCarta < 10) {
        return numeroCarta;
        }
    else {
        return 0;
    }
}
function mayorEnvido (valor1, palo1, valor2, palo2, valor3, palo3) {
    let envido1 = 0;
    let envido2 = 0;
    let envido3 = 0;
        if (palo1 === palo2) {
            envido1 = valorEnvido (valor1) + valorEnvido (valor2) + 20;
        }
        if (palo1 === palo3) {
            envido2 = valorEnvido (valor1) + valorEnvido (valor3) + 20;
        }
        if (palo2 === palo3) {
            envido3 = valorEnvido (valor2) + valorEnvido (valor3) + 20;
        }
        if (envido1 === 0 && envido2 === 0 && envido3 === 0) {
            if (valorEnvido (valor1) > valorEnvido (valor2) && (valorEnvido (valor1) > valorEnvido (valor3))) {
                return valorEnvido (valor1);
            }
            else if (valorEnvido (valor2) > valorEnvido (valor1) && (valorEnvido (valor2) > valorEnvido (valor3))) {
                return valorEnvido (valor2);
            }
            else {
                return valorEnvido (valor3);
            }
        }
        else if (envido1 >= envido2 && envido1 >= envido3) {
            return envido1;
        }
        else if (envido2 >= envido3 && envido2 >= envido1) {
            return envido2;
        }
        else if (envido3 >= envido1 && envido3 >= envido2) {
            return envido3;
        }
    }
function hayFlor (valor1, palo1, valor2, palo2, valor3, palo3) {
    return palo1 === palo2 && palo1 === palo3;
}

function puntosEnvidoyFlor (valor1, palo1, valor2, palo2, valor3, palo3) {
    if (hayFlor (valor1, palo1, valor2, palo2, valor3, palo3)) {
        return valorEnvido (valor1) + valorEnvido (valor2) + valorEnvido (valor3) + 20 + " de flor y " + mayorEnvido (valor1, palo1, valor2, palo2, valor3, palo3) + " de envido.";
    }
    else {
        return mayorEnvido (valor1, palo1, valor2, palo2, valor3, palo3) + " de envido.";
    }
}
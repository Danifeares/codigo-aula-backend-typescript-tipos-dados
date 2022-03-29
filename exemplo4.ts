function imprimir(nome: string): string {
    return `olá ${nome}`;
}

const imprimriMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
}

function imprimirUsuario(usuario: { nome: string, idade: number }): string {
    return `olá ${usuario.nome}`;
}

function imprimirArray(array: string[]): string {
    return array[0];
}

imprimirArray(['123', 'oujasgkof'])

imprimirUsuario({ nome: 'Guido', idade: 19 });

const somar = (a: number, b: number): number => {
    return a + b;
}

console.log(somar(1, 2));


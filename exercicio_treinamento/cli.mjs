import chalk from 'chalk';

import pegaArquivo from './index.js';
import validaURLs from './http-validacao.mjs';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    }else{
        console.log(chalk.yellow('Lista de Links'), resultado);
    }
}

processaTexto(caminho)
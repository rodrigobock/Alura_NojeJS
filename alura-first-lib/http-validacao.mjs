import fetch from "node-fetch";

function gerenciaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise.all(arrayURLs.map(async url =>{
            const res = await fetch(url)
            return res.status;
        }))
        return arrayStatus;
    }catch(erro){
        gerenciaErros(erro)
    }
}

function geraArrayURLs(arrayLinks){
    return arrayLinks?.map(objetoLink => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({ ...objeto, status: statusLinks[indice] }))
    return resultados;
}

export default validaURLs;
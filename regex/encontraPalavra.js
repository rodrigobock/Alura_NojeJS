const texto = 'Eu passo a vida recordando De tudo quanto aí deixei Cachoeiro, cachoeiro Vim pro rio de janeiro Pra voltar e não voltei! Mas te confesso na saudade As dores que arranjei pra mim Pois todo o pranto destas mágoas Ainda irei juntar nas águas Do teu itapemirim Meu pequeno cachoeiro Vivo só pensando em ti Ai que saudade dessas terras Entre as serras Doce terra onde eu nasci!';

function encontraPalavra(texto){
    const regex = /C?c?achoeiro*/gm;
    const palavraEncontrada = texto.match(regex)
    console.log(palavraEncontrada);
}

encontraPalavra(texto);
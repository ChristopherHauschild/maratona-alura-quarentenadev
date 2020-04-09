function ExecutarSorteio()
{
  aleatorio = Math.round(Math.random()*10)
  chute = prompt('Seu numero da sorte (1-10)')
  
  if( chute < 0 || chute > 10 ){chute = prompt('Informe um numero entre 1 e 10')}
  
  numerocerto = chute == aleatorio
  
  if(numerocerto){
    paragrafoResultado.style.backgroundColor = "yellow"
    paragrafoResultado.innerHTML = 'Você ganhou o sorteio!'
  }
  if(!numerocerto){
    paragrafoResultado.innerHTML = `Tente novamente. O número correto era ${aleatorio}`
  }
  
}


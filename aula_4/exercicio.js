distancia_km = prompt('Informe a distancia da corrida em km: ');
tempo_min = prompt('Informe a duração da corrida em minutos: ');

valor_da_corrida = 2 + distancia_km * 1.4 + tempo_min * 0.26;

document.write('Sua corrida custou: R$ ' + valor_da_corrida.toFixed(2));

nome = prompt("Nome completo");
tagh1.innerHTML = "Nome: " + nome;

nascimento = "05/02/00";
temcondicao = confirm("Tem condição pré-existente?");

if(temcondicao){estadodesaude = "Sim"};
if(temcondicao == false){estadodesaude = "Nao"};

lista.innerHTML =
  `<li> Data de Nascimento: ${nascimento} </li>
   <li> Idade: 23 anos </li> <li> Tem condição pré-existente: ${estadodesaude} </li>
   <li> Precisa de acompanhamento médico </li>`

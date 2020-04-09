quantLikes = 0;

function addLike(){
  quantLikes += 1;
  if(quantLikes == 1){
    botao.innerHTML = quantLikes + " Like"
  };
  if(quantLikes > 1) {
    botao.innerHTML =  quantLikes + " Likes"
  };
}



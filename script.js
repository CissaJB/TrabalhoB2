function logar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if(login == "admin" && senha == "123"){
    location.href= "home.html"
  }else{
    location.href= "erro.html"
   
  }
}

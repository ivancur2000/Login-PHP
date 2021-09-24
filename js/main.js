let form = document.getElementById("validateForm");

form.addEventListener('submit', function(event){
  event.preventDefault();

  let email = document.getElementById('email');
  let password = document.getElementById('password');

  let emailExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let passExpReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  let errorEmail = document.getElementById('errorEmail');
  let errorPass = document.getElementById('errorPass');
  let error = document.getElementById('error');

  

  if(!email.value.trim() || !password.value.trim() ){
    error.innerText = "No puedes dejar espacios en blanco PUTO";
  }else{
    error.innerText = "";
    if(emailExpReg.test(email.value)){
      errorEmail.innerText = "";
      if(passExpReg.test(password.value)){

        // aca va la conexion

        errorPass.innerText = "";
      }else{
        errorPass.innerText = "Tu contraseña no cumple el formato";
      }
    }else{
      errorEmail.innerText = "Tu email no cumple el formato";
    }
  }

});


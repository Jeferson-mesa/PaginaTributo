// Declaration of constants
const suscribeBtn = document.getElementById('button1');
const opacity = document.getElementById('opacity');
const suscribe = document.getElementById('suscribe')
const exit = document.getElementById('exit')

// EventListener to open and close the suscribe menu
suscribeBtn.addEventListener('click', (e) => {
    suscribe.style.display = 'block';
    opacity.style.display = 'block';
});

exit.addEventListener('click', (e) => {
  suscribe.style.display = 'none';
  opacity.style.display = 'none';
});

// Start to functions for create the validation form

//Create a function to validate Form
function validateForm(){
  //remove error message
  $('.alert').remove();

  //Declaration of Variables
  var name=$("#name").val();
  var email=$("#email").val();
  var subject=$("#subject").val();
  var message=$("#message").val();
  //Validating Name Field
  if(name=="" || name==null){
    changeColor('name');
    //show error message
    showError("Name is required");
    return false;
  }else{
    var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    if(!expresion.test(name)){
      //Show the message to the add a valid name
      changeColor('name');
      showError("Don't use special characters or numbers");
      return false;
    }
  }

  //Validating Email Field
  if(email=="" || email==null){
    changeColor('email');
    //show error message
    showError("Email is required");
    return false;
  }else{
    var expresion=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ@.1234567890 ]*$/;
    if(!expresion.test(email)){
      //Show the message to the add a valid name
      changeColor('email');
      showError("Please enter a valid email");
      return false;
    }
  }

  //Validating Subject Field
  if(subject=="" || subject==null){
    changeColor('subject');
    //show error message
    showError("Subject is required");
    return false;
  }else{
    var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    if(!expresion.test(subject)){
      //Show the message to the add a valid name
      changeColor('subject');
      showError("Don't use special characters");
      return false;
    }
  }

  //Validating Message Field
  if(message=="" || message==null){
    changeColor('message');
    //show error message
    showError("Message is required");
    return false;
  }else{
    var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    if(!expresion.test(message)){
      //Show the message to the add a valid name
      changeColor('message');
      showError("Don't use special characters");
      return false;
    }
  }

  $('form').submit();
  return true;

}

$('input').focus(function(){
  $('.alert').remove();
  defaultColor('name');
  defaultColor('email');
  defaultColor('subject');
  defaultColor('message');
});

$('textarea').focus(function(){
  $('.alert').remove();
  defaultColor('message');
});

//create a function to defautl to border input color
function defaultColor(date){
  $('#'+date).css({
    border: "2px solid #999"
  });
}
//Create a function to change border color of input field
function changeColor(date){
  $('#'+date).css({
    border: "2px solid #dd5144"
  });
}

//function to show error message

function showError(texto){
  $("#name").before('<div class="alert">Error: '+ texto +'</div>');
}
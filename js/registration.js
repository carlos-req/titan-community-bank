// everything from registration.html

const email = document.getElementById('emailRegister');
const pass = document.getElementById('passRegister');
const confirmPass = document.getElementById('confirmPassRegister');
const submitbtn= document.getElementById('submitRegister');
const form = document.getElementById('formRegister');
const tableRegister = document.querySelector('.registerTable');
let errors = [];

//validatingRegister
const validateRegister = () =>{
  //checking input for email
  if (email.value.length== 0){
    errors.push('1');
    let errEmailSpan = document.getElementById('err-email');
    if(errEmailSpan){
      errEmailSpan.innerHTML=`This field is required<br>`;
    }else{
      const errEmail = document.createElement('span');
      errEmail.id = 'err-email';
      errEmail.classList.add('err');
      errEmail.innerHTML=`This field is required<br>`;
      email.before(errEmail);
    };
  };
  //checking input for password 
  if (pass.value.length== 0){
    errors.push('1');
    let errPassSpan = document.getElementById('err-pass');
    if(errPassSpan){
      errPassSpan.innerHTML=`This field is required<br>`;
    }else{
      const errPass = document.createElement('span');
      errPass.id = 'err-pass';
      errPass.classList.add('err');
      errPass.innerHTML=`This field is required<br>`;
      pass.before(errPass);
    };
  };
  //checking input for confirmation passowrd 
  if (confirmPass.value.length ==0 ){
    errors.push('1');
    let errPass2Span = document.getElementById('err-pass2');
    if(errPass2Span){
      errPass2Span.innerHTML=`This field is required<br>`;
    }else{
      const errPass2 = document.createElement('span');
      errPass2.id = 'err-pass2';
      errPass2.classList.add('err');
      errPass2.innerHTML=`This field is required<br>`;
      confirmPass.before(errPass2);
    };
  };

  if(pass.value != confirmPass.value ){
    errors.push('1');
    let errPass2Span = document.getElementById('err-pass2');
    if(errPass2Span){
      errPass2Span.innerHTML=`Must Match Password Entered<br>`;
    }else{
      const errPass2 = document.createElement('span');
      errPass2.id = 'err-pass2';
      errPass2.classList.add('err');
      errPass2.innerHTML=`Must Match Password Entered<br>`;
      confirmPass.before(errPass2);
    };
  }

  if(errors.length > 0){
    tableRegister.style.display='block';
  } else{
    tableRegister.style.display='none';
  }
};


//listen for submit on register form
form.addEventListener('submit', (e)=>{
  errors =[];
  validateRegister();
  // checking for validation errors 
  if(errors.length > 0){
    e.preventDefault();
  }else{
    let emailStore= email.value;
    let passStore = pass.value;
    //object for user
    let user = {
      email: emailStore,
      password: passStore,
    };
    // adding user object to local storage
    let json = JSON.stringify(user);
    localStorage.setItem(emailStore,json);
  }
});




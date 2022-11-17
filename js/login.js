//everything from login.html
const emailLogin = document.getElementById('emailLogin');
const passLogin = document.getElementById('passLogin');
const submitLogin = document.getElementById('submitLogin');
const formLogin = document.querySelector('#formLogin');
let errors =[];

const validateLogin = ()=>{
  let user = localStorage.getItem(emailLogin.value);
  let data = JSON.parse(user);

  if(user == null){
    errors.push('1');
    let errUserSpan = document.getElementById('err-user');
    if(errUserSpan){
      errUserSpan.innerHTML=`Wrong Email<br>`;
    }else{
      const errUser = document.createElement('span');
      errUser.id = 'err-user';
      errUser.classList.add('err');
      errUser.innerHTML=`Wrong Email<br>`;
      emailLogin.before(errUser);
    };
  }else if(emailLogin.value == data.email && passLogin.value != data.password){
    errors.push('1');
    let errPassSpan = document.getElementById('err-pass');
    if(errPassSpan){
      errPassSpan.innerHTML=`Wrong Password Try again<br>`;
    }else{
      const errPass = document.createElement('span');
      errPass.id = 'err-pass';
      errPass.classList.add('err');
      errPass.innerHTML=`Wrong Password Try Again<br>`;
      passLogin.before(errPass);
    };
  };
};

//listen for submit on login form
formLogin.addEventListener('submit', (e)=>{
  errors =[];
  validateLogin();
  if(errors.length > 0){
    e.preventDefault();
  };
});

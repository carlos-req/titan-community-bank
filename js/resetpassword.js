const emailReset = document.getElementById('emailReset');
const passReset = document.getElementById('passReset');
const submitReset = document.getElementById('submitReset');
const formReset = document.querySelector('#formReset');
let errors =[];

const validateReset = () =>{
  let user = localStorage.getItem(emailReset.value);
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
      emailReset.before(errUser);
    };
  }else if (emailReset.value == data.email){
    data.password = passReset.value;
    let dataNew = JSON.stringify (data);
    localStorage.setItem(emailReset.value,dataNew);
  }
};



//listen for submit on login form
formReset.addEventListener('submit', (e)=>{
  errors =[];
  validateReset();
  if(errors.length > 0){
    e.preventDefault();
  };
});
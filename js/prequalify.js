// Getting all the Elements from HTML Page
const submitButton = document.getElementById('submit');
const email = document.getElementById('email');
const reemail = document.getElementById('re-email');
const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zipcode');
const grossIncome = document.getElementById('gincome');
const lastFour = document.getElementById('lastfour');
const acknowledge = document.getElementById('acknowledge');
const reset = document.getElementById('reset');
//array to iterate through incase not filled
let formValues = [email,reemail,firstName,lastName,city,state,zipCode,grossIncome,lastFour,]
let errors =[];


//function to validate everything
const validate = ()=>{
  //if emails don't match
  if (email.value != reemail.value){
    errors.push('1');
    var errEmailSpan= document.getElementById('err-email');
    if (errEmailSpan){
      errEmailSpan.innerHTML =`This entry MUST equal the first entry<br>
      `;
    }else{
      const errEmail = document.createElement('span');
      errEmail.id = 'err-email'
      errEmail.classList.add('err')
      errEmail.innerHTML= `
      This entry must equal the first entry<br>
      `;
      reemail.before(errEmail);
    }
  }
  //checks if something was entered in name value
  if (firstName.value.length == 0){
    errors.push('1');
    var errFnameSpan= document.getElementById('err-fname');
    if (errFnameSpan){
      errFnameSpan.innerHTML =`This field is required<br>
      `;
    }else{
      const errFname = document.createElement('span');
      errFname.id = 'err-fname'
      errFname.classList.add('err');
      errFname.innerHTML= `
      This field is required<br>
      `;
      firstName.before(errFname);
    }
  }
  //iterated through all the elements
  formValues.forEach(formValue =>{
    if (formValue.value.length == 0){
      errors.push('1');
    }
  })
  //making sure checkbox is checked  
  if(acknowledge.checked== false){
    errors.push('1');
  };
}
//alerting if qualify or don't qualify
const alertBox = ()=>{
  if(grossIncome.value >= 45000){
    alert('Congratulations, Your are prequalified for a loan. A representative will contact you soon')
  }else{
    alert("We're sorry, you do not qualify for a loan at this time")
  }
}
//awating submit
form.addEventListener('submit', (e)=>{
  errors =[];
  validate();
  if(errors.length > 0){
    e.preventDefault();
  }else{
    alertBox();
  }
});
//reset the form
reset.addEventListener('click', ()=>{
  formValues.forEach(formValue =>{
    formValue.value = "";
  })
})
// Access fields by name
const sur = document.form.surname;
const giv = document.form.firstname;
const dOB = document.form.dob;
const res = document.form.residence;
const occ = document.form.occupation;
const nat = document.form.nationality;
const gen = document.form.gender;
const cat = document.form.category;

//Error Message
const mError = (message)=>{
    let m_Err = document.getElementById('error');
    m_Err.innerText = message;
}

const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;

 

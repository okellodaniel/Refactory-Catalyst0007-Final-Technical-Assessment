// Access fields by name
const surN = document.covid_form.surname;
const givN = document.covid_form.first_name;
const dOB1 = document.covid_form.dob;
const res = document.covid_form.residence;
const occp= document.covid_form.occupation;
const nat1 = document.covid_form.nationality;
const gen1 = document.covid_form.gender;
const cat = document.covid_form.category;

//Regular expressions are rules or requirements for the given fields
const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;

//Error Messages
const surNErr = (message)=>{
    let sur_Err = document.getElementById('surerr');
    sur_Err.innerText = message;
}

const givNErr = (message)=>{
    let giv_Err = document.getElementById('fnamerr');
    giv_Err.innerText = message;
}

const dOB1Err = (message)=>{
    let dOB_Err = document.getElementById('daterr');
    dOB_Err.innerText = message;
}
const resErr = (message)=>{
    let res_Err = document.getElementById('reserr');
    res_Err.innerText = message;
}

const occpErr = (message)=>{
    let occ_Err = document.getElementById('occErr');
    occ_Err.innerText = message;
}

const nat1Err = (message)=>{
    let nat_Err = document.getElementById('naterr');
    nat_Err.innerText = message;
}

const gend1_Err = (message)=>{
    let ma_Err = document.getElementById('generr');
    ma_Err.innerText = message;
}

const catErr = (message)=>{
    let cat_Err = document.getElementById('caterr');
    cat_Err.innerText = message;
}

//Validation
var surName = () => {
   if (surN.value == '') {
    surNErr('Please enter surname');
    surN.style.border = '2px solid red';
    event.preventDefault();
    surN.focus();
    return false;
   } 

   if (surN.value.match (nameRegex)) {
       return true;
   }
   else {
    surN.style.border = '2px solid red';
    event.preventDefault();
    surN.focus();
    return false;
   }
};

var givenName = () => {
    if (givN.value == '') {
     givNErr('Please enter first name');
     givN.style.border = '2px solid red';
     event.preventDefault();
     givN.focus();
     return false;
    } 
 
    if (givN.value.match (nameRegex)) {
        return true;
    }
    else {
     givN.style.border = '2px solid red';
     event.preventDefault();
     givN.focus();
     return false;
    }
 };

 var dateOfBirth = () => {
    if (dOB1.value == '') {
     dOB1Err('Please select date of birth');
     dOB1.style.border = '2px solid red';
     event.preventDefault();
     dOB1.focus();
     return false;
    } 
 
 }

 var placeOfRes = () => {
    if (res.value == '') {
     resErr('Please enter residence');
     res.style.border = '2px solid red';
     event.preventDefault();
     res.focus();
     return false;
    } 
 
    if (res.value.match (nameRegex)) {
        return true;
    }
    else {
     res.style.border = '2px solid red';
     event.preventDefault();
     res.focus();
     return false;
    }
 }

 var occupation = () => {
    if (occp.value == '') {
     occpErr('Please enter occupation');
     occp.style.border = '2px solid red';
     event.preventDefault();
     occp.focus();
     return false;
    } 
 
    if (occp.value.match (nameRegex)) {
        return true;
    }
    else {
     occp.style.border = '2px solid red';
     event.preventDefault();
     occp.focus();
     return false;
    }
 }

 var nationality = () => {
    if (nat1.value == '') {
     nat1Err('Please enter nationality');
     nat1.style.border = '2px solid red';
     event.preventDefault();
     nat1.focus();
     return false;
    } 
 
    if (nat1.value.match (nameRegex)) {
        return true;
    }
    else {
     nat1.style.border = '2px solid red';
     event.preventDefault();
     nat1.focus();
     return false;
    }
 };

 var gender = () => {
    if (gen1.value === "default") {
     gen1Err('Please select gender');
    // gen1.style.border = '2px solid red';
    event.preventDefault();
    gen1.focus();
     return false;
    } 
 };

 var category = () => {
    if (cat.value == '--Select Category--') {
    //  catErr('Please select option');
     cat.style.border = '2px solid red';
     event.preventDefault();
     cat.focus();
     return true;
    } 
 
 };

 //Call back all the functions above as event handlers
 var validate = ()=>{
     if(surName());
     if(givenName());
     if(dateOfBirth());
     if(placeOfRes());
     if(nationality());
     if(gender());
     if(category());
     if(occupation());
 };

 document.addEventListener('submit',validate);
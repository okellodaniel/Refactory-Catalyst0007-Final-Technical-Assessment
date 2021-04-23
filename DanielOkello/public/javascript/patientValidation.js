// Declaring constants to Access the DOM

const surname = document.patientForm.surName;
const givenname = document.patientForm.givName;
const dateOfBirth = document.patientForm.dOB;
const res = document.patientForm.residence;
const occ = document.patientForm.occupation;
const nat = document.patientForm.nationality;
const gender = document.patientForm.gender;
const category = document.patientForm.category;

// Error messages

// Surname Error
const surErr = (message)=>{
    sur_err = document.getElementById('sur')
    sur_err.innerText = message
}

// Given Name Error
const givErr = (message)=>{
    giv_err = document.getElementById('giv');
    giv_err.innerText = message
}

// Date of Birth Error
const dOBErr = (message)=>{
    dob_err = document.getElementById('DOB');
    dob_err.innerText = message
}

// Residence Error
const residenceErr = (message)=>{
    res_err = document.getElementById('res');
    res_err.innerText = message
}

// Occupation Error
const occupationErr = (message)=>{
    occ_err = document.getElementById('occ');
    occ_err.innerText = message
}

// Nationality Error
const nationalityErr = (message)=>{
    nat_err = document.getElementById('nat');
    nat_err.innerText = message
}

// Gender Error
const genderErr = (message)=>{
    gen_err = document.getElementById('gen')
    gen_err.innerText = message
}

// Category Error
const categoryErr = (message)=>{
    cat_err = document.getElementById('catE');
    cat_err.innerText = message
}

// Add event listeners to every Constant declared representing the fields in the DOM 
surname.addeventListener('blur',surName_verify,true);
givenname.addeventListener('blur',givenName_verify,true);
dateOfBirth.addeventListener('blur',dateOfBirth_verify,true);
res.addeventListener('blur',residence_verify,true);
occ.addeventListener('blur',occupation_verify,true);
nat.addeventListener('blur',nationality_verify,true);
gender.addeventListener('blur',gender_verify,true);
category.addeventListener('blur',category_verify,true);

// Validation of the DOM fields
function validation (){
    if(surname.value == ''){
        surname.style.border = '2px solid red';
        surErr('This field is required');
        surname.focus();
        return false;
    }

    if(givenname.value == ''){
        givenname.style.border = '2px solid red';
        givErr('This field is required');
        givenname.focus();
        return false;
    }
    if(dateOfBirth.value == ''){
        dOBErr.style.border = '2px solid red';
        ('Select date of Birth');
        dateOfBirth.focus();
        return false;
    }
    if(res.value == ''){
        res.style.border = '2px solid red';
        residenceErr('This field is required');
        res.focus();
        return false;
    }
    if(occ.value == ''){
        occ.style.border = '2px solid red';
        occupationErr('This field is required');
        occ.focus();
        return false;
    }
    if(nat.value == ''){
        nat.style.border = '2px solid red';
        nationalityErr('This field is required');
        nat.focus();
        return false;
    }
    if(gender.value == ''){
        gender.style.border = '2px solid red';
        genderErr('This field is required');
        gender.focus();
        return false;
    }

    if(category.value == ''){
        category.style.border = '2px solid red';
        categoryErr('This field is required');
        category.focus();
        return false;
    }

};

// Regular Expressions for the Input fields

 // Regular Expressions

 const nameRegex = /([A-Za-z]){1,16}/;
 const residenceRegex = /([A-Za-z]){1,20}/;
 const moreRegex = /([A-Za-z]){5,50}/;



// Event Handlers of the Fields in the DOM

// SurName field Event Hnadler
function surName_verify (){
    if(surname.value != '' && surname.value.match(nameRegex)){
        sur_err('');
        sur.style.border = '2px solid green'
        return true;
    }
    else{
        surname.style.border = '2px solid red';
        surErr('This field is required');
        surname.focus();
        return false;;
    }
}

function givenName_verify (){
    if(givenname.value != '' && givenname.value.match(nameRegex)){
        givErr('');
        givenname.style.border = '2px solid green'
        return true;
    }
    else{
        givenname.style.border = '2px solid red';
        givErr('This field is required');
        givenname.focus();
        return false;
    }
}

function dateOfBirth_verify (){
    if(dateOfBirth.value != '' ){
        dOBErr('');
        dateOfBirth.style.border= '2px solid green';
        return true;
    }
    else{
        dOBErr.style.border = '2px solid red';
        ('Select date of Birth');
        dateOfBirth.focus();
        return false;
    }
}

function residence_verify (){
    if(res.value != '' && res.value.match(residenceRegex) ){
        residenceErr('')
        res.style.border = '2px solid green';
        return true;
    }
    else{
        res.style.border = '2px solid red';
        residenceErr('This field is required');
        res.focus();
        return false;
    }
}

function occupation_verify (){
    if(occ.value != '' && occ.value.match(moreRegex)){
        occupationErr('')
        occ.style.border = '2px solid green';
        return true;
    }
    else{
        occ.style.border = '2px solid red';
        occupationErr('This field is required');
        occ.focus();
        return false;
    }
}

function nationality_verify (){
    if(nat.value != '' && nat.value.match(moreRegex)){
        nationalityErr('');
        nat.style.border = '2px solid green'
        return true;
    }
    else{
        nat.style.border = '2px solid red';
        nationalityErr('This field is required');
        nat.focus();
        return false;
    }
}

function gender_verify (){
    if(gender.value != ''){
        genderErr('')
        gender.style.border = '2px solid green'
        return true;
    }
    else{
        gender.style.border = '2px solid red';
        genderErr('Please select a gender');
        gender.focus();
        return false;
    }
}

function category_verify (){
    if(category.value != '--Select Category--'){
        categoryErr('')
        category.style.border = '2px solid green'
        return true;
    }
    else{
        category.style.border = '2px solid red';
        categoryErr('This field is required');
        category.focus();
        return false;
    }
}




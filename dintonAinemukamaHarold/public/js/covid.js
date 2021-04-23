let validation = ()=>{
    var surname= document.registrationForm.surname
    var givenName= document.registrationForm.givenName
    var dob= document.registrationForm.dob
    var residence= document.registrationForm.residence
    var occupation= document.registrationForm.occupation
    var nationality= document.registrationForm.nationality
    var category= document.registrationForm.category

    const maxName=16
    const minName=1
    const nameRegex= /^[A-Z a-z]+$/;

    if(surname.value.length<=1 || surname.value.length>=16 || !surname.value.match(nameRegex)){
        
        surname.style.border="2px solid red"
        document.getElementById('error1').style.display ="block"
        return false
    }
    if(givenName.value.length<=1 || givenName.value.length>=16 || !givenName.value.match(nameRegex)){
        givenName.focus()
        givenName.style.border="2px solid red"
        document.getElementById('error2').style.display ="block"
        return false
    }
    if(dob.value == 0){
        dob.focus();
    dob.style.border = "2px solid red";
    document.getElementById('error3').style.display ="block"
    return false; 
    }
    //validating Age
    var today = new Date();
  var nowyear = today.getFullYear();
  var nowmonth = today.getMonth();
  var nowday = today.getDate();
  var b = document.registrationForm.dob.value;

  var birth = new Date(b);

  var birthyear = birth.getFullYear();
  var birthmonth = birth.getMonth();
  var birthday = birth.getDate();

  var age = nowyear - birthyear;
  var age_month = nowmonth - birthmonth;
  var age_day = nowday - birthday;
  
  //patient to be atleast 1 year old
  if ((age == 1 && age_month <= 0 && age_day <= 0) || age < 1) {
    dob.focus();
    dob.style.border = "2px solid red";
    document.getElementById('error8').style.display ="block"
    return false;
  }
  //patient to be below 150 years old
  if ((age == 150 && age_month <= 0 && age_day <= 0) || age > 150) {
    dob.focus();
    dob.style.border = "2px solid red";
    document.getElementById('error9').style.display ="block"
    return false;
  }
   
    if(residence.value.length<=1 || residence.value.length>=20 || !residence.value.match(nameRegex)){
        residence.focus()
        residence.style.border="2px solid red"
        document.getElementById('error4').style.display ="block"
        return false
    }
    if(occupation.value.length<=5 || occupation.value.length>=20 || !occupation.value.match(nameRegex)){
        occupation.focus()
        occupation.style.border="2px solid red"
        document.getElementById('error5').style.display ="block"
        return false
    }
    if(nationality.value.length<=5 || nationality.value.length>=20 || !nationality.value.match(nameRegex)){
        nationality.focus()
        nationality.style.border="2px solid red"
        document.getElementById('error6').style.display ="block"
        return false
    }
    if(category.value == "default"){
        category.focus()
        category.style.border="2px solid red"
        document.getElementById('error7').style.display ="block"
        return false
    }
    else{
        document.getElementById('success').style.display ="block"
        return true
    }
    

    

}

let focusFunction =()=>{
    document.getElementById("success").style.display = "none";
}


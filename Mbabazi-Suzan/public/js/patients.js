let Validation =(event)=>{
// Access fields by name
const sname = document.patientsform.surname;
const gname = document.patientsform.givenname;
const dob = document.patientsform.DoB;
const home = document.patientsform.residence;
const job = document.patientsform.occupation;
const origin = document.patientsform.nationality;
const sex = document.patientsform.gender;
const group = document.patientsform.category;


//Regular expressions for some of the given fields
const minName = /([A-Za-z]){1,16}/;

//validating surname
if (sname.value == "") {
    sname.focus();
    sname.style.border = "2px solid red";
    alert("Please enter your surname");
    return false;
  }
  if (sname.value.length < minName) {
    sname.focus();
    sname.style.border = "2px solid red";
    alert("Please enter your surname");
    return false;
  }

  //validation for given name
  if (gname.value == "") {
    gname.focus();
    gname.style.border = "2px solid red";
    alert("Please enter your given name");
    return false;
  }
  if (gname.value.length < minName) {
    gname.focus();
    gname.style.border = "2px solid red";
    alert("Please enter your given name");
    return false;
  }
  
//validation for date of birth.
  if (dob.value == "") {
  dob.focus();
  dob.style.border = "2px solid red";
  alert("Please enter correct date of birth.");
  return false;
  }

  if (sex.value == "") {
  sex.focus();
  sex.style.border = "2px solid red";
  alert("");
  return false;
  }

  if (home.value == "") {
  home.focus();
  home.style.border = "2px solid red";
  alert("This field is required.");
  return false;
  }

  if (job.value =="") {
  job.focus();
  job.style.border = "2px solid red";
  alert("This field is required");
  return false;
  }

  if(origin.value == ""){
    origin.focus();
    origin.style.border = "2px solid red";
    alert("This field is required");
    return false;
  }
  if(group.value == ""){
    group.focus();
    group.style.border = "2px solid red";
    alert("Select Patient Category.");
    return false;
  }
}

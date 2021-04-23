const sur = document.covidForm.surName;
const given= document.covidForm.givenName;
const  dob= document.covidForm.dob;
const res = document.covidForm.residence;
const occ = document.covidForm.occupation;
const nationality = document.covidForm.nationality;
const category= document.covidForm.category;



const sur1 = document
  .querySelector('.surName_info');
const given1 = document
    .querySelector('.givenName_info');
const dob1 = document
    .querySelector('.dob_info');
const res1 = document
  .querySelector('.residence_info');
const occ1 = document
  .querySelector('.occupation_info');
const nationality1 = document
  .querySelector('.nationality_info');
const category1 = document
  .querySelector('.category_info');
const alert1 = document.querySelector('.alert1_infom')


  
  const surnameFunction = () => {

   
    const max = 16;
    const letters = /^[a-zA-Z]*$/
    
    if (sur.value === '') {
    sur1.textContent = ' This field is required';
    sur.style.border = '2px solid red';
    sur.focus();
    event.preventDefault();
    } else {
   
    if(sur.value.length>max){
    sur.focus();
    sur1.textContent = ' Name can not be more than 16 characters';
    sur.style.border = '2px solid red'
    event.preventDefault();
    } else {
    if (!sur.value.match(letters)) {
    sur.focus();
    sur.style.border = '2px solid red';
    sur1.textContent = 'Should be alpha bet characters';
    event.preventDefault();
    return false;
    } 
    return true;
    } 
    return true;
    } 
    return true;
    };
    
    
    
    // /** Validating last name so that it can only be 2 characters and above, 25 characters and below,
    // start with capital letter and can not be left empty.
    
   
    
    const givenNameFunction = () => {
    
        const max = 16;
        const letters = /^[a-zA-Z]*$/
        
        if (given.value === '') {
        given1.textContent = ' This field is required';
        given.style.border = '2px solid red';
        given.focus();
        event.preventDefault();
        } else {
       
        if(given.value.length>max){
        given.focus();
        given1.textContent = ' Name can not be more than 16 characters';
        given.style.border = '2px solid red'
        event.preventDefault();
        } else {
        if (!given.value.match(letters)) {
        given.focus();
        given.style.border = '2px solid red';
        given1.textContent = 'Should be alpha bet characters';
        event.preventDefault();
        return false;
        } 
        return true;
        } 
        return true;
        } 
        return true;
        };
        
    
    
    // /** Validating NIN so that it can not be left empty and can only take in the correct format.*/
    const dateFunction = ()=>{
      
      const min = 23/04/2020
        
        if(dob .value === ''){
        dob .style.border= '2px solid red';
        dob1.textContent = ' Select date';
        dob.focus();
        event.preventDefault();
        }else{
        if(dob.value < min ){
        dob .style.border= '2px solid red';
        dob1.textContent = ' Select date';
        dob.focus();
        event.preventDefault();
        return false; 
        }
        
        return true;
        }
        return true;
       
        }
    
    
    // /** Validating age so that it can not be left empty and only allows 30 years and above.*/
    const residenceFunction = () => {
      const max = 20;
      const reg = /^[a-zA-Z]/
    
      if(res.value === ''){
        res.style.border = '2px solid red';
        res1.textContent = ' This field is required';
        res.focus();
        event.preventDefault();
      }else{
      if(res.value > max){
        res.focus();
        res.style.border = '2px solid red';
        res1.textContent = ' Can not be more than 20 alpha-bet letters.';
        event.preventDefault();
      }
      if(!res.value.match(reg)) {
        res.focus();
        res.style.border = '2px solid red';
        res1.textContent = ' Can be  20 alpha-bet letters.';
        event.preventDefault();
        return false;
        }
        return true;
        }
        return true;
      }
        
    
    
      const occupationFunction = () => {

        const min = 5;
        const max = 20;
        const letters = /^[a-zA-Z]*$/
        
        if (occ.value === '') {
        occ1.textContent = ' This field is required';
        occ.style.border = '2px solid red';
        occ.focus();
        event.preventDefault();
        }else {
        if (occ.value.length < min) {
          occ.focus();
          occ.style.border = '2px solid red';
          occ1.textContent = ' occupation can not be less than 5 characters!';
        event.preventDefault();
        }else{
        if(occ.value.length>max){
        occ1.textContent = ' can not be longer than 20 characters!';
        occ.focus();
        occ.style.border = '2px solid red'
        event.preventDefault();
        }else{
        if (!occ.value.match(letters)) {
          occ.focus();
          occ.style.border = '2px solid red';
          occ1.textContent = ' Can only be alpha bet characters';
          event.preventDefault();
        return false;
        } 
        return true;
        } 
        return true;
        } 
        return true;
        }
        }
        
        const nationalityFunction = () => {

          const min = 5;
          const max = 20;
          const letters = /^[a-zA-Z]*$/
          
          if (nationality.value === '') {
          nationality1.textContent = ' This field is required';
          nationality.style.border = '2px solid red';
          nationality.focus();
          event.preventDefault();
          }else {
          if (nationality.value.length < min) {
            nationality.focus();
            nationality.style.border = '2px solid red';
           nationality1.textContent = ' occupation can not be less than 5 characters!';
          event.preventDefault();
          }else{
          if(nationality.value.length>max){
         nationality1.textContent = ' can not be longer than 20 characters!';
         nationality.focus();
          nationality.style.border = '2px solid red'
          event.preventDefault();
          }else{
          if (!nationality.value.match(letters)) {
            nationality.focus();
            nationality.style.border = '2px solid red';
            nationality1.textContent = ' Can only be alpha bet characters';
            event.preventDefault();
          return false;
          } 
          return true;
          } 
          return true;
          } 
          return true;
          }
          }
    
    
   
    const categoryFunction = () => {
      if(category.value === ''){
       category.style.border = '2px solid red';
       category1.textContent = 'Select patient category'
        category.focus();
        event.preventDefault();
        return false;
      }else{
       
        return true;
        }
        
      return true;
    };
    
    
   
      
    
      const validation = () => {
      surnameFunction();
      givenNameFunction();
      dateFunction();
      residenceFunction();
      occupationFunction();
      nationalityFunction();
      categoryFunction();

    };
 
    document.covidForm.addEventListener('submit', validation); // Watches the validity of data filled in.


    
    
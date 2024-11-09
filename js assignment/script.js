
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const address = document.getElementById("address");
  
    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const ageError = document.getElementById("ageError");
    const genderError = document.getElementById("genderError");
    const addressError = document.getElementById("")
  
    
    if (name.value.length < 3 || name.value.length > 50) {
      nameError.textContent = "Name must be between 3 and 50 characters.";
      name.classList.add("invalid");
      return false;
    } else {
      nameError.textContent = "";
      name.classList.remove("invalid");
    }
  
    
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
      emailError.textContent = "Invalid email address.";
      email.classList.add("invalid");
      return false;
    } else {
      emailError.textContent = "";
      email.classList.remove("invalid");
    }
  
    
    if (phone.value.length < 10 || phone.value.length > 14) {
      phoneError.textContent = "Phone number must be between 10 and 14 digits.";
      phone.classList.add("invalid");
      return false;
    } else {
      phoneError.textContent = "";
      phone.classList.remove("invalid");
    }
  
   
    if (age.value < 18 || age.value > 120) {
      ageError.textContent = "Age must be between 18 and 120.";
      age.classList.add("invalid");
      return false;
    } else {
      ageError.textContent = "";
      age.classList.remove("invalid");
    }

  
    if (gender.value.length < 4 || gender.value.length > 15) {
      genderError.textContent = "Gender must be between 4 and 15 characters.";
      gender.classList.add("invalid");
      return false;
    } else {
      genderError.textContent = "";
      gender.classList.remove("invalid");
    }

    if(address.value.length<50){
      addressError.textContent = "Address must be less than 50 characters.";
      address.classList.add("invalid");
      return false;
    }else{
      addressError.textContent= "";
      address.classList.remove("invalid")
    }

    return true;
  }


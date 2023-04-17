// Form
const myForm = document.getElementById("MyForm");

// getting gnder value

const getSelectedGender = () => {
    const maleRadio = document.getElementById("maleRadio");
    const femaleRadio = document.getElementById("femaleRadio");
    const otherRadio = document.getElementById("otherRadio");
  
    var selectedGender = null;
  
    if (maleRadio.checked) {
      selectedGender = maleRadio.value;
    } else if (femaleRadio.checked) {
      selectedGender = femaleRadio.value;
    } else if (otherRadio.checked) {
      selectedGender = otherRadio.value;
    }

    return selectedGender;
}


//  getting intrests value

const getSelectedInterests = () => {
    var musicCheckbox = document.getElementById("musicCheckbox");
    var sportsCheckbox = document.getElementById("sportsCheckbox");
    var readingCheckbox = document.getElementById("readingCheckbox");
    
    var selectedInterests = [];
    
    if (musicCheckbox.checked) {
      selectedInterests.push(musicCheckbox.value);
    }
    
    if (sportsCheckbox.checked) {
      selectedInterests.push(sportsCheckbox.value);
    }
    
    if (readingCheckbox.checked) {
      selectedInterests.push(readingCheckbox.value);
    }
   
    return selectedInterests;

}

// submit event


myForm.addEventListener("submit", (event) => {
  

    event.preventDefault();

    const isValid = validateForm();

    if(isValid) {


      // getting value

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const dob = document.getElementById("dob").value;
      

    myForm.style.display="none"
    document.body.style.backgroundImage = "none";

    const enterName = document.createElement("div");
    enterName.id = "resultContainer";
    document.body.appendChild(enterName);

    const resultContainer = document.getElementById("resultContainer");


// display value after submitting

    const content = "<H1>Your form has been submitted!.</H1>" +
    "<P>Name: " + name + "</P>" +
    "<p>Email: " + email + "</p>" +
    "<p>Contact: " + contact + "</p>" +
    "<p>Date of Birth: " + dob + "</p>" +
    "<p>Gender: " + getSelectedGender() + "</p>" + 
    "<p>Intrests: " + getSelectedInterests() + "</p>";

    resultContainer.innerHTML = content;
    }


});


// form validation

const validateForm = () => {

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById("confirm-password").value;



  // Validate Name
  if (name.length < 3) {
    const nameError = document.getElementById('nameError');
    document.getElementById('name').placeholder = 'Name must be at least 3 characters long!';
    nameError.innerHTML = 'Name must be at least 3 characters long';
    nameError.style.display = 'block';
    nameError.style.transition ="opacity 5s ease-in-out;"

      setTimeout(function() {
        nameError.style.display = 'none';
      }, 5000);
  
    return false;
  }
  else{
    nameError.style.display = 'none';
  }


  // Validate Email
  function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(emailRegex);
  }

  if (!validateEmail(email)) {
    const emailError = document.getElementById("error_message_email")
    document.getElementById('email').placeholder = 'Please enter a valid email address!';
    emailError.innerHTML = "Please enter a valid email address!";
    emailError.style.display = 'block';
       
    setTimeout(function() {
      emailError.style.display = 'none';
    }, 5000);

    return false;
  }

  // Validate Contact
  function validateContact(contact) {
    const contactRegex = /^\d{10}$/;
    return contact.match(contactRegex);
  }

  if (!validateContact(contact)) {
    const contactError = document.getElementById("error_message_phone");
    document.getElementById('contact').placeholder = 'Please enter a valid contact number!';
    contactError.innerHTML = "Please enter a valid contact number!"
    contactError.style.display = 'block';
        
    setTimeout(function() {
      contactError.style.display = 'none';
    }, 5000);

    return false;
  }

  // password

  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return password.match(passwordRegex);
  }
  

  const errorElement = document.getElementById("error_message");
  const errorPsd = document.getElementById("error_message-confirmPsd");


  if (!validatePassword(password)) {
    errorElement.innerHTML = "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, and one digit.";
    errorElement.style.display = 'block';
        
    setTimeout(function() {
      errorElement.style.display = 'none';
    }, 5000);

     
    return false;
  } 

  if (password !== confirmPassword) {
    errorPsd.innerHTML = "Passwords do not match!";
    errorPsd.style.display = 'block';
         
    setTimeout(function() {
      errorPsd.style.display = 'none';
    }, 5000);

    return false;
  } else {

  errorElement.innerHTML = "";
  }

  

  // Validate Gender
  const errorGender = document.getElementById("error_message_gender")
  if (getSelectedGender() === null) {
       errorGender.innerHTML = "Please select your gender"
          
       setTimeout(function() {
        errorGender.style.display = 'none';
      }, 5000);

    return false;
  }

  // Validate Interests
  const errorInterests = document.getElementById("error_message_interests");
  if (getSelectedInterests().length === 0) {
      errorInterests.innerHTML = "Please select your Interests"

      setTimeout(function() {
        errorInterests.style.display = 'none';
      }, 5000);

    return false;
  }

return true;

}






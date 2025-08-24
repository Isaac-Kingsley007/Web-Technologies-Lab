document.getElementById('input-form').addEventListener("submit", (event) => {
    if (!inputValidation()) {
      event.preventDefault();
    }
  });
  
  function inputValidation() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ""; 
  
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      errorMessage.textContent = "Name is required.";
      return false;
    }

    if(!/^[A-Za-z]+$/.test(name)){
        errorMessage.textContent = "Only Alphabets Allowed in Name.";
        return false;
    }
  
    const age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 18) {
      errorMessage.textContent = "Age must be 18 or above.";
      return false;
    }
  
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
      errorMessage.textContent = "Enter a valid email address.";
      return false;
    }
  
    const phone = document.getElementById("phone-number").value.trim();
    if (!/^\d{10}$/.test(phone)) {
      errorMessage.textContent = "Phone number must be 10 digits.";
      return false;
    }
  
    const title = document.getElementById("project-title").value.trim();
    if (title.length < 3) {
      errorMessage.textContent = "Project title must be at least 3 characters.";
      return false;
    }
  
    const github = document.getElementById("github-repo-link").value.trim();
    if (!github.startsWith("https://github.com/")) {
      errorMessage.textContent = "GitHub repo link must start with https://github.com/";
      return false;
    }
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return false;
    }
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return false;
    }
  
    const fileInput = document.getElementById("project-output");
    if (fileInput.files.length === 0 || !fileInput.files[0].name.endsWith(".pdf")) {
      errorMessage.textContent = "Please upload a PDF file.";
      return false;
    }
  
    return true;
  }
  
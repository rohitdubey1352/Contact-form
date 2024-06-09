const submitBtn = document.getElementById("submit");
const form = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelectorAll(".error-message").forEach((error) => {
    error.innerHTML = "";
  });

  // Get form values
  const fname = document.getElementById("firstname").value.trim();
  const lname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("checkBox").checked;

  let valid = true;

  // Validate fields
  if (!fname) {
    document.getElementById("fnameError").innerHTML = "This field is required.";
    valid = false;
  }
  if (!lname) {
    document.getElementById("lnameError").innerHTML = "This field is required.";
    valid = false;
  }
  if (!email) {
    document.getElementById("emailError").innerHTML = "This field is required.";
    valid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    valid = false;
  }
  if (!queryType) {
    document.getElementById("queryTypeError").innerHTML =
      "This field is required.";
    valid = false;
  }
  if (!message) {
    document.getElementById("messageError").innerHTML =
      "This field is required.";
    valid = false;
  }
  if (!consent) {
    document.getElementById("consentError").innerHTML =
      "You must consent to being contacted.";
    valid = false;
  }

  if (valid) {
    successModal.style.display = "flex";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

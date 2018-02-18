function validatePassword() {
    let password1 = document.getElementById("password1").value;
    console.log("In console Using password " + password1 + "!");
    let password2 = document.getElementById("password2").value;
    console.log("In console Using password " + password2 + "!");

    console.log(password1);
    console.log(password2);
    console.log("In console Validating password!");

    if (password1 != password2) {
      alert("Passwords don't match!");
    } else if ((password1.length < 8) || (password2.length < 8)) {
      alert("Please input a password that is at least 8 characters long!");
    } else {
      alert("Validated!");
    }
}

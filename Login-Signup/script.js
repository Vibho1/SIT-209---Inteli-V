var cta = document.querySelector(".cta");
var signup = document.querySelector("#myDIV")
var logiin = document.querySelector("#lopin")
var check = 0;

function myFunction() {

    var loginPage = document.getElementById("lopin");
    var signUpPage = document.getElementById("myDIV");
    var footer = document.getElementById("kuchbhi");
    if (loginPage.style.display !== "none") {
        signUpPage.style.visibility = "visible";
        loginPage.style.display = "none";
        footer.style.display = "none";
    }
    else {

    }
}


function myFunction1() {

    var loginPage = document.getElementById("lopin");
    var signUpPage = document.getElementById("myDIV");
    var footer = document.getElementById("kuchbhi");
    if (signUpPage.style.display == "visible") {
        signUpPage.style.visibility = "none";
        loginPage.style.visibility = "visible";
        footer.style.display = "none";
    }
    else {

    }
}


cta.addEventListener('click', function (e) {
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if (check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})


// signup.addEventListener('click', function (e) {
//     var text1 = e.target.nextElementSibling;
//     var signupText = e.target.parentElement;
//     text1.classList.toggle('show-hide');
//     signupText.classList.toggle('expand');
//     if (check == 0) {
//         cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
//         check++;
//     }
//     else {
//         cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
//         check = 0;
//     }
// })


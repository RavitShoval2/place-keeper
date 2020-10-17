//Fetching the new Data from the localstorage
let newUserData = JSON.parse(window.localStorage.getItem('userData'));
let newBgColor = newUserData.bgColor;
let newFontColor = newUserData.fontColor;
let newEmail = newUserData.email;
let newDob = newUserData.dob;
let newAge = newUserData.age;
let newYourFuture = newUserData.future;


//Click Event on Submit and Update
document.getElementById("update").addEventListener("click", updateColors);

//Updating the Colors
function updateColors(){

    // Getting the values of the form
    let bgColor = document.getElementById("backgroundColor").value;
    let fontColor = document.getElementById("fontColor").value;
    let email = newEmail;
    let dob = newDob;
    let age = newAge;
    let future = newYourFuture;

    //Object userData
    const updatedUserData = {
        bgColor,
        fontColor,
        email,
        dob,
        age,
        future
    };

    //localStorage
    window.localStorage.setItem('userData', JSON.stringify(updatedUserData));  

    window.location.replace("index.html");
}

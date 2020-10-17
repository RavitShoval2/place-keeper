let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);
if (filename === "user-prefs.html"){
    //Fetching the new Data from the localstorage
    let newUserData = JSON.parse(window.localStorage.getItem('userData'));
    let newBgColor = newUserData.bgColor;
    let newFontColor = newUserData.fontColor;

    //Changing the Font Color
    document.getElementById("body").style.color = newFontColor;

    //Changing the Background Color
    document.getElementById("body").style.backgroundColor = newBgColor;


    document.getElementById("backgroundColor").setAttribute("value", newBgColor);
    document.getElementById("fontColor").setAttribute("value", newFontColor);
}else{
    //Changing the Font Color
    document.getElementById("body").style.color = newFontColor;

    //Changing the Background Color
    document.getElementById("body").style.backgroundColor = newBgColor;

    //Fetching the userData into the id(s)
document.getElementById("getEmail").innerText = newEmail;
document.getElementById("getAge").innerText = newAge;
document.getElementById("getDob").innerText = newDob;
document.getElementById("getBgColor").innerText = newBgColor;
document.getElementById("getFontColor").innerText = newFontColor;
document.getElementById("yourFuture").innerText = newYourFuture;
document.getElementById("backgroundColor").setAttribute("value", newBgColor);
document.getElementById("fontColor").setAttribute("value", newFontColor);
}
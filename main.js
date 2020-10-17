//Click Event on Submit and Update
document.getElementById("submit").addEventListener("click", formValidation);

//Form Validation
function formValidation(){

    let email = document.getElementById("email").value;
    
    //Checking If email is not empty and is valid
    if (email === ""){
        document.getElementById("errorText").innerText = "Email is required";
    }else{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            document.getElementById("errorText").innerText = "";
            storeData();
        }else{
            document.getElementById("errorText").innerText = "Email is Invalid";
        }
    }
}


//Storing Data
function storeData(){

    // Getting the values of the form
    let bgColor = document.getElementById("backgroundColor").value;
    let fontColor = document.getElementById("fontColor").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value;

    //YourFuture
    function random_item(yourFuture)
      {
        
      return yourFuture[Math.floor(Math.random()*yourFuture.length)];
          
      }

      const yourFuture = [
        "Paying off your creditors will become easy, as you increase your earning. Peak physical fitness will find outdoor sports enthusiasts go all out. Your assessment regarding a situation on the professional front will be bang on target and may bring you into the notice of higher ups. Coordinating a social event at home may take up much of your time. Other commitments may not allow you to devote full time to a social function. A whirlwind tour is on the cards that may leave you exhausted. Your plans to acquire an asset may need to be reviewed.",
        "Not investing in a scheme that seems lucrative at this point of time will save you from a future loss. At work, you will complete all pending issues, even if it takes a few extra hours. A health expert is likely to guide you in achieving total fitness. You will spare no efforts in maintaining your image in society by keeping in touch with everyone. Some complications on the family front may consume your time. A trip is in the offing, so pack your bags and enjoy. Real estate gives good returns.",
        "Those playing the stocks may get it right the first time. Regular medication will be important in getting rid of an ailment. It is best not to jump to conclusions in a situation at work without getting complete facts, as you may go way off the mark. You will be in a position to cater for the specific needs of a family elder. You may feel spiritually inclined and take steps to expel negative vibrations. A pilgrimage undertaken by some will prove spiritually satisfying. Good price for a property can be expected."
      ];
      let future = random_item(yourFuture);

    //Object userData
    const userData = {
        bgColor,
        fontColor,
        email,
        dob,
        age,
        future
    };

    //localStorage
    window.localStorage.setItem('userData', JSON.stringify(userData));  

    window.location.replace("index.html");
}

let userSignup = [];

addUser = () => {
    let userNameSurname = document.getElementById("userNameSurname").value;
    let userNumber = document.getElementById("userNumber").value;
    let userEmail = document.getElementById("userEmail").value;
    let userSubject = document.getElementById("userSubject").value;
    let userPassword = document.getElementById("userPassword").value;

    let userBoxEmail = document.getElementById("userBoxEmail").checked;
    console.log(userBoxEmail)


    userSignup.push({
        userNameSurname: userNameSurname,
        userNumber: userNumber,
        userEmail: userEmail,
        userSubject: userSubject,
        userPassword: userPassword

    });
    
    if(userBoxEmail == true){
        alert("Welcome " + userNameSurname + "! Thank you for your interest in " + userSubject + "! We will contact you via email provided: " + userEmail + ", or alternatively on the phone number: " + userNumber + ".")
    } else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + userNameSurname +"  If you want to sign up, you better CHECK that newsletter box! ")
    }
    document.getElementById("studentForm").reset();
}


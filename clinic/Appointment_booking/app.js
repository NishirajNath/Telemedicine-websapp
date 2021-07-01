
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC6N5hfDRmImigG7sK_CzAlv19Zdhtt2uU",
  authDomain: "main-f996f.firebaseapp.com",
  projectId: "main-f996f",
  storageBucket: "main-f996f.appspot.com",
  messagingSenderId: "466209057024",
  appId: "1:466209057024:web:bfa5fbfe6028c76ef72be5" 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      var uid = user.uid;
      alert("Active user "+email);
      console.log( uid );

    }else{
      alert("No Active user Found")
    }
  })

  

  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos/clinic/appointment");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let clinic = document.querySelector('#clinic option:checked').value;
    let name1 = document.querySelector(".name1").value;
    let email = document.querySelector(".email").value;
    let phone_num = document.querySelector(".phone_num").value;
    let aDate = document.querySelector(".aDate").value;
    let Address1 = document.querySelector(".Address1").value;
    let Address2 = document.querySelector(".Address2").value;
    let city = document.querySelector(".city").value;
    let pin = document.querySelector(".pin").value;
    let message = document.querySelector(".message").value;
    console.log(clinic, name1, email, phone_num, aDate, Address1, Address2, city, pin, message);
  
    saveContactInfo(clinic, name1, email, phone_num, aDate, Address1, Address2, city, pin, message);
  
    document.querySelector(".contact-form").reset();
    alert("your response have been submitted ");
  }
  
  // Save infos to Firebase
  function saveContactInfo(clinic, name1, email, phone_num, aDate, Address1, Address2, city, pin, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      clinic: clinic,
      name1: name1,
      email: email,
      phone_num: phone_num, 
      aDate: aDate, 
      Address1: Address1, 
      Address2: Address2, 
      city: city, 
      pin: pin,
      message: message,
    });
  }
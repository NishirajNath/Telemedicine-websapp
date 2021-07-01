
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxuPXAarmgQETh8qo3ixIZlX9gdNDr-oc",
  authDomain: "nurse-booking.firebaseapp.com",
  databaseURL: "https://nurse-booking-default-rtdb.firebaseio.com",
  projectId: "nurse-booking",
  storageBucket: "nurse-booking.appspot.com",
  messagingSenderId: "206603067515",
  appId: "1:206603067515:web:8c90a5416f58ed6f9882de"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".nursing-appointment-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let name = document.querySelector(".mob_num").value;
    let email = document.querySelector(".Address1").value;
    let email = document.querySelector(".Address2").value;
    let message = document.querySelector(".message").value;

    console.log(name, email, mob_num, Address1, Adress2, message);
  
    saveContactInfo(name, email, mob_num, Address1, Adress2, message);
  
    document.querySelector(".nursing-appointment-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, mob_num, Address1, Adress2, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Customer_name: name,
      Customer_email: email,
      Customer_mob_num: mob_num,
      Customer_Address1: Address1,
      Customer_Adress2: Adress2,
      Customer_message: message
    });
  }


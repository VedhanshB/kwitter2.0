
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAO_efjeAY3p_MC9KW0qd3NQ-dIlIyWKY",
  authDomain: "kwitter2-0-791d3.firebaseapp.com",
  databaseURL: "https://kwitter2-0-791d3-default-rtdb.firebaseio.com",
  projectId: "kwitter2-0-791d3",
  storageBucket: "kwitter2-0-791d3.appspot.com",
  messagingSenderId: "264443161318",
  appId: "1:264443161318:web:ad59894575576d7f20a927"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";


  getData();
}

function redirectToRoomName(name) {
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

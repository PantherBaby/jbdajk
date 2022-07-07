
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBSi99oCYLnOTGTdMl9UkESQecQjXK-hdE",
      authDomain: "tapchat-ac61e.firebaseapp.com",
      databaseURL: "https://tapchat-ac61e-default-rtdb.firebaseio.com",
      projectId: "tapchat-ac61e",
      storageBucket: "tapchat-ac61e.appspot.com",
      messagingSenderId: "823166370567",
      appId: "1:823166370567:web:4424c9e875319e2d2f3ba2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     function addRoom()
     { room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names); 
       row = "<div class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<?div><hr>"; 
       document.getElementById("output").innerHTML += row;
     
      });});}
getData();

function redirectToRoomName (name)
 { console.log(name);
       localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }

       Room_names = childKey;
      //Start code

      //End code
      
getData();

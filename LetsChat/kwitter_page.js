const firebaseConfig = {
      apiKey: "AIzaSyAI6U5Ty7tb0GHmvrjBigToAL-lplTv8Zw",
      authDomain: "letschat-25978.firebaseapp.com",
      databaseURL: "https://letschat-25978-default-rtdb.firebaseio.com",
      projectId: "letschat-25978",
      storageBucket: "letschat-25978.appspot.com",
      messagingSenderId: "216076744379",
      appId: "1:216076744379:web:ef0824f625f05f8b16db9e"
}
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("user_name");
   room_name= localStorage.getItem("room_name")

   function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

var firebaseConfig = {
    apiKey: "AIzaSyCddLuSZsdUe5VVKvmYtZ-EzieEVvryswo",
    authDomain: "acekaily.firebaseapp.com",
    databaseURL: "https://acekaily-default-rtdb.firebaseio.com",
    projectId: "acekaily",
    storageBucket: "acekaily.appspot.com",
    messagingSenderId: "607744011079",
    appId: "1:607744011079:web:03dbc422c3f14c95c3ba62",
    measurementId: "G-DLVEJBZG1M"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  function sub(){
    Notification.requestPermission().then(permission=>{
        if(permission == "granted"){
            messaging.getToken({vapidkey:"BJnUZ2miFkMacT4SkkktqRgjn4tYePg6ieD7OgjDi_m0zTsUpuZJ9JMpjQ8ExFntP93UGBFxVyBOmFBI_q-_VTE"}).then(currentToken=>{
                console.log(currentToken)
                let token = document.getElementById('token');
                token.innerHTML = currentToken
            })
        };
    })
  };
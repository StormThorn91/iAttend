function configFirebase(){
	var firebaseConfig = {
    	apiKey: "AIzaSyACCuOwFZCR_-pjj53puO5YmymKM3pdngs",
    	authDomain: "iattend-4b494.firebaseapp.com",
    	databaseURL: "https://iattend-4b494.firebaseio.com",
    	projectId: "iattend-4b494",
    	storageBucket: "iattend-4b494.appspot.com",
    	messagingSenderId: "37193368388",
    	appId: "1:37193368388:web:e2617c9ea6f6dfa0"
  };
  		// Initialize Firebase
  		firebase.initializeApp(firebaseConfig);
}

function getData(){
	var SID = document.getElementById('SID').value
	var pass = document.getElementById('pass').value
	var CYS = document.getElementById('CYS').value
	var fname = document.getElementById('FirstName').value
	var mname = document.getElementById('MiddleName').value
	var lname = document.getElementById('LastName').value
	writeToDB(SID, pass, CYS, fname, mname, lname)
	

}

function writeToDB(SID, pass, CYS, fname,mname, lname){
	var db = firebase.database()
	db.ref("Students").child(SID.toString()).set({
		firstname: fname,
		middlename: mname,
		lastname: lname,
		CYS: CYS,
		pass: pass
	})
}
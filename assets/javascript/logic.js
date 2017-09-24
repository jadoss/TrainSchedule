var config = {
    apiKey: "AIzaSyBc6f0DSFf_R4HGOYf80EcHiPYZMIW4Gf0",
    authDomain: "trainschedule-307af.firebaseapp.com",
    databaseURL: "https://trainschedule-307af.firebaseio.com",
    storageBucket: "trainschedule-307af.appspot.com",
    messagingSenderId: "442873241543"
  };

  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("addTrainBtn").on("click",function(){
  	var trainName = $("#trainNameInput").val().trim();
  	var destination = $("#destinationInput").val().trim();
  	var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("x");
  	var frequency = $("#frequencyInput").val().trim();

  	console.log(firstTrain);
  	return false; 
  })

  trainData.ref().on("child_added",function(snapshot){
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes,"m").format("hh:mm A");

    console.log(remainder);
    console.log(minutes);
    console.log()
  })
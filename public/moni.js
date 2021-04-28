function monitor() {
  var db = firebase.database();

  const dayas = document.getElementById('daya_s');
  const idwatt = document.getElementById('daya_p');
  const idvolt = document.getElementById('tegangan');
  const idarus = document.getElementById('arus');
  const idcospi = document.getElementById('cospi');
  const idkwh = document.getElementById('pemakaian');

  var daya_s = db.ref('PowerMetering/Home-Monitoring').child('Apparent-Power');
  var watt = db.ref('PowerMetering/Home-Monitoring').child('Real-Power');
  var volt = db.ref('PowerMetering/Home-Monitoring').child('Vrms');
  var arus = db.ref('PowerMetering/Home-Monitoring').child('Irms');
  var cospi = db.ref('PowerMetering/Home-Monitoring').child('Power-Factor');
  var kwh = db.ref('PowerMetering/Home-Monitoring').child('Power-Consumption');

  daya_s.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      dayas.innerHTML = childData;
      console.log("DYAS:" + childData)
    });
  });
  watt.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      idwatt.innerText = childData;
      console.log("WATT:" + childData)
    });
  });
  volt.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      idvolt.innerText = childData;
      console.log("Tegangan:" + childData)
    });
  });
  arus.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      idarus.innerText = childData;
      console.log("Arus:" + childData)
    });
  });
  cospi.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      idcospi.innerText = childData;
      console.log("Cospi:" + childData)
    });
  });
  kwh.limitToLast(1).on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      idkwh.innerText = childData;
      console.log("KwH:" + childData)
    });
  });
}
    window.onload = function () {
          monitor();  
    }
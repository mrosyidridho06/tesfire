function monitor() {
  var db = firebase.database().ref('PowerMetering/Home-Monitoring');

  var ambilkwh = firebase.database().ref('PowerMetering/Home-Monitoring/Power-Consumption');
  
  // inputharga.addEventListener('keyup', function(e){
  console.log(ambilkwh+'INI KWH');
  // })
    var inputharga = document.getElementById('harga').value;
    var kwh = ambilkwh
    alert(inputharga*kwh)
    console.log(kwh)
  db.on('value', function(snap1){
    if(snap1.exists()){
      var dayach = snap1.child('Real-Power').val();
      document.getElementById("daya_p").innerHTML = dayach;
      console.log(dayach);
      
    }
  });
  db.on('value', function(snap2){
    if(snap2.exists()){
      var dayaph = snap2.child('Apparent-Power').val();
      document.getElementById("daya_s").innerHTML = dayaph;
      console.log(dayaph);
      
    }
  });
  db.on('value', function(snap3){
    if(snap3.exists()){
      var tegang = snap3.child('Vrms').val();
      document.getElementById("tegangan").innerHTML = tegang;
      console.log(tegang);
      
    }
  });
  db.on('value', function(snap4){
    if(snap4.exists()){
      var arus = snap4.child('Irms').val();
      document.getElementById("arus").innerHTML = arus;
      console.log(arus);
      
    }
  });
  db.on('value', function(snap5){
    if(snap5.exists()){
      var cospi = snap5.child('Power-Factor').val();
      document.getElementById("cospi").innerHTML = cospi;
      console.log(cospi);
      
    }
  });
  db.on('value', function(snap6){
    if(snap6.exists()){
      var powercun = snap6.child('Apparent-Power').val();
      document.getElementById("pemakaian").innerHTML = powercun;
      console.log('PowerConsum' + powercun);
      
    }
  });
  db.on('value', function(snap7){
    if(snap7.exists()){
      var biaya = snap7.child('Cost').val();
      document.getElementById("biaya").innerHTML = biaya;
      console.log('biaya'+ biaya);
      
    }
  });
                    
}
    window.onload = function () {
          monitor();  
    }
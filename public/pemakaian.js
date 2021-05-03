function pemakaian() {
    
  // var namaAuth = firebase.auth().currentUser.email;
  // document.getElementById('namaUser').textContent = namaAuth

  // console.log(namaAuth)


    
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

    // var isi_tabel = document.querySelector('#myTable tbody')
    // daya_s.on('value', function (snap) {
    //   while(isi_tabel.hasChildNodes()){
    //     isi_tabel.removeChild(isi_tabel.firstChild)
    //   }
    //   var dayaS = snap.val();
    //   for(var i in dayaS){
    //     var row = isi_tabel.insertRow(-1);
    //     for(var j in dayaS[i]) {
    //       cell = row.insertCell(-1);
    //       cell.innerHtml = dayaS[i][j];
    //     }
    //   }
    // })
  
    daya_s.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#daya_s').append(content);
      }
      console.log(content)
    })
    watt.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#daya_p').append(content);
      }
      console.log(content)
    })
    volt.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#tegangan').append(content);
      }
      console.log(content)
    })
    arus.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#arus').append(content);
      }
      console.log(content)
    })
    cospi.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#cospi').append(content);
      }
      console.log(content)
    })
    kwh.on('value', function (snapshot) {
      if(snapshot.exists()){
        var content ='';
        snapshot.forEach(function (snapChild) {
          var Apparent = snapChild.val();
          content += '<tr>';
          content += '<td>' + Apparent + '</td>'; //column1
          content += '</tr>';
        });
        $('#pemakaian').append(content);
      }
      console.log(content)
    })
    // daya_s.on('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     var key = Object.keys(childData)[0];    //this will return 1st key.         
    //     console.log(childData[key].childData);
    //     $('#daya_s').append(childData);
    //     console.log("DYAS:" + childData)
    //     console.log(childKey)
    //   });
    // });
    // watt.limitToLast(1).once('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     idwatt.innerText = childData;
    //     console.log("WATT:" + childData)
    //   });
    // });
    // volt.limitToLast(1).once('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     idvolt.innerText = childData;
    //     console.log("Tegangan:" + childData)
    //   });
    // });
    // arus.limitToLast(1).once('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     idarus.innerText = childData;
    //     console.log("Arus:" + childData)
    //   });
    // });
    // cospi.limitToLast(1).once('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     idcospi.innerText = childData;
    //     console.log("Cospi:" + childData)
    //   });
    // });
    // kwh.limitToLast(1).once('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     idkwh.innerText = childData;
    //     console.log("KwH:" + childData)
    //   });
    // });
}
window.onload = function () {
    pemakaian();
}
            // tegangan.on("child_changed", function(snapshot) {
            //     var changedPost = snapshot.val();
            //     console.log("The updated post title is " + changedPost.tegangan);
            //   });
            //   var isi_tabel = document.getElementById('list_konten');

            //     function dataBerhasil(data) {

            //     var tampilan_tabel = '';
            //     var nomor = 1;
            //     data.forEach(function() {
            //         tampilan_tabel += '<tr>'+
            //                             '<td>'+nomor+'</td>'+
            //                             '<td>'.val().judul+'</td>'+
            //                             '<td>'+dayapp.val().dayapp+'</td>'+
            //                             '<td>'+konten.val().konten+'</td>'+
            //                             '<td>'+konten.val().konten+'</td>'+
            //                             '<td>'+konten.val().konten+'</td>'+
            //                             '<td>'+konten.val().konten+'</td>'+

            //                         '</tr>';
            //         nomor++;
            //     });
            //     isi_tabel.innerHTML = tampilan_tabel;
            //     }
            
        //     var tbel = firebase.database().ref('PowerMetering/Home-Monitoring');

        //     var reltime = document.getElementById("table-real-time").getElementsByTagName("list_konten")

        //     tbel.on("child_added", function(data, prevChildKey) {
        //     var newreltime = data.val();
        //     var row = reltime.insertRow(reltime.rows.length);
 
        //     var cell1 = row.insertCell(0);
        //     var cell2 = row.insertCell(1);
        //     var cell3 = row.insertCell(2);
        //     var cell4 = row.insertCell(3);
        //     var cell5 = row.insertCell(4);
        //     var cell6 = row.insertCell(5);
        //     var cell7 = row.insertCell(6);
               
        //     cell1.innerHTML = newreltime.Apperent-Power;
        //     cell2.innerHTML = newreltime.Real-Power;
        //     cell3.innerHTML = newreltime.Vrms;
        //     cell4.innerHTML = newreltime.Irms;
        //     cell5.innerHTML = newreltime.Power-Factor;
        //     cell6.innerHTML = newreltime.Power-Consumption;
        //     cell7.innerHTML = newreltime.Cost;

        // console.log("Adding "+dayasElement+", "+dayaptElement+", "+arusElement+" to table");
                              

                            
        //     });
        // });
  

  // Dayap.child(0).on("value", function(snapshot) {
  //     $('daya_p').val(snapshot.child('Real-Power').val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // Dayas.on("value", function(snapshot) {
  //     (snapshot.val(innerHTML.dayapp));
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // arus.once("value", function(snapshot) {
  //     snapshot.forEach(function(){
  //         document.querySelector('#isi_konten').DOMElement.innerHTML
  //     })
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // PowerConsum.on("value", function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // cospi.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });

  
  
  // tegangan.on("value", function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // tegangan.on("value", function(snapshot, prevChildKey) {
  //     var newPost = snapshot.val();
  //     console.log("Author: " + newPost.dayapp);
  //     console.log("Title: " + newPost.title);
  //     console.log("Previous Post ID: " + prevChildKey);
  //   });

  // dataHtml.innerHtml = tableBody;
  // console.log(dataHtml)
  // Dayas.limitToLast(1).on("value", function (snapshot) {
  //   Dayap.limitToLast(1).once("value", function (snapshot1) {
  //     arus.limitToLast(1).once("value", function (snapshot2) {
  //       cospi.limitToLast(1).once("value", function (snapshot3) {
  //         PowerConsum.limitToLast(1).once("value", function (snapshot4) {
  //           tegangan.limitToLast(1).once("value", function (snapshot5) {
  //             biaya.limitToLast(1).once("value", function (snapshot6) {
  //               snapshot.forEach(function (childSnapshot) {
  //                 console.log("RealPower: " + childSnapshot);
  //                   var dayasElement = childSnapshot.dayasElement();
  //                     dataHtml = childSnapshot.val();
                
                
  //                       snapshot1.forEach(function (childSnapshot1) {
  //                         console.log("RealPower: " + childSnapshot1);
  //                         // var dayapElement = childSnapshot1.dayapElement();
  //                         dataHtml = childSnapshot1.val();
                      
                        
  //                         snapshot2.forEach(function (childSnapshot2) {
  //                           console.log("RealPower: " + childSnapshot2);
  //                           // var arusElement = childSnapshot2.arusElement();
  //                           arusElement = childSnapshot2.val();
                          

                          
  //                           snapshot3.forEach(function (childSnapshot3) {
  //                             console.log("RealPower: " + childSnapshot3);
  //                             // var cospiElement = childSnapshot3.cospiElement();
  //                             cospiElement = childSnapshot3.val();
                            

                            
  //                             snapshot4.forEach(function (childSnapshot4) {
  //                               console.log("RealPower: " + childSnapshot4);
  //                               // var powerconsumElement = childSnapshot4.powerconsumElement();
  //                               powerconsumElement = childSnapshot4.val();
                            

                              
  //                               snapshot5.forEach(function (childSnapshot5) {
  //                                 console.log("RealPower: " + childSnapshot5);
  //                                 // var teganganElement = childSnapshot5.teganganElement();
  //                                 teganganElement = childSnapshot5.val();

                                
  //                                 snapshot6.forEach(function (childSnapshot6) {
  //                                   console.log("RealPower: " + childSnapshot6);
  //                                   // var biayaElement = childSnapshot6.biayaElement();
  //                                   biayaElement = childSnapshot6.val();
               
  //                              $(tableBody).append("<tr><td>" + dayasElement + "</td><td>" + dayapElement + "</td><td>" + arusElement + "</td><td>" + powerconsumElement + "</td><td>" + cospiElement + "</td><td>" + teganganElement + "</td><td>" + "</td><td>" + biayaElement + "</td></tr>");
  //                             // $(tableBody).append(dataHtml)
  //                             console.log(tableBody);
  //                           });
  //                         });
  //                       });
  //                     });
  //                   });
  //                 });
  //               });
  //             });
  //           });
  //         });
  //       });
  //     });
  //   });
  // })

//   // setInterval(function(){
//     Dayap.on("value", function (snap) {
//         if(snap.exists()){
//         var content = '';
//         snap.forEach(function (data) {
//           var val = data.val();
//           // var dayapp = data.dayapp();
    
//           content += 'tabel-real-time';
//           content += '<tr>' +val+ '</tr>';      
//           // document.getElementById("daya_s").innerHtml = snapshot.val().Dayap;
//           // content = '<td>' + val + '</td>';
//           // content = '<td>' + val + '</td>';
//           // content = '<td>' + val + '</td>';
//           // content = '<td>' + val + '</td>';
//           // content = '<td>' + val + '</td>';
//           content += 'table-real-time';
//           console.log("RealPower: " + val);
//           document.getElementById("daya_s").innerHTML = val;
//           // document.getElementById("daya_p").innerHTML = val;
//           // document.getElementById("arus").innerHTML = val;
//           // document.getElementById("biaya").innerHTML = val;
//           // document.getElementById("tengangan").innerHTML = val;
//           // console.log("RealPower: " + dayapp);
//         });
        
//         // $('#list_konten').append(content)
//       }
//       });
      
  // Dayas.on('value', function(snap){
  //   var Dayasss = snap.val();
  //   dataHtml = document.getElementById('daya_s').innerHtml
  //   console.log(Dayasss);
  // });
  // arus.on('value', function(snap){
  //   var arusss = snap.val();
  //   dataHtml = document.getElementById('arus').innerHtml
  //   console.log(arusss);
  // });
  // PowerConsum.on('value', function(snap){
  //   var pc = snap.val();
  //   dataHtml = document.getElementById('pemakaian').innerHtml
  //   console.log(pc);
  // });
  // tegangan.on('value', function(snap){
  //   var tg = snap.val();
  //   dataHtml = document.getElementById('tegangan').innerHtml
  //   console.log(tg);
  // });
  // cospi.on('value', function(snap){
  //   var cos = snap.val();
  //   document.getElementById('cospi').innerHtml = cospi
  //   console.log(cos);
  // });
  // biaya.on('value', function(snap){
  //   var bi = snap.val();
  //   document.getElementById('biaya').innerHtml = bi
  //   console.log(bi);
    
  //   dataHtml = '<tr>' +
  //                 '<td>'+snap.val().bi+'</td>'+
  //             '</tr>';
  // });

  
  
  // // setInterval(function(){
  // Dayap.on("value", function (snap) {
  //   if(snap.exists()){
  //   var content = '';
  //   snap.forEach(function (data) {
  //     var val = data.val();
  //     // var dayapp = data.dayapp();

  //     content += 'tabel-real-time';
  //     content += '<tr>' +val+ '</tr>';      
  //     // document.getElementById("daya_s").innerHtml = snapshot.val().Dayap;
  //     // content = '<td>' + val + '</td>';
  //     // content = '<td>' + val + '</td>';
  //     // content = '<td>' + val + '</td>';
  //     // content = '<td>' + val + '</td>';
  //     // content = '<td>' + val + '</td>';
  //     content += 'table-real-time';
  //     console.log("RealPower: " + val);
  //     document.getElementById("daya_s").innerHTML = val;
  //     // document.getElementById("daya_p").innerHTML = val;
  //     // document.getElementById("arus").innerHTML = val;
  //     // document.getElementById("biaya").innerHTML = val;
  //     // document.getElementById("tengangan").innerHTML = val;
  //     // console.log("RealPower: " + dayapp);
  //   });
    
  //   // $('#list_konten').append(content)
  // }
  // });
  // var dayasElement = document.getElementById('daya_s'); 
  // var arusElement = document.getElementById('arus'); 
  // var powerconsumElement = document.getElementById('pemakaian'); 
  // var cospiElement = document.getElementById('cospi'); 
  // var teganganElement = document.getElementById('tegangan'); 
  // var biayaElement = document.getElementById('biaya'); 

  
 
  // var tableBody = document.getElementById('table-real-time');
  // var dataHtml = '';
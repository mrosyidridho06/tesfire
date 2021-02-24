function rumah(){
    var ref = firebase.database().ref();
        var red = firebase.database().ref('PowerMetering/Home-Automation/Relay1');
        var SW2 = firebase.database().ref('PowerMetering/Home-Automation/Relay2');
        var SW3 = firebase.database().ref('PowerMetering/Home-Automation/Relay3');
        var SW4 = firebase.database().ref('PowerMetering/Home-Automation/Relay4');
        var SW5 = firebase.database().ref('PowerMetering/Home-Automation/Relay5');
        var SW6 = firebase.database().ref('PowerMetering/Home-Automation/Relay6');
        var SW7 = firebase.database().ref('PowerMetering/Home-Automation/Relay7');
        var SW8 = firebase.database().ref('PowerMetering/Home-Automation/Relay8');

        var red_check = document.getElementById("switch1");
        var Switch2 = document.getElementById("switch2");
        var Switch3 = document.getElementById("switch3");
        var Switch4 = document.getElementById("switch4");
        var Switch5 = document.getElementById("switch5");
        var Switch6 = document.getElementById("switch6");
        var Switch7 = document.getElementById("switch7");
        var Switch8 = document.getElementById("switch8");

        red_check.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("RED checked");
              red.set("ON");
            }else{
            red.set("OFF");
            }
        });
        Switch2.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW2 checked");
            SW2.set("ON");
            }else{
            SW2.set("OFF");
            }
        });
        Switch3.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW3 checked");
            SW3.set("ON");
            }else{
            SW3.set("OFF");
            }
        });
        Switch4.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW4 checked");
            SW4.set("ON");
            }else{
            SW4.set("OFF");
            }
        });
        Switch5.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW5 checked");
            SW5.set("ON");
            }else{
            SW5.set("OFF");
            }
        });
        Switch6.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW6 checked");
            SW6.set("ON");
            }else{
            SW6.set("OFF");
            }
        });
        Switch7.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW7 checked");
            SW7.set("ON");
            }else{
            SW7.set("OFF");
            }
        });
        Switch8.addEventListener('change', function(event) {
            if(event.target.checked){
            console.log("SW8 checked");
            SW8.set("ON");
            }else{
            SW8.set("OFF");
            }
        });
    }
    window.onload = function() {
        rumah();
    };
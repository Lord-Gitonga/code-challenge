// Challenge 2 : Speed Detector.

function calculateDemeritPoints () {
    let speed = parseInt(document.getElementById("speed").value);
    let demeritPoints = Math.floor((speed-70)/5);
    if(speed<70){
         output = `OK`;
    } else if(demeritPoints>12){
             output = `License suspended`;
        } else {
             output = `demerit points: ` + demeritPoints;

        }
        document.getElementById("output").textContent =`demerit Points : ${output}`;
    }

 // The Math.floor built in method comes in handy when we got a decimal input like in our case.

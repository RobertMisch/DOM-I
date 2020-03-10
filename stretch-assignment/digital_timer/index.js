/*<div class="digit" id="secondTens">-</div>
      <div class="digit" id="secondOnes">-</div>
      <div class="digit" id="colon">:</div>
      <div class="digit" id="msHundreds">-</div>
      <div class="digit" id="msTens">-</div> 
    
      document.querySelector('.cta-text button').textContent
*/

let clockMSecondsCount = 0;
let clockTenMSecondsCount = 0;
let clockSecondsCount = 0;
let clockTenSecondsCount = 0;

// const myClock = function(){
//     let myClockTimer = setInterval(clock, 10);
//     document.querySelector('.start').style.backgroundColor = 'grey'
//     document.querySelector('.start').removeEventListener("click", function(){});


//     function clock(){
//         //clock logic
//         clockMSecondsCount++
//         // console.log(clockMSecondsCount);
//         if(clockMSecondsCount === 10){
//             clockMSecondsCount = 0;
//             clockTenMSecondsCount++
//         }
//         if(clockTenMSecondsCount === 10){
//             clockTenMSecondsCount = 0;
//             clockSecondsCount++
//         }
//         if(clockSecondsCount === 10){
//             clockSecondsCount = 0;
//             clockTenSecondsCount++
//             document.querySelector('.digits').style.color = 'red';
//             clearInterval(myClockTimer);
//             // runClock=false;
//         }
//         //display
//         document.querySelector('#msTens').textContent= clockMSecondsCount;
//         document.querySelector('#msHundreds').textContent= clockTenMSecondsCount;
//         document.querySelector('#secondOnes').textContent= clockSecondsCount;
//         document.querySelector('#secondTens').textContent= clockTenSecondsCount;
//         //colon blips
//         if(clockSecondsCount % 2 === 1){
//         document.querySelector('#colon').style.visibility= 'hidden';
//         }
//         if(clockSecondsCount % 2 === 0){
//             document.querySelector('#colon').style.visibility= 'visible';
//         }
//     }    
// }

document.querySelector('.start').addEventListener("click", function(){
    let myClockTimer = setInterval(clock, 10);
    document.querySelector('.start').style.backgroundColor = 'grey'
    document.querySelector('.start').removeEventListener();


    function clock(){
        //clock logic
        clockMSecondsCount++
        // console.log(clockMSecondsCount);
        if(clockMSecondsCount === 10){
            clockMSecondsCount = 0;
            clockTenMSecondsCount++
        }
        if(clockTenMSecondsCount === 10){
            clockTenMSecondsCount = 0;
            clockSecondsCount++
        }
        if(clockSecondsCount === 10){
            clockSecondsCount = 0;
            clockTenSecondsCount++
            document.querySelector('.digits').style.color = 'red';
            clearInterval(myClockTimer);
            // runClock=false;
        }
        //display
        document.querySelector('#msTens').textContent= clockMSecondsCount;
        document.querySelector('#msHundreds').textContent= clockTenMSecondsCount;
        document.querySelector('#secondOnes').textContent= clockSecondsCount;
        document.querySelector('#secondTens').textContent= clockTenSecondsCount;
        //colon blips
        if(clockSecondsCount % 2 === 1){
        document.querySelector('#colon').style.visibility= 'hidden';
        }
        if(clockSecondsCount % 2 === 0){
            document.querySelector('#colon').style.visibility= 'visible';
        }
    }    
})


// document.querySelector('.start').addEventListener("click", function myClock(){
//     // runClock=true;
//     // setInterval(clock, 10);
//     document.querySelector('.start').style.backgroundColor = 'grey'
// })


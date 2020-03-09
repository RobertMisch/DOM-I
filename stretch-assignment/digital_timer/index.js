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
let myClock = setInterval(clock, 10);
function clock(){
    document.querySelector('#msTens').textContent= //clockMSecondsCount
    clockMSecondsCount++
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
    }
    if(clockTenSecondsCount === 10){
        clearInterval()
    }
    //colon blips
    if(clockSecondsCount % 2 === 0){
        document.querySelector('#colon').style.visibility= 'hidden';
    }
    if(clockSecondsCount % 2 === 1){
        document.querySelector('#colon').style.visibility= 'visible';
    }
    
}


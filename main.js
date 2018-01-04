const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const todayDate = new Date();
    
    const seconds = todayDate.getSeconds();
    const secondsDegree = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = todayDate.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;
    
    const hours = todayDate.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    minsHand.style.transform = `rotate(${hoursDegree}deg)`;
    
}


setInterval(setDate, 1000);
setDate();


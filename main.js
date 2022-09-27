const tag=parameter=>document.querySelector(parameter);
const time=tag('#time');
const btnStart=tag('.start');
const btnRestart=tag('.restart');
const hourglass=tag('.hourglass');
const displayTime=tag('.display_time');

btnStart.addEventListener('click', ()=>time.value>0?(timer(time.value),btnStart.style.visibility="hidden"):alert('Enter a value greater than zero'));

btnRestart.addEventListener('click', refresh);

function refresh(){
    location.reload();
}

function timer(period){
    if(period===0){
        displayTime.innerHTML='Finished'
        hourglass.src="./images/hourglass_empty.jpg";
        
    }else{
        displayTime.innerHTML=period
        setTimeout(timer,1000,period-1);
    }
}
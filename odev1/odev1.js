const name = prompt('Adınızı giriniz:');
document.querySelector('#name').innerHTML = name;


function time(){
  let day;
  const today = new Date();
  switch (today.getDay()) {
    case 1:
      day = 'Pazartesi';
      break;
    case 2:
      day = 'Salı';
      break;
    case 3:
      day = 'Çarşamba';
      break;
    case 4:
      day = 'Perşembe';
      break;
    case 5:
      day = 'Cuma';
      break;
    case 6:
      day = 'Cumartesi';
      break;
    case 7:
      day = 'Pazar';
      break;
  }

  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();

  const addZero = (givenTime) =>{
    if(givenTime < 10){
        givenTime = '0' + givenTime;
    }
    return givenTime
  }

  document.querySelector('#clock').innerHTML = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + day;

  

};

setInterval(time, 1000);

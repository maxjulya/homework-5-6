for_count.innerHTML="00:00:00:00";  //выводим циферблат счетчика
start.addEventListener("click", start_click);   // вешаем на кнопку start обработчик, start_click - функция
stp.addEventListener("click", stp_click);  //  вешаем на кнопку stp обработчик, stp_click - функция


var count = 0, timerId, go = 0;

function start_click() {
  start.removeAttribute('value');  //Удаляем атрибут value у выбранного элемента
  start.setAttribute('value', 'Pause');  // устанавливаем новый атрибут
  if (go == 0){
  timerId = setInterval(function() {  // если go==0 запускаем функцию
    count++;          // увеличиваем count на еденицу (10)
    var msec = count%100; 
    var sec = Math.floor(count/100)%60;  // Округляем вниз 
    if (  sec<10) {sec = "0" + sec;};    // 
    var min = Math.floor(count/6000)%60;
    if (  min<10) {min = "0" + min;};
    var hours = Math.floor(count/36000)%24;
    if (  hours<10) {hours = "0" + hours;};
    var str = hours + ":" + min + ":" + sec + ":" + msec;  
    for_count.innerHTML = str;    //добавляем в циферблат при работе счетчика
  }, 10)
    go = 1;
  } else {
  clearInterval(timerId);  //иначе останавливаем выполнение функции timerId
  go = 0;
  start.removeAttribute('value');  //Удаляем атрибут value у выбранного элемента  
  start.setAttribute('value', 'Start');  // устанавливаем новый атрибут
}
}


function stp_click(){
  clearInterval(timerId);  //остановка исполнение 
  go = 0;  
  count = 00;
  for_count.innerHTML= "00:00:00:00";   // выводим
}

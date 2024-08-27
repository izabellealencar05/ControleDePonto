const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");

diaSemana.textContent = getWeekDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

function getWeekDay(){  
    const date = new Date();
    let days = ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    return days[date.getDay()];
}

function getCurrentHour(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function getCurrentDate(){
    const date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

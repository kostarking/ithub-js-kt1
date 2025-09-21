/**
 * В программе объявлены две переменные — temp и weather.
 * Объявите переменную activity и присвойте ей значение по
 * следующему правилу: если значение переменной temp больше
 * либо равно 25 a переменная weather имеет значение "clear",
 * тогда значение переменной activity должно быть "golf"; если
 * значение переменной temp от 10 до 24 включительно или weather
 * имеет значение "cloudy", тогда значение переменной activity
 * должно быть "bowling"; в ином случае значение переменной
 * activity должно быть "hiking".  
 *
 * Пример значений переменных: 
 * let temp = 25 
 * let weather = "clear"  
 *
 * Пример результата: 
 * "golf"
 */

const temp = +prompt('Температура')
const weather = prompt('Погода (clear/cloudy)')

// TODO добавить проверки валидности данных

if (!Number.isFinite(temp))
{
    throw new Error('температура введена некоректно')
}
if(weather !=="clear" && weather !== "cloudy")

if (temp>= 25 && weather === "clear"){
    result = "golf";
}
else if (temp>= 10 && weather === "clear"){
    result = "bowling";
}
else {
    result = "hiking"
}

// TODO добавить проверки погоды и температуры, обновить result

console.log(result)

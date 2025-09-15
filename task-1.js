/**
 * В программе объявлены две переменные — price и range.
 * Переменная range может принимать одно из трех строковых
 * значений — month/day/week. Переменная price хранит в себе
 * числовое значение. Необходимо написать программу, которая
 * формирует строку с использованием данных переменных по
 * следующему шаблону:
 * <значение price> Р в <эквивалент значения range на русском языке>
 *
 * Пример значений переменных:
 * let price = 10000
 * let range = "day"
 *
 * Пример результата:
 * 10000 Р в день
 *
 */

const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month,day,week)')

// TODO добавить проверки валидности данных
if (!Number.isFinite(price)){
    throw new Error('доход введен некоректно')
}

if(range !=="month" && range !== "day" && range !== "week")
{
    throw new Error('промежуток введен некоректно');  
}

const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"
})

// TODO добавить преобразование range в переведенный аналог
if (range==="day"){
    formattedRange = 'день'
} else if (range === "month"){
    formattedRange = 'месяц'
} else if (range === "week"){
    formattedRange = 'неделя'
}

const result = `${formattedPrice} в ${formattedRange}`
console.log(result)

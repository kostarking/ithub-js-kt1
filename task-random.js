/*
 ** Запросить у пользователя границы,
 ** в которых требуется найти рандомное
 ** целое число и вывести результат.
*/

const minNumber = +prompt('Минимальная граница')
const maxNumber = Number(prompt('Максимальная граница'))
const result = Math.round(Math.random() * (maxNumber - minNumber)) + minNumber

// TODO: после условных конструкций проверять NaN и то что минимум < максимума

// console.log('Случайное число в диапазоне [', minNumber, maxNumber, '] : ', result)

// const outputString = 'Случайное число в диапазоне [' + String(minNumber) + ' ' + String(maxNumber) + '] : ' + String(result)
const outputString = `Случайное число в диапазоне [${minNumber} ${maxNumber}]: ${result}`
console.log(outputString)

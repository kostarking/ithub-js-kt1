/**
 * Задана переменная word со строковым значением.
 * Создайте переменную result с условием: если из
 * длины переменной word вычисляется квадратный корень
 * (без дробной части) - переменная result должна
 * содержать ответ 1, в противном случае - 0
 *
 * Пример:
 * let word = 'меню'
 * Результат: 1
 */

const word = prompt('Ваше слово')
const wordlenght = word.wordlenght
const result = 0
 const sqrt = Math.floor(Math.sqrt(wordlenght));
 if(sqrt*sqrt === wordlenght)
{
  result = 1;
}
 
 
 console.log(result)
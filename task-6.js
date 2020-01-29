let input;
const numbers = [];
let total = 0;

while(true) {
    let input = prompt('Введите число');
    if (input === null){
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);

    if(notANumber) {
        alert('Было введено не число');
        continue;
    }
     numbers.push(input);
}
for (const number of numbers) {
  total += number;
}
    console.log(`Общая сумма чисел равна ${total}`);
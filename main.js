'use strict';

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = '10';

for (let i = 11; i <= 20; i++) {
    str = str + ', ' + i;
}

console.log(str);

// 2. Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++)  {

    console.log (`sqrt ${i} * ${i} = ${i * i}`);

}

// 3. Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++)  {

    console.log(`${i} * 7 = ${i * 7}`);

}

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sum4 = 0

for (let i = 1; i <= 15; i++)  {

    sum4 = sum4 + i;

}

console.log (sum4);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let product = 1;

for (let i = 15; i <= 35; i++)  {

    product = product * i;

}

console.log (product);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum6 = 0

for (let i = 1; i <= 500; i++)  {
    
    sum6 = sum6 + i;

}

console.log (sum6 / 500);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum7 = 0;

for (let i = 30; i <= 80; i++)  {
   
    if (i % 2 === 0) {
        sum7 = sum7 + i;
    }   

}

console.log (sum7);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++)  {
   
    if (i % 3 === 0) {
        console.log(i);     
    }

}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let n = prompt('Add the number');
let k = 0;
let sum11 = 0;

console.log('Ви ввели число ' + n);

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        console.log(i); 

// 10. Визначити кількість його парних дільників.
        
        if (i % 2 === 0) {
            k = k + 1;

// 11. Знайти суму його парних дільників.

            sum11 = sum11 + i;
        }
    }  
    
}

console.log('Кількість його парних дільників ' + k);

console.log('Сума його парних дільників ' + sum11);



// 12. Надрукувати повну таблицю множення від 1 до 10.

for ( let i = 1; i <= 10; i++)  {

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }

}













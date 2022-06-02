let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const res = (arr, renge) => {
// Результирующий массив
    let ress = [];
// Функция, которая меняет null в массиве (левый на 0, правый на Infinity)
    function repl(array) {
        if(array[0] === null){
            array[0] = 0;
        }
        if (array[1] === null){
            array[1] = Infinity;
        }
        return array;
    };
// Меняем null в requiredRange
    repl(renge);
// Для каждого курса в массыве
    arr.map((cours) => {
        // Меняем null
        repl(cours.prices);
        // Проверяем, пересекаются ли массивы и добавляем название курса в результат
        // если конец requiredRange больше или равен началу cours.prices и начало requiredRange меньше конца cours.prices
        // для того, чтобы избежать попадания курсов, дешевле запроса
        if(renge[1] >= cours.prices[0] && renge[0] <= cours.prices[1]){
            ress.push(cours.name)
        }
    })
    // Возвращяем результат
    return ress;
}

console.log(res(courses, requiredRange1))
console.log(res(courses, requiredRange2))
console.log(res(courses, requiredRange3))



// Объявляем глобальную переменную для хранения золота
let gold = 100

createBuilding('Tower', 30) // Строим башню, золота хватает
createBuilding('Blacksmith', 140) // Строить кузницу, золота не хватает

// // Попытка построить башню
// let buildingName = 'Tower'
// let costGold = 30

// // проверяем, хватает ли нам золота для строительства
// if (gold >= costGold) {
//     // вычитаем золото
//     gold -= costGold
//     console.log(`${buildingName}: work complete!`);
// } else {
//     console.log(`${buildingName}: not enough resources!`);
// }

// // Попытка построить кузницу
// buildingName = 'Blacksmith'
// costGold = 140

// if (gold >= costGold) {
//     gold -= costGold
//     console.log(`${buildingName}: work complete!`)
// } else {
//     console.log(`${buildingName}: not enough resources!`)
// }

function createBuilding(buildingName, costGold) {
    const hasEnoughGold = gold >= costGold
    if (hasEnoughGold) {
        gold -= costGold
        console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
    }
}

// Функция для увеличения ресурсов
function increaseResource(currentAmount, increment = 10) {
    return currentAmount + increment
}

gold = increaseResource(gold)
console.log(`New amount of gold: ${gold}`)
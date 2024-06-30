///lesson6

const array = [1, 3, 4, 6, 2, 5, 7];

//принимает два аргумента 1-сам массив(называем как хочем) 2 индекс 
function removeElement(thisArr, indexArr){
    //indexArr 2 это сколько будет удалено индексов
    thisArr.splice(indexArr,2)
}

//с какого индекса начнеться удаление
removeElement(array,2)
console.log(array)


//elemArr это каждый элемент массива 
const mapArr = array.map((elemArr) =>{
    return {
        //здесь видоизменяем 
        infoNumber: `${elemArr}`
    }
})
console.log(mapArr)

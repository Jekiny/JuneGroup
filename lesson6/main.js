///lesson6

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(thisArr, indexArr){
    thisArr.splice(indexArr,2)
}
removeElement(array,2)
console.log(array)

const mapArr = array.map((elemArr) =>{
    return {
        infoNumber: `${elemArr}`
    }
})
console.log(mapArr)

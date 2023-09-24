// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    // n > number of cities
    // c > array having index of space cities
    // return max distance to nearest space station
    // need to go right and left from each index to the space station except terminal values

    let cityArray = []
    let distArray = []
    for(let i=0; i < c.length; i++)
        cityArray[c[i]] = 's'

    for(let i=0; i < n; i++)
    {
        
    }

    return cityArray

}

let n = 5
let c = [0,4]

console.log(flatlandSpaceStations(n,c), Math.floor(n/2))


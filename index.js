// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
    );
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(query.toLowerCase())
    );
}

function matchName(driverObjects, query) {
    return driverObjects.filter(driver =>
        driver.name.toLowerCase() === query.toLowerCase()
    );
}

// 
const drivers = ['Muhammad', 'Rayan', 'Evan'];
const driverObjects = [
    { name: 'Muhammad', hometown: 'New York' },
    { name: 'Rayan', hometown: 'Los Angeles' },
    { name: 'Evan', hometown: 'Chicago' }
   
];

console.log(findMatching(drivers, 'Muhammad'));
console.log(fuzzyMatch(drivers, 'R'));
console.log(matchName(driverObjects, 'Evan')); 

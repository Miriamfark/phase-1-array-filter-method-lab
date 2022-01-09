const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    console.log("drivers", drivers)
    console.log("name", name)
    return drivers.filter((driver)=> {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letters) {
 const matchingNames = drivers.filter(driver=> driver.startsWith(letters))
 return matchingNames
}

function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver =>driver.name===name)
    return matchingDrivers
}
const findTheOldest = function(people) {
    return people.reduce((geezer, person) => {
        let geezerAge;
        let newPersonAge;
        if (geezer.yearOfDeath === undefined) {
            geezerAge = new Date().getFullYear() - geezer.yearOfBirth;
        } else {
            geezerAge = geezer.yearOfDeath - geezer.yearOfBirth;
        }
        
        if (person.yearOfDeath === undefined) {
            newPersonAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
            newPersonAge = person.yearOfDeath - person.yearOfBirth;
        }

        return geezerAge > newPersonAge ? geezer : person;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

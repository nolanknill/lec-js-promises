// How often getContestants will fail by default
const failureRateOutOf100 = 20;

const contestants = [
    {
        "id": 1,
        "name": "Jaida Essence Hall",
        "hometown": "Milwaukee, Wisconsin",
        "country": "USA",
        "age": 34,
        "originalSeason": "Season 12",
        "image": "/assets/images/jaida-essence-hall.jpeg"
    },
    {
        "id": 2,
        "name": "Shea Couleé",
        "hometown": "Chicago, Illinois",
        "country": "USA",
        "age": 32,
        "originalSeason": "Season 9",
        "image": "/assets/images/shea-coulee.jpeg"
    },
    {
        "id": 3,
        "name": "The Vivienne",
        "hometown": "Liverpool",
        "country": "UK",
        "age": 29,
        "originalSeason": "UK Series 1",
        "image": "/assets/images/the-vivienne.jpeg"
    },
    {
        "id": 4,
        "name": "Monét X Change",
        "hometown": "New York City, New York",
        "country": "USA",
        "age": 31,
        "originalSeason": "Season 10",
        "image": "/assets/images/monet-x-change.jpeg"
    },
    {
        "id": 5,
        "name": "Yvie Oddly",
        "hometown": "Denver, Colorado",
        "country": "USA",
        "age": 28,
        "originalSeason": "Season 11",
        "image": "/assets/images/yvie-oddly.jpeg"
    },
    {
        "id": 6,
        "name": "Priyanka",
        "hometown": "Toronto, Ontario",
        "country": "Canada",
        "age": 31,
        "originalSeason": "Canada Season 1",
        "image": "/assets/images/priyanka.jpeg"
    }
]

/**
 * Generates a random number between a 
 * specified range
 * 
 * @param Number min
 * @param Number max 
 * @return Number Randomly generated number
 */
 function generateRandomNumber(min, max) {
    let range = max - min;

    return Math.round(Math.random() * range) + min;
}

/**
 * Randomly resolves or rejects half the time
 * 
 * @returns Promise
 */
function asyncPromiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            1 === generateRandomNumber(1, 2) ? // 50% chance of failure
                resolve("Successfully resolved promise") 
                : 
                reject({error:"The thing I promised you ran into an error!"});
        }, generateRandomNumber(1000, 1500));
    });
}

/**
 * Gets contestants array, accounting for failureRateOutOf100
 * Promise rejects failureRateOutOf100 / 100 times
 * Promise resolves the remaining % chance
 * 
 * @returns Promise contains contestants object
 */
function getContestants() {
    if (generateRandomNumber(1, 100) > failureRateOutOf100) { // chance of failure = failureRateOutOf100
        return getContestantsResolved();
    } else {
        return getContestantsRejected();
    }
}

/**
 * Attempts to find contestant information by id
 * Promise resolves if the contestant is found
 * Promise rejects if the contestant is not found
 * 
 * @param Number id 
 * @returns Promise
 */
function getContestant(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundContestant = contestants.find(contestant => contestant.id === id );
            (foundContestant) ? resolve(foundContestant) : reject({ error: "Unable to find contestant with that id"});
        }, generateRandomNumber(1000, 1500));
    });
}

/**
 * Returns contestants randomly between 100 - 1500 seconds
 * 
 * @returns Promise - resolves with contestant objects
 */
function getContestantsResolved() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(contestants);
        }, generateRandomNumber(1000, 1500));
    });
}

/**
 * Returns an always-rejected promise (for testing purposes)
 * 
 * @returns Promise 
 */
function getContestantsRejected() {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject({ error: "Unable to process request" });
        }, generateRandomNumber(1000, 1500));
    });
}




function getContestantsFirstHalf() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([contestants[0], contestants[1], contestants[2]]);
        }, generateRandomNumber(1000, 1500));
    });
}

function getContestantsSecondHalf() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([contestants[3], contestants[4], contestants[5]]);
        }, generateRandomNumber(1000, 1500));
    });
}
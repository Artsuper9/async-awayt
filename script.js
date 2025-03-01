//  async - face ca functia sa returneze un promise



// const get_someting = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("something");
//         }, 2000);
//     });
// };

// get_someting().then((data) => { 
//     console.log(data);
// });



// const get_someting = async () => {
//     return "Zdarova";
// };
// get_someting().then((data) => {
//     console.log(data);
// });


// away - face ca functia asinhrona sa astepte un promise

// const get_someting = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("something");
//         }, 1000);
//     });
// };

// const get_promise = async () => {
//     const getSomething = await get_someting();
//     console.log(getSomething);
// }
// get_promise();


// walkCat()
//     .then((data) => {
//         console.log(data); return cleanKitchen()
//             .then((data) => {
//                 console.log(data); return cleanBathroom()
//                     .then((data) => { console.log(data); console.log("Tasks are done"); })
//             })
//     })
//     .catch((err) => { console.error(err) })


//     const toDoList = async () => {
//         try {
//             const walKingCat = await walkCat();
//             console.log(walKingCat);
//             const cleaningKitchen = await cleanKitchen();
//             console.log(cleaningKitchen);
//             const cleaningBathroom = await cleanBathroom();
//             console.log(cleaningBathroom);
//         } catch (err) {
//             console.error(err);
        
//     }
// }
// toDoList();





// const walkCat = (cb) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const catWalked = true
//             if (catWalked) {
//                 resolve("You walked the cat")

//             } else {
//                 reject("You havent walked the cat")
//             }

//         }, 1500)
//     })

// }


// const cleanKitchen = (cb) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenClean = true
//             if (kitchenClean) {
//                 resolve("You cleaned the kitchen")

//             } else {
//                 reject("You didnt clean the kitchen")
//             }
//         }, 2500)
//     })
// }


// const cleanBathroom = (cb) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bathroomCleaned = true
//             if (bathroomCleaned) {
//                 resolve("You cleaned the bathroom")

//             } else {
//                 reject("You didnt clean the bathroom")
//             }
//         }, 500)
//     })
// }



// const walkCat = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve("You walked the cat")
//         }, 1500)
//     })

// }


// const cleanKitchen = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve("You cleaned the kitchen")
//         }, 2500)
//     })
// }


// const cleanBathroom = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve("You cleaned the bathroom")
//         }, 500)
//     })
// }



// Promise.all([walkCat(), cleanKitchen(), cleanBathroom()]).then(result => {
//     console.log(result)
// })


// const promise1 = new Promise((resolve, reject) => {
//         console.log("Promise 1 gata");
//         resolve("Promise 1")
// })

// const promise2 = new Promise((resolve, reject) => {
//         console.log("Promise 2 gata");
//         resolve("Promise 2")
// })

// const promise3 = new Promise((resolve, reject) => {
//         console.log("Promise 3 gata");
//         resolve("Promise 3")
// })

// Promise.all([promise1, promise2, promise3]).then(result => {
//     console.log(result)
// })








// Basic Exercises:
// 1.	Simple Async Function: Create a function getMessage that returns a promise after a 1-second delay, and use await to get the message and log it.

const getMessage = async () => {
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                resolve("Hello World");
            }, 1000);
        });
}


// 2.	Basic Await: Write an async function that calls another async function, waits for it to finish, and then returns the result.
const getSomething = async () => {
        const message = await getMessage();
        return message;
           
}


// 3.	Return a Value: Create an async function that fetches data from an API (use a mock API like jsonplaceholder) and returns the fetched data.
const fetchdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await responsse.json();
        return data;
}



// 4.	Handle Promise Rejection: Write an async function that handles a rejected promise using try/catch.
const getSsomething = async () => {
        try {
                const message = await getMessage();
                return message;
        } catch (err) {
                console.log(err);
        }
}




// 5.	Await Multiple Promises: Use await to resolve two promises simultaneously and log the results.
const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Promise 1");
        }, 1000);
        
});




// 6.	Sequential Execution: Write an async function that calls two promises in sequence, ensuring that the second promise doesn't execute until the first one resolves.
const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Promise 1");
        }, 1000);
        
});




// 7.	Return a Delayed Value: Create an async function that resolves a value after a delay (using setTimeout inside a Promise), and await it.
const getDelayedValue = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Delayed Value");
                }, 1000);
        });
}




// 8.	Handle Multiple Async Calls: Create a function that fetches user data and posts data from a mock API using await for each request, and return the combined data.



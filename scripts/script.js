/*
let promise = asyncPromiseFunc();
promise.then(
  (result) => {
    console.log(result);
  },
  (errorObject) => {
    console.error(errorObject.error);
  }
)
*/


let promise = getContestants();

promise.then(
  (result) => {
    console.log(result);

    // 1. Remove the loading under contestants
    document.querySelector(".contestants__loading").remove();
    
    // 2. Render the contestants to the DOM
    const listEl = document.querySelector(".contestants__list");
    result.forEach((contestant) => {
      // 3. Add contestant name as an li inside the ".contestants__list" element
      const itemEl = document.createElement("li");
      itemEl.innerText = contestant.name;
      listEl.appendChild(itemEl);
    })

  },
  (errorObject) => {
    // Error message as string in errorObject.error
    console.error(errorObject.error);
    
    document.querySelector(".contestants__loading").remove();
    const contestantsEl = document.querySelector(".contestants");

    const errorEl = document.createElement("p");
    errorEl.innerText = errorObject.error + ". Try refreshing the page";

    contestantsEl.appendChild(errorEl);

  }
)
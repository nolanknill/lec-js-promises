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

    return result[0];
  }
).then(
  (firstContestant) => {
    return getContestant(firstContestant.id);
  }
).then(
  (result) => {
    console.log("Result of getContestant");
    console.log(result);

    // TODO: Add our contestant information to the DOM
  }
).catch(
  (errorObject) => {
    if (errorObject.error) {
      // Error message as string in errorObject.error
      console.error(errorObject.error);
      
      document.querySelector(".contestants__loading").remove();
      const contestantsEl = document.querySelector(".contestants");

      const errorEl = document.createElement("p");
      errorEl.innerText = errorObject.error + ". Try refreshing the page";

      contestantsEl.appendChild(errorEl);
    }
  }
)


Promise.all([
  getContestantsFirstHalf(),
  getContestantsSecondHalf()
])
.then(values => {
  console.log("Promise.all values: ", values);
}).catch(error => {
  console.log("Promise.all error: ", error);
})


// NOTE: USE CASE: when we want to make a search field and get results from a database based on the search input. To prevent too many results from going to the database we delay / slow down the user input. We do this by sending the request to the database only when the user slows down his typing for a certain 'delay amount' or completely stops typing. Until he is typing, the request is never sent thus preventing clogging up of requests.

// NOTE: watch video for doubts: https://www.youtube.com/watch?v=AkHvKi2s9hw&t=41s

const inputElement = document.querySelector(".input");

// NOTE: #1 make debounce function
const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    // NOTE: #1.2 clear the timeout
    clearTimeout(timerId);

    // NOTE: #1.1 add delay
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const callApi = (e) => {
  // console.log("calling API", e.target.value);
  console.log(e.target.value);
};

// NOTE: #2 store debounce function and call the callApi function with a delay
const debouncedCallApi = debounce(callApi, 1000);

// console.log(debouncedCallApi);

// NOTE: #3 add the debouncedCallApi to the event listener
inputElement.addEventListener("input", debouncedCallApi);

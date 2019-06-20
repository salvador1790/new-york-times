var submitIsClicked = false; 
function clickHandler(){ 
  submitIsClicked = true;
  console.log(submitIsClicked);
}

var element = document.getElementById('submitSearch'); // grab a reference to your element
element.addEventListener('click', clickHandler); // associate

var clearIsClicked = false; 
function clickClearHandler(){ 
  clearIsClicked = true;
  console.log(clearIsClicked);
}

var element = document.getElementById('clearSearch'); // grab a reference to your element
element.addEventListener('click', clickClearHandler); // associate
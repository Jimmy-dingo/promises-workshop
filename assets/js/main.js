const textInputElement = document.querySelector('[name="text"]'); // input containing text to be displayed
const delayInputElement = document.querySelector('[name="delay"]'); // input containing delay time in seconds between text displays
const startRenderButtonElement = document.querySelector('.start-render'); // button for triggering rendering
const renderTypeRadioElements = document.querySelectorAll('[name="render-type"]'); // array of radio inputs containing the type of render
const paragraphListElement = document.querySelector('.paragraph-list'); // container for appending rendered paragraphs

// First thing to do is to listen for startRenderButtonElement clicks
// And call renderByType when a click event occurs, with the required parameters
startRenderButtonElement.addEventListener('click', startRender);

// NOTE: feel free to add more utility functions
function startRender() {
  console.log('Clicked')
  const text = textInputElement.value;
  const delay = delayInputElement.value;
  let renderType = null;

    for(let i = 0; i < renderTypeRadioElements.length; i++){
      const radioButton = renderTypeRadioElements[i]
       if(radioButton.checked === true){
         renderType = radioButton.value
       }
    }
    renderByType(renderType, text, delay)
  };


/**
 * Contains logic for running different render types based on the renderType param
 * Can be ran using callbacks, for loop or promises
 * @param renderType Type of rendering to be executed, can be callBacks, forLoop or promises
 * @param delay Delay time in seconds
 * 
 */
function renderByType(renderType, text, delay) {
  // code goes here
  console.log('renderByTipe is executed', renderType, text, delay)
  if(renderType === 'callBacks'){
    runCallBacks(text, delay)
  }
  else if(renderType === 'forLoop'){
    runForLoop(text, delay)
  }
  else if(renderType === 'promises'){
    runPromises(text, delay)
  }
};

/**
 * Creates a new paragraph and appends it to the paragraphListElement
 * @param text Content of the paragragh
 */
function addParagraph(text) {
  // code goes here
  const paraGraph = document.createElement('p');
  paragraphListElement.appendChild(paraGraph).innerText = `${text}`;
}

/**
 * Displays 4 paragraphs at a delay interval using callbacks
 * @param text Text to be shown at delay interval
 * @param delay Delay time in seconds
 */
function runCallBacks(text, delay) {
  // code goes here
  console.log('Callbacks is called', text, delay);
  //Callback hell chaining
  //First call
  setTimeout(function(){
    addParagraph(text)

    //Second call
    setTimeout(function(){
      addParagraph(text)

      //Third call
      setTimeout(function(){
        addParagraph(text)

        //Fourth call
        setTimeout(function(){
          addParagraph(text);          
        }, delay)

      }, delay)
      
    }, delay)

  }, delay)

}

/**
 * Displays 4 paragraphs at a delay interval using for loop
 * @param text Text to be shown at delay interval
 * @param delay Delay time in seconds
 */
function runForLoop(text, delay) {
  // code goes here
  console.log('runForLoop is called', text, delay);
  for (let i = 0; i < 4; i++) {
    setTimeout(addParagraph, delay * i, text);
  };
}

/**
 * Displays 4 paragraphs at a delay interval using promises
 * @param text Text to be shown at delay interval
 * @param delay Delay time in seconds
 */
function runPromises(text, delay){
  // code goes here
  console.log('runPromises is called', text, delay);
  
  const funToRun = function(){
  return new Promise(function(resolve, reject){
        setTimeout(addParagraph, delay, text)
        resolve();
  })}

  funToRun()
  .then(setTimeout(addParagraph, delay*2, text))
  .then(setTimeout(addParagraph, delay*3, text))
  .then(setTimeout(addParagraph, delay*4, text))
}

// NOTE: You can also start with the addParagraph function implementation followed by runCallBacks, runForLoop and runPromises
// And you can test it by calling the function with some given parameters
// Uncomment below functions calls to test if the function works

// addParagraph('Lorem ipsum dolor sit.') // should result in having a new paragraph in the paragraphListElement container
// runCallBacks('Lorem ipsum dolor sit.', 1); // should display given text 4 times with 1 second delay between displays
// runForLoop('Lorem ipsum dolor sit.', 1); // should display given text 4 times with 1 second delay between displays
// runPromises('Lorem ipsum dolor sit.', 1); // should display given text 4 times with 1 second delay between displays
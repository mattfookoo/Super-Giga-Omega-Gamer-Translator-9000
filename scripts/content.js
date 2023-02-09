const body = document.querySelector("body");
const nodes = body.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,a,span') 


//UWU-ify TEXT IF TOGGLED
function applyUwu() {
//iterate through our array of nodes
  nodes.forEach((el) => {
    //We use regex to look for specific key letters or words and replace them with the modified string 
    el.textContent = el.textContent.replace(/r{2}/gi, 'ww');
    el.textContent = el.textContent.replace(/[rl]+/gi, 'w');
    el.textContent = el.textContent.replace(/\byou\b/gi, 'uwu');
  });
}

function applyPirate(){
  //iterate through our array of nodes
  nodes.forEach((el) => {
    //We use regex to look for specific key letters or words and replace them with the modified string 
    el.textContent = el.textContent.replace(/\bleft\b/gi, 'port');
    el.textContent = el.textContent.replace(/\bright\b/gi, 'starboard');
    el.textContent = el.textContent.replace(/\byou\b/gi, `ye'`);
    el.textContent = el.textContent.replace(/\bof\b/gi, `o'`);
    el.textContent = el.textContent.replace(/n(?:g)/gi, `n'`);
    el.textContent = el.textContent.replace(/\bare\b/gi, `arrr`);
  });
}

//CHECK IF UWUIFIER IS TOGGLED AND RUN 
chrome.storage.local.get("uwustate", function (items) {
  console.log("UWUifier is set to " + items["uwustate"]);
  if (items["uwustate"]) {
      console.log('run the function!!!')
      applyUwu();
  } else {
    console.log('DO NOTHING')
  }
})

//CHECK IF PIRATE IS TOGGLED AND RUN 
chrome.storage.local.get("yarrstate", function (items) {
  console.log("YARRifier is set to " + items["yarrstate"]);
  if (items["yarrstate"]) {
      console.log('run the function!!!')
      applyPirate();
  } else {
    console.log('DO NOTHING')
  }
})
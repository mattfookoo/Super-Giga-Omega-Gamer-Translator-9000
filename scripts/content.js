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

//YARR-IFY THE TEXT IF TOGGLED 
function applyPirate(){
  //iterate through our array of nodes
  nodes.forEach((el) => {
    //We use regex to look for specific key letters or words and replace them with the modified string 
    el.textContent = el.textContent.replace(/\bleft\b/gi, 'port');
    el.textContent = el.textContent.replace(/\bright\b/gi, 'starboard');
    el.textContent = el.textContent.replace(/\byou\b/gi, `ye'`);
    el.textContent = el.textContent.replace(/\bof\b/gi, `o'`);
    el.textContent = el.textContent.replace(/i(?:n)(?:g)(?![a-z])/gi, `in'`);
    el.textContent = el.textContent.replace(/\b is\b/gi, ` be`);
    el.textContent = el.textContent.replace(/\b it’s\b/gi, ` it be`);
    el.textContent = el.textContent.replace(/\bare\b/gi, `arrr`);
  });
}

//WAAGH-IFY THE TEXT IF TOGGLED 
function applyWAAGH(){
  //iterate through our array of nodes
  nodes.forEach((el) => {
    //We use regex to look for specific key letters or words and replace them with the modified string 
    el.textContent = el.textContent.replace(/\b the \b/gi, ' da ');
    el.textContent = el.textContent.replace(/\byou \b/gi, `ya `);
    el.textContent = el.textContent.replace(/i(?:n)(?:g)(?![a-z])/gi, `in'`);
    el.textContent = el.textContent.replace(/ t(?:h)(?=[aeiou])/gi, ` d`);
    el.textContent = el.textContent.replace(/(c(?![ehiy]))/gi, `k`);
    el.textContent = el.textContent.replace(/\b is \b/gi, ` iz `);
    el.textContent = el.textContent.replace(/ (?:h)/gi, ` '`);
    el.textContent = el.textContent.replace(/(?<=[aeiou])t(?:h)(?=[io])/gi, 'f')
    el.textContent = el.textContent.toUpperCase();
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

//CHECK IF WAAGH IS TOGGLED AND RUN 
chrome.storage.local.get("WAAGHstate", function (items) {
  console.log("WAAGHifier is set to " + items["WAAGHstate"]);
  if (items["WAAGHstate"]) {
      console.log('RUN DA FUNKTION!!!')
      applyWAAGH();
  } else {
    console.log('DO NUFFING')
  }
})
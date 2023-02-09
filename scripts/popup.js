//SET TOGGLE FUNCTION FOR UWUIFY
let uwuToggle = document.getElementById("uwucheckbox");
chrome.storage.local.get("uwustate", function (items) {
  let uwuElement = document.getElementById("uwucheckbox");
  if (uwuElement != null) {
    if (items["uwustate"]) {
      console.log('true')
      uwuToggle.checked = true;
    }else {
      console.log('false')
    uwuToggle.checked = false;
    }
  }
});
//CHANGE BUTTON STATE
if (uwuToggle != null) {
  uwuToggle.onclick = function () {
    console.log("user clicked the button");
    chrome.storage.local.get("uwustate", function (items) {
      if (items["uwustate"]) {
        chrome.storage.local.set({ "uwustate": false }, function () {
          console.log("user toggled uwustate to false");
          return;
         });
      }else{
        chrome.storage.local.set({ "uwustate": true }, function () {
          console.log("user toggled uwustate to true")
          return;
        });
      }
      return;
    });
  };
}

//SET TOGGLE FUNCTIONS FOR PIRATE TRANSLATION
let yarrToggle = document.getElementById("yarrcheckbox");
chrome.storage.local.get("yarrstate", function (items) {
  let yarrElement = document.getElementById("yarrcheckbox");
  if (yarrElement != null) {
    if (items["yarrstate"]) {
      console.log('true')
      yarrToggle.checked = true;
    }else {
      console.log('false')
      yarrToggle.checked = false;
    }
  }
});
//CHANGE BUTTON STATE
if (yarrToggle != null) {
  yarrToggle.onclick = function () {
    console.log("user clicked the button");
    chrome.storage.local.get("yarrstate", function (items) {
      if (items["yarrstate"]) {
        chrome.storage.local.set({ "yarrstate": false }, function () {
          console.log("user toggled yarrstate to false");
          return;
         });
      }else{
        chrome.storage.local.set({ "yarrstate": true }, function () {
          console.log("user toggled yarrstate to true")
          return;
        });
      }
      return;
    });
  };
}

//SET TOGGLE FUNCTION FOR WAAGH
//ORK BOIZ DON'T USE 'UMIE PASKAL KASE
let WAAGHToggle = document.getElementById("WAAGHcheckbox");
chrome.storage.local.get("WAAGHstate", function (items) {
  let WAAGHElement = document.getElementById("WAAGHcheckbox");
  if (WAAGHElement != null) {
    if (items["WAAGHstate"]) {
      console.log('true')
      WAAGHToggle.checked = true;
    }else {
      console.log('false')
      WAAGHToggle.checked = false;
    }
  }
});
//CHANGE BUTTON STATE
if (WAAGHToggle != null) {
  WAAGHToggle.onclick = function () {
    console.log("user clicked the button");
    chrome.storage.local.get("WAAGHstate", function (items) {
      if (items["WAAGHstate"]) {
        chrome.storage.local.set({ "WAAGHstate": false }, function () {
          console.log("user toggled WAAGHstate to false");
          return;
         });
      }else{
        chrome.storage.local.set({ "WAAGHstate": true }, function () {
          console.log("user toggled WAAGHstate to true")
          return;
        });
      }
      return;
    });
  };
}
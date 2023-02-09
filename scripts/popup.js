
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

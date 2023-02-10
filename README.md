# WCRI-56-Hackathon-Matt-Mike


### Minium Viable Product 
- [x] Iterate over document text and replace words/phrases
- [x] Ensure Iteration is functioning correctly 
- [x] Begin with UWU translate 

### STRETCH GOALS 
- [x] Add an enable/disable button 
- [x] Add talk like a pirate version 
- [x] Add Warhammer Ork version
- [ ] Add Shakespearean version
- [ ] Add Clark ASMR version 


### MATT CHANGELOG 
- Added toggle functions that access chromes local storage to check whether a switch is toggled on or off. Added two translation functions for now but will add way more in the AM. 
- Appended ./scripts/content.js to .get the status of the switches (true, undefined) from Chrome's local storage. Need to add more to code blocks to content.js and popup.js for additional translations. Code is gonna end up super verbose here. 
- BUG: The buttons are in need of some Major CSS styling. I tried but I ended up breaking even more, I'd hella appreciate if you could style the popup window. I wrapped the switches in a div just so they might be easier to format
- BUG: Try not to toggle two switches before refreshing a page or it will break everything. We can try to add a feature where toggling one switch will untoggle the others. 
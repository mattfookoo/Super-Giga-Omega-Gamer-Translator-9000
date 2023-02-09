// function test() {
//     const body = document.querySelector("body");
//     //Store the original text to toggle off 
//     const nodeStorage = body.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,a,span')
//     //declare new const variable to mutate the textContent
//     const nodes = body.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,a,span') 
//     console.log(nodes);
//     //iterate through our array of nodes
//     nodes.forEach((el) => {
//         //We use regex to look for specific key letters or words and replace them with the modified string 
//         el.textContent = el.textContent.replace(/[rl]+/gi, 'w');
//         el.textContent = el.textContent.replace(/\byou\b/gi, 'uwu');
//     });
// }


class Content {
    constructor() {
        this.tester = "hehe";
    }

    print() {
        console.log(this.tester);
    }
}


/**
 * Just target any text element (headers, p, span) within the body of the html
 * 
 */
//.replace(/[r,l]+/i, 'w')

/**
 * https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/
 * https://www.reddit.com/
 * https://twitter.com/ ?? Will we need to worry about authentication for this one ??
 * https://www.quora.com/ Will have to focus on span tags for this one
 * https://www.amazon.com/
 */
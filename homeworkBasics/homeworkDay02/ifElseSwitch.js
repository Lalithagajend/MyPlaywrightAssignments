//Create two functions : launchBrowser, runTests where,
 //a) launchBrowser need to take input as browserName (string) and do not return any
 //- use if-else (chrome or otherwise)
// - Print the value
// b) runTests need to take input as testType (string) and do not return any
// - use switch case (smoke, sanity, regression, default (smoke))
// - Print the values
//Call that function from the javascript

//const { run } = require("node:test")

function launchBrowser(browserName){
   
    if (browserName=="chrome"){
        console.log(`Launch Chrome`);
    }
    else if(browserName==="firefox") {
        console.log(`launch firefox`)
    }
    else if(browserName==="edge"){
        console.log(`launch edge`)
    }
    else if(browserName===`opera`){
        console.log(`launch opera`)
    }
    else{
        console.log(`please enter a valid browser name`)
    }
}

function runTests(testType){
    switch(testType){
        case "smoke":
            console.log('Run smoke test')
            break
        case "sanity":
            console.log('Run sanity test') 
            break
        case "regression":
            console.log('Run regression test')
            break
        default:
            console.log('run smoke test')
            break

    }


}

runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("abc")
launchBrowser("opera")
launchBrowser("chrome")
launchBrowser("firefox")
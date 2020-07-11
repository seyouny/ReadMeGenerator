const questions = [
    {
              type: "input",
              message: "What is your user name?",
              name: "username"
            },
            {
              type: "checkbox",
              message: "What languages do you know?",
              choices: ["HTML","Javascript","C++"],
              name: "password"
            },
            {
              type: "input",
              message: "What's your preferred method of communication?",
              name: "confirm"
            }

];
var inquirer = require("inquirer");
var prompt = inquirer.createPromptModule();

prompt(questions).then(function(response){
    console.log(response)
})
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your user name?",
//       name: "username"
//     },
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       choices: ["HTML","Javascript","C++"],
//       name: "password"
//     },
//     {
//       type: "input",
//       message: "What's your preferred method of communication?",
//       name: "confirm"
//     }
//   ])
//   .then(function(response) {
//       questions.push(response.name)
//   })
// console.log(questions)

// function writeToFile(fileName, data) {
//     var fs = require("fs");

//     fs.appendFile("message.txt",JSON.stringify(response),function(err){
//     if (err){
//         console.log("oh")
//     }
//   })
// }

// function init() {

// }

// init();

const questions = [
        {
              type: "input",
              message: "What is the title of the project?",
              name: "title"
            },
            {
              type: "input",
              message: "Give a description of the project.",
              name: "projDes"
            },
            {
              type: "input",
              message: "Please include any Installations required.",
              name: "installation"
            },
            {
              type: "input",
              message: "Please provide any Usage information.",
              name: "usage"
            },
            {
              type: "input",
              message: "What licenses are used?",
              name: "license"
            },
            {
              type: "input",
              message: "Give information about contributors",
              name: "contribute"
            },
            {
              type: "input",
              message: "What questions were asked?",
              name: "question"
            },
            {
              type: "input",
              message: "What tests were used?",
              name: "test"
            },
            {
              type: "input",
              message: "Please provide your GitHub username",
              name: "github"
            },
];
var inquirer = require("inquirer");
var prompt = inquirer.createPromptModule();

prompt(questions).then(function(response){
  const title = response.title;
  const des = response.projDes;
  const install = response.install;
  const usage = response.usage;
  const license = response.license;
  const contribute = response.contribute;
  const test = response.test;
  const question = response.question;
  const github = response.github;

  const readMe = 
('# ${title}' + title + '\n' +

'# Table of Contents'+ '\n' +
// ${Table of Contents},
'# Installations \n'+
install + '\n'+
'# Usage \n'+
usage + '\n'+
'# Licenses' + '\n'+
license + '\n'+
"# Contributing" + '\n'+
contribute + '\n'+
'# Tests' + '\n'+
test + '\n'+
'# Questions' + '\n'+ question + '\n' +
'# GitHub Information'+ '\n'+ github)
// ${GitHub Email}';
console.log(readMe)

var fs = require("fs");

fs.writeFile("README.mb",readMe,function(err){
if (err){
    console.log("oh")
}
})
})


function init() {
 
}

// init();

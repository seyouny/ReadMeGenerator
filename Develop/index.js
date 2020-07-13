
  const axios = require("axios");

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
const { url } = require("inspector");
var prompt = inquirer.createPromptModule();

prompt(questions).then(function(response){
  const title = response.title;
  const des = response.projDes;
  const install = response.installation;
  const usage = response.usage;
  const license = response.license;
  const contribute = response.contribute;
  const test = response.test;
  const question = response.question;
  const github = response.github;



      const queryUrl = 'https://api.github.com/users/'+github+'/repos?per_page=100';
  var image = '';
  var url = '';
      axios.get(queryUrl).then(function(res) {
        // const repoNames = res.data.map(function(repo) {
        //   console.log(repoNames);
        // });
          image = res.data[0].owner.avatar_url;
          url = res.data[0].owner.url;
          return image, url;
      })
  

  const readMe = 
  
('# ' + title + '\n' +

'# Table of Contents'+ '\n' +
'* Installations'+ '\n' +
'*Usage' + '\n' +
'*Licenses'+ '\n' +
'*Contributers'+ '\n' +
'*Tests' + '\n' +
'*Questions' + '\n' +
'GitHub Information' + '\n' +
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
'# GitHub Information'+ '\n'+ github) + '\n' +
'![alt text]'+ image + '\n'
'GitHub URL:' + url;
// ${GitHub Email}';
console.log(readMe)

var fs = require("fs");

fs.writeFile("README.md",readMe,function(err){
if (err){
    console.log("oh")
}
})
})


function init() {
 
}

// init();


const axios = require("axios");
// const gitGet = require("github.js");
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

// inquirer
//   .prompt({
//     message: "Enter your GitHub username:",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       // const repoNames = res.data.map(function(repo) {
//       //   console.log(repoNames);
//       // });
//         imagegit = res.data[0].owner.avatar_url;
//         urlgit = res.data[0].owner.url;
//     })
// })
const { url } = require("inspector");
var prompt = inquirer.createPromptModule();

prompt(questions).then(function(response){

  const queryUrl = 'https://api.github.com/users/'+response.github+'/repos?per_page=100';

  axios.get(queryUrl).then(function(res) {
    // const repoNames = res.data.map(function(repo) {
    //   console.log(repoNames);
    // });
      var imagegit = res.data[0].owner.avatar_url;
      var urlgit = res.data[0].owner.url;
      console.log(imagegit, urlgit)
  })

  const title = response.title;
  const des = response.projDes;
  const install = response.installation;
  const usage = response.usage;
  const license = response.license;
  const contribute = response.contribute;
  const test = response.test;
  const question = response.question;
  const github = response.github;

  // console.log(imagegit,urlgit)

  const readMe = 
  
    `${'# ' + title + '\n' + des + '\n' +

    '# Table of Contents' + '\n' +
    '* Installations' + '\n' +
    '*Usage' + '\n' +
    '*Licenses' + '\n' +
    '*Contributers' + '\n' +
    '*Tests' + '\n' +
    '*Questions' + '\n' +
    'GitHub Information' + '\n' +
    '# Installations \n' +
    install + '\n' +
    '# Usage \n' +
    usage + '\n' +
    '# Licenses' + '\n' +
    license + '\n' +
    "# Contributing" + '\n' +
    contribute + '\n' +
    '# Tests' + '\n' +
    test + '\n' +
    '# Questions' + '\n' + question + '\n' +
    '# GitHub Information' + '\n' + github}`


console.log(readMe)

var fs = require("fs");

fs.writeFile("README.md",readMe,function(err){
if (err){
    console.log("Please try again.")
}
})
})


function init() {
 
}

// init();

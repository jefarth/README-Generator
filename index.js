// Packages needed for this application
const generator = require(`./utils/generateMarkdown`)
const inquirer = require(`inquirer`);
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "What is the purpose of your project?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "What are the steps to install your project?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "How to use your project?",
    },
    {
        type: 'list',
        name: 'License',
        message: "What license's do you have on your project?",
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0',
        ],
    },
    {
        type: `input`,
        message: "Please advise any contributions made:",
        name: `Contributions`,
    },
    {
        type: `input`,
        message: "Please advise your test opporation performed for your project:",
        name: `Test`,
    },
    {
        type: `input`,
        message: "What is your GitHub username?",
        name: `UserName`,
    },
    {
        type: `input`,
        message: "What is your email address?",
        name: `Email`,
    },
];

// Function to write README file
function writeToFile(fileName, data) {

fs.writeFile("./"+fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
});

}

// Function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(data) {
       writeToFile("README.md", generator(data));
   });
}

// Function call to initialize app
init();

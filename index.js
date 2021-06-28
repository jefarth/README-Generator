// TODO: Include packages needed for this application
// const generator = require(`./utils/generateMarkdown`)
const inquirer = require(`inquirer`);
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the purpose of your project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How to use your project?',
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'What licenses do you have on your project?',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0',],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile("./"+fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
});

}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions);
}

// Function call to initialize app
init();

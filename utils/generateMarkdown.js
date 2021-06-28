// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

  ## Description
${data.Description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}

## Usage
To use this application: ${data.Usage}

## License
This project is licensed under the ${data.License}.

## Contributing
Contributing: ${data.Contributing}

## Tests
To run tests, you need to run the following command: ${data.Test}

## Questions
If you have any questions about the repo, please contact "${data.UserName}" directly at ${data.Email}.

`;
}

module.exports = generateMarkdown;

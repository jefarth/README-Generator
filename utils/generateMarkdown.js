// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

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
How to use this application. ${data.Usage}

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

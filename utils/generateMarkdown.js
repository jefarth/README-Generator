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
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Follow these steps to install the application: ${data.Installation}

  ## Usage
  To use this application: ${data.Usage}

  ## License
  This project is licensed under: ${data.License}.

  ## Contributions
  Contributions made by: ${data.Contributions}

  ## Tests
  Testing on this application was performed by: ${data.Test}

  ## Questions
  If you have any questions about the application, please contact "${data.UserName}" directly at ${data.Email}`;
}

module.exports = generateMarkdown;
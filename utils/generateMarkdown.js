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
  Follow these steps to install the application: To install this project first create a new repository on your local machine. Navigate to GitHub and find the "Code" button. Click on it and select "SSH" within the drop down menu. Copy the SSH key. Open up a new terminal inside the new repository you created and write "git clone". Paste the SSH key in after and hit enter.

  ## Usage
  To use this application: This project can be found live here for use: . ${data.Usage}

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